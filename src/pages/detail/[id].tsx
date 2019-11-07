import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import IDataObject from '../../interfaces';
import { findData } from '../../utils/sample-api';
import ListDetail from '../../components/ListDetail';
import { Span } from '../../styles/Common';

type Props = {
  item?: IDataObject;
  errors?: string;
};

const ListDetailPage: NextPage<Props> = ({ item, errors }) => {
  if (errors) {
    return (
      <Layout title={`Error | Next.js + TypeScript Example`}>
        <p>
          <Span color="error">Error:</Span> {errors}
        </p>
      </Layout>
    );
  }

  return <Layout title={`${item ? item.name : 'Detail'} | Next.js + TypeScript Example`}>{item && <ListDetail item={item} />}</Layout>;
};

ListDetailPage.getInitialProps = async ({ query }) => {
  try {
    const { id } = query;
    const item = await findData(Array.isArray(id) ? id[0] : id);
    return { item };
  } catch (err) {
    return { errors: err.message };
  }
};

export default ListDetailPage;

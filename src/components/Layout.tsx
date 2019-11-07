import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import { HeaderNav } from '../styles/Header';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <ThemeProvider theme={Theme.main()}>
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <HeaderNav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/list-class">
            <a>List Example</a>
          </Link>
          <Link href="/list-fc">
            <a>List Example (as Functional Component)</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </HeaderNav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  </ThemeProvider>
);

export default Layout;

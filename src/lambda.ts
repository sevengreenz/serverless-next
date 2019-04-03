import { APIGatewayProxyHandler } from 'aws-lambda';
import * as awsServerlessExpress from 'aws-serverless-express';
import app from './app';

const server = awsServerlessExpress.createServer(app);

const handler: APIGatewayProxyHandler = async (event, context) => {
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};

module.exports.handler = handler;

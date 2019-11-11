import { APIGatewayProxyHandler } from 'aws-lambda';
import * as awsServerlessExpress from 'aws-serverless-express';
import app from './app';

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
];

const server = awsServerlessExpress.createServer(app, undefined, binaryMimeTypes);

const handler: APIGatewayProxyHandler = async (event, context) => {
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};

module.exports.handler = handler;

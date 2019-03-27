# Serverless Next

Simple  Next.js with Serverless boilerplate.

## Getting started

Install the dependencies

```
yarn install
```

Start development server

```
yarn offline
```

Add AWS credential for deploy

```
./node_modules/.bin/serverless config credentials --provider aws --key [your access key] --secret [your secret access key]
```

Deploy to AWS

```
yarn deploy
```

Remove AWS resources

```
./node_modules/.bin/serverless remove
```

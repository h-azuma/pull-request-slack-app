#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import 'dotenv/config';
import { PullRequestSlackAppStack } from '../lib/pull-request-slack-app-stack';

const app = new cdk.App();
new PullRequestSlackAppStack(app, 'PullRequestSlackAppStack', {
  env: { account: process.env.ACCOUNT_ID, region: process.env.REGION },
});

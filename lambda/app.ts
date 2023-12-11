// import { App, ExpressReceiver } from '@slack/bolt';
// import { LogLevel } from '@slack/logger';
import { Context } from 'aws-lambda';

// const logLevel = LogLevel.DEBUG;
// const processBeforeResponse = false;

// const receiver = new ExpressReceiver({
//   signingSecret: process.env.SLACK_SIGNING_SECRET!,
//   processBeforeResponse,
// });

// const app = new App({
//   token: process.env.SLACK_BOT_TOKEN, // Bot User OAuth Access Token
//   logLevel,
//   receiver,
//   processBeforeResponse,
// });

// ------------------------
// Bolt メイン処理
// ------------------------

// ショートカット起動
// app.shortcut('{callback_id}', async ({ logger, client, body, ack }) => {
//   // logic...
//   await ack();
// });

// レスポンス処理
// app.view('{callback_id}', async ({ logger, client, body, ack }) => {
//   // logic...
//   await ack();
// });

// ------------------------
// AWS Lambda ハンドラ
// リクエストを受け付けたらExpressサーバを起動する
// ------------------------
// const awsServerlessExpress = require('aws-serverless-express');
// const server = awsServerlessExpress.createServer(receiver.app);

export const lambdaHandler = async (event: any, context: Context) => {
  // awsServerlessExpress.proxy(server, event, context);
  console.log(event);
};

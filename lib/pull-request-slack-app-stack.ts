import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import 'dotenv/config';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';

export class PullRequestSlackAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const botLambda = new lambda.Function(this, 'BotLambda', {
      functionName: 'pull-request-bot-lambda',
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'app.lambdaHandler',
      code: lambda.Code.fromAsset('./dist/lambda'),
    });

    const pullRequestRule = new events.Rule(this, 'PullRequestRule', {
      ruleName: 'pull-request-rule',
      eventPattern: {
        source: ['aws.codecommit'],
        detailType: ['CodeCommit Pull Request State Change'],
        resources: [
          `arn:aws:codecommit:${process.env.REGION}:${process.env.ACCOUNT_ID}:${process.env.REPOSITORY_NAME}`,
        ],
      },
    });
    pullRequestRule.addTarget(new targets.LambdaFunction(botLambda));
  }
}

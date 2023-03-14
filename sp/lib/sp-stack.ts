import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import { DynamoAttributeValue } from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
//define scope,logical id and props
export class SpStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // dynamo table
    const dynamodbdemo = new dynamodb.Table(this,'dynamodblogicalid',{
    readCapacity:3,
    writeCapacity:3,
    partitionKey:{name:'customerid', type: dynamodb.AttributeType.NUMBER}  
    })
    // logical id used by cf to reference the service
    // example resourc
    // const queue = new sqs.Queue(this, 'SpQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

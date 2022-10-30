import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3, RemovalPolicy } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    Bucket.fromBucketArn(this, "s3Config", "")
    // The code that defines your stack goes here
    const s3Stack = new s3.Bucket(this, "myFirstBucket", {
      versioned: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      enforceSSL: true
    });
  }
}

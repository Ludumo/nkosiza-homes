import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-central-1',
});

const s3 = new AWS.S3();

const params: AWS.S3.CreateBucketRequest = {
  Bucket: 'ludumobucket',
  CreateBucketConfiguration: {
    LocationConstraint: 'eu-central-1',
  },
};

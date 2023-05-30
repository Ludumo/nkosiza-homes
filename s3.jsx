
const AWS = require('aws-sdk');


AWS.config.updtade({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "eu-central-1",
})


const s3 = new AWS.S3();


const params = {
    Bucket: 'ludumobucket',
    CreateBucketConfiguration: {
    LocationConstraint: 'eu-central-1',
    },
  };
    
 
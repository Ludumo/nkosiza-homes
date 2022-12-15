import dotenv from 'dotenv'
import aws from 'aws-sdk'



dotenv.config()

const region = "eu-central-1"
const bucketName = "ludumobucket"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey =  process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})
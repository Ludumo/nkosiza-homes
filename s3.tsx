import dotenv from 'dotenv'
import aws from 'aws-sdk'



dotenv.config()

const region = "eu-central-1"
const bucketName = "ludumobucket"
const accessKeyId = 'AKIAQS3CVMPSQ2CE6VM5'/* process.env.AWS_ACCESS_KEY_ID */
const secretAccessKey = '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' /* process.env.AWS_SECRET_ACCESS_KEY */

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})
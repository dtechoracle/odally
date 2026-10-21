const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
require('dotenv').config();

const s3 = new S3Client({
  region: process.env.AWS_REGION || "us-east-2",
  endpoint: process.env.AWS_ENDPOINT_URL_S3,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  forcePathStyle: true,
});

async function run() {
  try {
    console.log("Uploading test file to Neon S3...");
    const res = await s3.send(new PutObjectCommand({
      Bucket: "uploads",
      Key: "test-direct-upload.txt",
      Body: "Hello world",
      ContentType: "text/plain"
    }));
    console.log("Direct upload successful!", res);
  } catch (err) {
    console.error("Direct upload failed:", err);
  }
}

run();

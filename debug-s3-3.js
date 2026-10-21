const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
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
    const command = new PutObjectCommand({
      Bucket: "uploads",
      Key: "test-video-3.mp4",
      // ContentType: "video/mp4", // OMITTED
    });

    const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
    console.log("Presigned URL generated.");

    const res = await fetch(presignedUrl, {
      method: "PUT",
      body: "fake video data"
      // headers omitted
    });

    console.log("Status:", res.status);
    console.log("Response body:", await res.text());

  } catch (err) {
    console.error("Test failed:", err);
  }
}

run();

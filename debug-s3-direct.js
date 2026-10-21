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
    const command = new PutObjectCommand({
      Bucket: "uploads",
      Key: "test-video-direct.mp4",
      ContentType: "video/mp4",
      Body: "fake video data"
    });

    console.log("\nAttempting direct PUT request...");
    const res = await s3.send(command);
    console.log("Status:", res.$metadata.httpStatusCode);

  } catch (err) {
    console.error("Test failed:", err.name, err.message);
  }
}

run();

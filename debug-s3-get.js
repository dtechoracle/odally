const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
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
    const command = new GetObjectCommand({
      Bucket: "uploads",
      Key: "test-video-direct.mp4",
    });

    const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
    console.log("Presigned GET URL generated:\n", presignedUrl);

    console.log("\nAttempting GET request...");
    const res = await fetch(presignedUrl);

    console.log("Status:", res.status);
    console.log("Response headers:", res.headers);

  } catch (err) {
    console.error("Test failed:", err);
  }
}

run();

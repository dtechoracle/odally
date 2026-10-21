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
  requestChecksumCalculation: "WHEN_REQUIRED",
  responseChecksumValidation: "WHEN_REQUIRED",
});

async function run() {
  try {
    const command = new PutObjectCommand({
      Bucket: "uploads",
      Key: "test-video.mp4",
      ContentType: "video/mp4",
    });

    const presignedUrl = await getSignedUrl(s3, command, { 
      expiresIn: 3600,
      unhoistableHeaders: new Set(["x-amz-checksum-crc32", "x-amz-sdk-checksum-algorithm"]),
    });
    console.log("Presigned URL generated:\n", presignedUrl);

    console.log("\nAttempting PUT request...");
    const res = await fetch(presignedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "video/mp4"
      },
      body: "fake video data"
    });

    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Response body:", text);

  } catch (err) {
    console.error("Test failed:", err);
  }
}

run();

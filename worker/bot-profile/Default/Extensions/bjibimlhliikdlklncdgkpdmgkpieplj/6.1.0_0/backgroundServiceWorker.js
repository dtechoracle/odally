try {
  // RecordRTC yet to be added to importScripts
  importScripts(
    "./app/libs/socket-io.min.js",
    "./app/libs/s3.js",
    "./app/libs/db.js",
    "./app/libs/sentry.min.js",
    "./app/libs/sentry.tracing.min.js",
    "./app/background.js"
  );
} catch (e) {
  console.error(e);
}
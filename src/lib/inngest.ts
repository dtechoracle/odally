import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "meeting-agent",
  name: "Odally",
  baseUrl: process.env.NODE_ENV === "development" ? "http://127.0.0.1:8288" : undefined,
  isDev: process.env.NODE_ENV === "development",
});

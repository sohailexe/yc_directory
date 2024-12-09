// src/sanity/lib/client.ts
import "server-only";
import { createClient } from "next-sanity";

import { dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion: "vX",
  useCdn: false,
  token,
});

if (!writeClient.config().token) {
  throw new Error(
    "No token found for writeClient. Please ensure that the `SANITY_WRITE_TOKEN` environment variable is set."
  );
}

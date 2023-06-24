import { createBrotliCompress } from "node:zlib";
import archive from "../archive.mjs";

export async function compress(session, args) {
  const archStrategy = createBrotliCompress();
  await archive(session, args, archStrategy);
}

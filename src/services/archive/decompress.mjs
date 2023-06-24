import { createBrotliDecompress } from "node:zlib";
import archive from "../archive.mjs";

export async function decompress(session, args) {
  const archStrategy = createBrotliDecompress();
  await archive(session, args, archStrategy);
}

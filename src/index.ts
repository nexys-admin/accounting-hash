import crypto from "crypto";
import { Entry } from "./type.js";

const toHash = (s: string) =>
  crypto.createHash("sha256").update(s).digest("base64");

const objToHash = (s: any) => toHash(JSON.stringify(s));

export const entriesToHash = (entries: Entry[]): string => objToHash(entries);

console.log("hello world 2", objToHash({ name: "sdf" }), toHash("sdf"));
console.log(objToHash({ name: "sdf" }) === objToHash({ name: "sdfj" }));

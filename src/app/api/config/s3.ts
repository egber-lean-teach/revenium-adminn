import { IS3ClientRequest } from "@/app/core/application/dto";

const s3Data: IS3ClientRequest = {
  bucketName: process.env.AWS_BUCKET_NAME || "",
  key: process.env.AWS_KEY || "",
  region: process.env.AWS_REGION || "",
  secret_access_key: process.env.AWS_SECRET_ACCESS_KEY || "",
  access_key_id: process.env.AWS_ACCESS_KEY_ID || "",
};

export default s3Data;

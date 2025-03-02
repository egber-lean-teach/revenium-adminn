import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { IBucket } from "../interfaces";
import { IS3ClientRequest } from "../dto";

class UtilApplication {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({ region: "us-east-2" });
  }

  public async loadJsonS3(request: IS3ClientRequest) {
    const params: IBucket = {
      Bucket: request.bucketName || "",
      Key: request.key || "",
    };

    const command = new GetObjectCommand(params);
    const data = await this.s3Client.send(command);
    const jsonData = await data.Body?.transformToString();
    return JSON.parse(jsonData || "{}");
  }
}

const utilApplication = new UtilApplication();
export default utilApplication;

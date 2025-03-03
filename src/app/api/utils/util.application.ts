import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { IBucket, IBucketCreate } from "../../core/application/interfaces";
import { injectable } from "tsyringe";
import s3Data from "../config/s3";
import { IS3Model } from "../models/s3.model";

@injectable()
export default class UtilApplication {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: s3Data.region,
      credentials: {
        accessKeyId: s3Data.access_key_id,
        secretAccessKey: s3Data.secret_access_key,
      },
    });
  }

  public async loadJsonS3(): Promise<IS3Model> {
    const params: IBucket = {
      Bucket: s3Data.bucketName,
      Key: s3Data.key,
    };
    console.log("s3Data", s3Data);
    try {
      const command = new GetObjectCommand(params);
      const data = await this.s3Client.send(command);

      if (!data.Body) {
        throw new Error("No data found in S3 object");
      }

      const jsonData = await data.Body.transformToString();
      return JSON.parse(jsonData);
    } catch (error: unknown) {
      console.error("Error loading JSON from S3:", error);
      throw new Error("Failed to load JSON from S3");
    }
  }

  public async saveJsonS3(newData: IS3Model): Promise<{ message: string }> {
    const params: IBucketCreate<string> = {
      Bucket: s3Data.bucketName,
      Key: s3Data.key,
      Body: JSON.stringify(newData),
      ContentType: "application/json",
    };

    try {
      const command = new PutObjectCommand(params);
      await this.s3Client.send(command);
      return {
        message: "Create organization success",
      };
    } catch (error: unknown) {
      console.log({
        message: "Error to create",
      });
      throw new Error(`Error with the saveJsonS3 ${error}`);
    }
  }
}

import { inject, injectable } from "tsyringe";
import UtilApplication from "@/app/api/utils/util.application";
import { S3Model } from "@/app/api/models";

@injectable()
export default class TextRepository {
  constructor(
    @inject(UtilApplication) private utilApplication: UtilApplication
  ) {}

  public async getTexts(): Promise<S3Model> {
    try {
      const data = await this.utilApplication.loadJsonS3();
      console.log("data", data);
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }

  public async postText(newText: S3Model): Promise<{ message: string }> {
    try {
      return await this.utilApplication.saveJsonS3(newText);
    } catch (error: unknown) {
      throw error;
    }
  }
}

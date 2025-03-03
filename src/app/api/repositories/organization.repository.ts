import { inject, injectable } from "tsyringe";
import { IOrganizationModel } from "../models";
import { UtilApplication } from "../utils/util.application";
import { IS3ClientRequest } from "@/app/core/application/dto";

@injectable()
export class OrganizationRepository {
  constructor(
    @inject(UtilApplication) private utilApplication: UtilApplication
  ) {}

  public async getOrganizations(
    request: IS3ClientRequest
  ): Promise<IOrganizationModel | string> {
    try {
      return await this.utilApplication.loadJsonS3(request);
    } catch (error: unknown) {
      throw new Error(`Error to get all organizations ERROR: ${error}`);
    }
  }
}

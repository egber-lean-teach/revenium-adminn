import { inject, injectable } from "tsyringe";
import { IOrganizationModel } from "../models";
import { OrganizationRepository } from "../repositories/organization.repository";
import { IS3ClientRequest } from "@/app/core/application/dto";

@injectable()
export class OrganizationService {
  constructor(
    @inject(OrganizationRepository)
    private organizationRepository: OrganizationRepository
  ) {}
  public async getAll(
    request: IS3ClientRequest
  ): Promise<IOrganizationModel | string> {
    try {
      return await this.organizationRepository.getOrganizations(request);
    } catch (error: unknown) {
      throw error;
    }
  }
}

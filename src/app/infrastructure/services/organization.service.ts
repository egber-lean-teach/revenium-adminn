import { IResponse } from "@/app/core/application/dto";
import { UtilInfrastructure } from "../utils/util.infrastructure";
import { IOrganization } from "@/app/core/application/interfaces";

class OrganizationService {
  private utilInfrastructure: UtilInfrastructure;

  constructor() {
    this.utilInfrastructure = new UtilInfrastructure();
  }

  public async getAllOrganization(): Promise<IResponse<IOrganization[]>> {
    try {
      const data = await this.utilInfrastructure.get<
        IResponse<IOrganization[]>
      >("organizations");
      console.log("data", data);
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }
}

const organizationService = new OrganizationService();
export default organizationService;

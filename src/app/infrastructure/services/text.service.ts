import { UtilInfrastructure } from "../utils/util.infrastructure";
import { ITextResponseComplete } from "@/app/core/application/dto/textResponse";

class TextService {
  private utilInfrastructure: UtilInfrastructure;

  constructor() {
    this.utilInfrastructure = new UtilInfrastructure();
  }

  public async getTexts(): Promise<ITextResponseComplete> {
    try {
      const data = await this.utilInfrastructure.get<ITextResponseComplete>(
        "texts"
      );
      console.log("data", data);
      return data;
    } catch (error: unknown) {
      throw error;
    }
  }
}

const organizationService = new TextService();
export default organizationService;

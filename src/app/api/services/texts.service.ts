import { inject, injectable } from "tsyringe";
import TextRepository from "@/app/api/repositories/texts.repository";
import { IDataItem, S3Model } from "@/app/api/models";
import UtilApplication from "../utils/util.application";

@injectable()
export default class TextService {
  constructor(
    @inject(TextRepository)
    private textRepository: TextRepository
  ) {}
  public async getAll() {
    try {
      return await this.textRepository.getTexts();
    } catch (error: unknown) {
      throw error;
    }
  }

  public async postText(
    newText: IDataItem
  ): Promise<{ message: string } | undefined> {
    const { category, subcategory, name } = newText;

    try {
      const categoryVerify = UtilApplication.verifySpecialSymbols(category); // Verify exists special Symbols
      const subcategoryVerify =
        UtilApplication.verifySpecialSymbols(subcategory);
      const nameVerify = UtilApplication.verifySpecialSymbols(name);

      if (categoryVerify || subcategoryVerify || nameVerify) return; // Return for show messge is not support symbols
      const [newCategory, newSubcategory, newName] =
        UtilApplication.removeSpace(category, subcategory, name); // Get values without underscore

      const key = UtilApplication.generateKey(
        newCategory,
        newSubcategory,
        newName
      );
      newText.id = key; // Change value id for new value key

      const texts: S3Model = await this.textRepository.getTexts(); // Get all texts
      texts[key] = newText; // Create new text
      return await this.textRepository.postText(texts);
    } catch (error: unknown) {
      throw error;
    }
  }

  public async putText(newText: IDataItem): Promise<{ message: string }> {
    const { id } = newText;
    try {
      const texts = await this.textRepository.getTexts(); // Get all texts
      const textFoundById = await this.textRepository.getTextById(id);
      if (!textFoundById) return { message: "not found" };

      texts[id] = newText; // Change text by id for new text
      return await this.textRepository.postText(texts);
    } catch (error: unknown) {
      throw error;
    }
  }

  public async deleteText(id: string): Promise<{ message: string }> {
    try {
      const texts = await this.textRepository.getTexts();
      const textById = await this.textRepository.getTextById(id);

      if (!textById) return { message: "not found" };
      delete texts[id];
      return await this.textRepository.postText(texts);
    } catch (error: unknown) {
      throw error;
    }
  }
}

export class UtilApplicationInternal {
  public static firstFourLetter(value: string): string {
    const [letter1, letter2, letter3, letter4] = value;
    return `${letter1}${letter2}${letter3}${letter4}`;
  }

  public static async copyText(value: string): Promise<boolean | undefined> {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (error: unknown) {
      console.log({
        message: error,
      });
    }
  }
}

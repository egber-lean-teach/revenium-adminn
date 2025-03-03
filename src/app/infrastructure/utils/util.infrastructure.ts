export class UtilInfrastructure {
  private baseUrl: string = "/api";

  constructor(baseUrlClient?: string) {
    this.baseUrl = baseUrlClient || this.baseUrl;
  }
  private getHeaders(
    headers: Record<string, string> = {}
  ): Record<string, string> {
    return {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  public async fetApi<B>(
    url: string,
    method: string,
    headers?: Record<string, string>,
    body?: B
  ) {
    const response = await fetch(url, {
      headers: headers || undefined,
      method,
      body: JSON.stringify(body) || undefined,
    });
    return response;
  }

  public async get<T>(endpoint: string): Promise<T> {
    try {
      const headers = this.getHeaders();
      const response = await this.fetApi(`/api/organizations`, "GET", headers);
      console.log("response", response);
    } catch (error: unknown) {
      throw error;
    }
  }
}

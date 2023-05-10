import LinksysClient from "../client";

class LinksysBaseService {
  protected client: LinksysClient;

  constructor(client: LinksysClient) {
    this.client = client;
  }
}

export default LinksysBaseService;

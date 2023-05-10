import { LinksysClient } from "../src";

describe("Test Linksys Client", () => {
  const linksys = new LinksysClient(
    process.env.ADDR,
    process.env.USERNAME,
    process.env.PASSWORD
  );

  it("Core/CheckAdminPassword", async () => {
    const result = await linksys.Core_CheckAdminPassword();
    expect(result).toHaveProperty("result");
  });

  it("Core/GetAdminPasswordAuthStatus", async () => {
    const result = await linksys.Core_GetAdminPasswordAuthStatus();
    expect(result).toHaveProperty("result");
  });

  it("Core/GetAdminPasswordHint", async () => {
    const result = await linksys.Core_GetAdminPasswordHint();
    expect(result).toHaveProperty("result");
  });

  it("Core/GetAdminPasswordRestrictions", async () => {
    const result = await linksys.Core_GetAdminPasswordRestrictions();
    expect(result).toHaveProperty("result");
  });

  it("Core/GetDeviceInfo", async () => {
    const result = await linksys.Core_GetDeviceInfo();
    expect(result).toHaveProperty("result");
  });
});

import { LinksysClient } from "../src";

describe("Test Linksys Client", () => {
  const linksys = new LinksysClient(
    process.env.ADDR,
    process.env.USERNAME,
    process.env.PASSWORD
  );

  it("ServiceCheck", () => {
    expect(linksys).toHaveProperty("Core");
    expect(linksys).toHaveProperty("DeviceList");
    expect(linksys).toHaveProperty("Firewall");
    expect(linksys).toHaveProperty("FirmwareUpdate");
    expect(linksys).toHaveProperty("GuestNetwork");
    expect(linksys).toHaveProperty("RouterManagement");
    expect(linksys).toHaveProperty("RouterUPnP");
    expect(linksys).toHaveProperty("Router");
    expect(linksys).toHaveProperty("WirelessAP");
  });

  it("Core/CheckAdminPassword", async () => {
    const res = await linksys.Core.CheckAdminPassword();
    expect(res).toHaveProperty("result");
  });
});

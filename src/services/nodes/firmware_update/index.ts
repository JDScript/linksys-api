/// <reference path = "typings.ts" />
/// <reference path = "../../../typings.ts" />

import LinksysBaseService from "../../base";

export class LinksysNodesFirmwareUpdateService extends LinksysBaseService {
  public GetFirmwareUpdateStatus() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Nodes.FirmwareUpdate.FirmwareUpdateStatus>
    >("nodes/firmwareupdate/GetFirmwareUpdateStatus", {});
  }

  public UpdateFirmwareNow(params: { onlyCheck: boolean }) {
    return this.client.call<Linksys.Response.Base<undefined>>(
      "nodes/firmwareupdate/UpdateFirmwareNow",
      params
    );
  }
}

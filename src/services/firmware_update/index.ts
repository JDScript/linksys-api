/// <reference path = "typings.ts" /> 
/// <reference path = "../../typings.ts" /> 

import LinksysBaseService from "../base";

export class LinksysFirmwareUpdateService extends LinksysBaseService {
  public GetFirmwareUpdateSettings() {
    return this.client.call<
      Linksys.Response.Base<Linksys.FirmwareUpdate.FirmwareUpdateSettings>
    >("firmwareupdate/GetFirmwareUpdateSettings", {});
  }

  public GetFirmwareUpdateStatus() {
    return this.client.call<
      Linksys.Response.Base<Linksys.FirmwareUpdate.FirmwareUpdateStatus>
    >("firmwareupdate/GetFirmwareUpdateStatus", {});
  }

  public SetFirmwareUpdateSettings(params: {
    autoUpdateWindow: {
      durationMinutes: number;
      startMinute: number;
    };
    updatePolicy: "Manual" | "AutomaticallyCheckAndInstall";
  }) {
    return this.client.call<Linksys.Response.Base<undefined>>(
      "firmwareupdate/SetFirmwareUpdateSettings",
      params
    );
  }

  public UpdateFirmwareNow(params: { onlyCheck: boolean }) {
    return this.client.call<Linksys.Response.Base<undefined>>(
      "firmwareupdate/UpdateFirmwareNow",
      params
    );
  }
}
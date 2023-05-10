/// <reference path = "typings.ts" />
/// <reference path = "../../typings.ts" />

import LinksysBaseService from "../base";

export class LinksysDeviceListService extends LinksysBaseService {
  public GetDevices(params?: { sinceRevision: number }) {
    return this.client.call<Linksys.Response.Base<Linksys.DeviceList.Devices>>(
      "devicelist/GetDevices",
      params ?? {}
    );
  }

  public GetLocalDevice() {
    return this.client.call<
      Linksys.Response.Base<Linksys.DeviceList.LocalDevice>
    >("devicelist/GetLocalDevice", {});
  }

  public SetDeviceProperties(params: {
    deviceID: string;
    propertiesToModify: {
      name: string;
      value: string;
    }[];
  }) {
    return this.client.call<Linksys.Response.Base<undefined>>(
      "devicelist/SetDeviceProperties",
      params
    );
  }
}

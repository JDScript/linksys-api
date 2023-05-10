/// <reference path = "typings.ts" /> 
/// <reference path = "../../typings.ts" /> 

import LinksysBaseService from "../base";

export class LinksysCoreService extends LinksysBaseService {
  public CheckAdminPassword() {
    return this.client.call<Linksys.Response.Base<undefined>>(
      "core/CheckAdminPassword",
      {}
    );
  }

  public GetAdminPasswordAuthStatus() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Core.AdminPasswordAuthStatus>
    >("core/GetAdminPasswordAuthStatus", {});
  }

  public GetAdminPasswordHint() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Core.AdminPasswordHint>
    >("core/GetAdminPasswordHint", {});
  }

  public GetAdminPasswordRestrictions() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Core.AdminPasswordRestrictions>
    >("core/GetAdminPasswordRestrictions", {});
  }

  public GetDeviceInfo() {
    return this.client.call<Linksys.Response.Base<Linksys.Core.DeviceInfo>>(
      "core/GetDeviceInfo",
      {}
    );
  }

  public IsAdminPasswordDefault() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Core.IsAdminPasswordDefault>
    >("core/IsAdminPasswordDefault", {});
  }

  public Reboot() {
    return this.client.call<Linksys.Response.Base<undefined>>(
      "core/Reboot",
      {}
    );
  }

  public SetAdminPassword(params: {
    adminPassword: string;
    passwordHint?: string;
  }) {
    return this.client.call<Linksys.Response.Base<undefined>>(
      "core/SetAdminPassword2",
      params
    );
  }
}

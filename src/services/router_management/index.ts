/// <reference path = "typings.ts" /> 
/// <reference path = "../../typings.ts" /> 

import LinksysBaseService from "../base";

export class LinksysRouterManagementService extends LinksysBaseService {
  public GetManagementSettings() {
    return this.client.call<
      Linksys.Response.Base<Linksys.RouterManagement.ManagementSettings>
    >("routermanagement/GetManagementSettings2", {});
  }

  public GetRemoteManagementStatus() {
    return this.client.call<
      Linksys.Response.Base<Linksys.RouterManagement.RemoteManagementStatus>
    >("routermanagement/GetRemoteManagementStatus", {});
  }
}
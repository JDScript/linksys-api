/// <reference path = "typings.ts" /> 
/// <reference path = "../../typings.ts" /> 

import LinksysBaseService from "../base";

export class LinksysRouterUPnPService extends LinksysBaseService {
  public GetUPnPSettings() {
    return this.client.call<
      Linksys.Response.Base<Linksys.RouterUPnP.UPnPSettings>
    >("routerupnp/GetUPnPSettings", {});
  }
}
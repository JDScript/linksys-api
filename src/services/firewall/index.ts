/// <reference path = "typings.ts" /> 
/// <reference path = "../../typings.ts" /> 

import LinksysBaseService from "../base";

export class LinksysFirewallService extends LinksysBaseService {
  public GetALGSettings() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Firewall.ALGSettings>
    >("firewall/GetALGSettings", {});
  }
}
/// <reference path = "typings.ts" /> 
/// <reference path = "../../typings.ts" /> 

import LinksysBaseService from "../base";

export class LinksysRouterService extends LinksysBaseService {
  public GetDHCPClientLeases() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Router.DHCPClientLeases>
    >("router/GetDHCPClientLeases", {});
  }

  public GetEthernetPortConnections() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Router.EthernetPortConnections>
    >("router/GetEthernetPortConnections", {});
  }

  public GetExpressForwardingSettings() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Router.ExpressForwardingSettings>
    >("router/GetExpressForwardingSettings", {});
  }

  public GetIPv6Settings() {
    return this.client.call<Linksys.Response.Base<Linksys.Router.IPv6Settings>>(
      "router/GetIPv6Settings2",
      {}
    );
  }

  public GetLANSettings() {
    return this.client.call<Linksys.Response.Base<Linksys.Router.LANSettings>>(
      "router/GetLANSettings",
      {}
    );
  }

  public GetMACAddressCloneSettings() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Router.MACAddressCloneSettings>
    >("router/GetMACAddressCloneSettings", {});
  }

  public GetRoutingSettings() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Router.RoutingSettings>
    >("router/GetRoutingSettings", {});
  }

  public GetWANStatus() {
    return this.client.call<Linksys.Response.Base<Linksys.Router.WANStatus>>(
      "router/GetWANStatus3",
      {}
    );
  }
}
/// <reference path = "typings.ts" />
/// <reference path = "../../../typings.ts" />

import LinksysBaseService from "../../base";

export class LinksysNodesNetworkConnectionsService extends LinksysBaseService {
  public GetNodesWirelessNetworkConnections() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Nodes.NetworkConnections.NodesWirelessNetworkConnections>
    >("nodes/networkconnections/GetNodesWirelessNetworkConnections", {});
  }

  public RefreshNodesWirelessNetworkConnections() {
    return this.client.call<
      Linksys.Response.Base<undefined>
    >("nodes/networkconnections/RefreshNodesWirelessNetworkConnections", {});
  }
}

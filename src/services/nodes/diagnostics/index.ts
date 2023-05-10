/// <reference path = "typings.ts" />
/// <reference path = "../../../typings.ts" />

import LinksysBaseService from "../../base";

export class LinksysNodesDiagnosticsService extends LinksysBaseService {
  public GetBackhaulInfo() {
    return this.client.call<
      Linksys.Response.Base<Linksys.Nodes.Diagnostics.BackhaulInfo>
    >("nodes/diagnostics/GetBackhaulInfo", {});
  }
}

import LinksysClient from "../../client";
import LinksysBaseService from "../base";
import { LinksysNodesDiagnosticsService } from "./diagnostics";
import { LinksysNodesFirmwareUpdateService } from "./firmware_update";
import { LinksysNodesNetworkConnectionsService } from "./network_connections";

export class LinksysNodesService extends LinksysBaseService {
  constructor(client: LinksysClient) {
    super(client);

    this._Diagnostics = new LinksysNodesDiagnosticsService(client);
    this._FirmwareUpdate = new LinksysNodesFirmwareUpdateService(client);
    this._NetworkConnections = new LinksysNodesNetworkConnectionsService(
      client
    );
  }

  // Services
  private _Diagnostics: LinksysNodesDiagnosticsService;
  public get Diagnostics() {
    return this._Diagnostics;
  }

  private _FirmwareUpdate: LinksysNodesFirmwareUpdateService;
  public get FirmwareUpdate() {
    return this._FirmwareUpdate;
  }

  private _NetworkConnections: LinksysNodesNetworkConnectionsService;
  public get NetworkConnections() {
    return this._NetworkConnections;
  }
}

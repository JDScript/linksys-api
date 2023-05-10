import axios, { AxiosError } from "axios";
import {
  LinksysCoreService,
  LinksysDeviceListService,
  LinksysFirewallService,
  LinksysFirmwareUpdateService,
  LinksysGuestNetworkService,
  LinksysNodesService,
  LinksysRouterManagementService,
  LinksysRouterService,
  LinksysRouterUPnPService,
  LinksysWirelessAPService,
} from "./services";

class LinksysClient {
  constructor(
    addr: string = "http://192.168.1.1",
    username: string = "admin",
    password: string = "admin"
  ) {
    this.requestInstance = LinksysClient.createAxiosInstance(
      addr,
      username,
      password
    );

    this._Core = new LinksysCoreService(this);
    this._DeviceList = new LinksysDeviceListService(this);
    this._Firewall = new LinksysFirewallService(this);
    this._FirmwareUpdate = new LinksysFirmwareUpdateService(this);
    this._GuestNetwork = new LinksysGuestNetworkService(this);
    this._Nodes = new LinksysNodesService(this);
    this._Router = new LinksysRouterService(this);
    this._RouterManagement = new LinksysRouterManagementService(this);
    this._RouterUPnP = new LinksysRouterUPnPService(this);
    this._WirelessAP = new LinksysWirelessAPService(this);
  }

  private requestInstance;

  // Services
  private _Core: LinksysCoreService;
  public get Core() {
    return this._Core;
  }

  private _DeviceList: LinksysDeviceListService;
  public get DeviceList() {
    return this._DeviceList;
  }

  private _Firewall: LinksysFirewallService;
  public get Firewall() {
    return this._Firewall;
  }

  private _FirmwareUpdate: LinksysFirmwareUpdateService;
  public get FirmwareUpdate() {
    return this._FirmwareUpdate;
  }

  private _GuestNetwork: LinksysGuestNetworkService;
  public get GuestNetwork() {
    return this._GuestNetwork;
  }

  private _Nodes: LinksysNodesService;
  public get Nodes() {
    return this._Nodes;
  }

  private _Router: LinksysRouterService;
  public get Router() {
    return this._Router;
  }

  private _RouterManagement: LinksysRouterManagementService;
  public get RouterManagement() {
    return this._RouterManagement;
  }

  private _RouterUPnP: LinksysRouterUPnPService;
  public get RouterUPnP() {
    return this._RouterUPnP;
  }

  private _WirelessAP: LinksysWirelessAPService;
  public get WirelessAP() {
    return this._WirelessAP;
  }

  public async call<T = any>(action: string, body: object): Promise<T> {
    try {
      const resp = await this.requestInstance.request({
        method: "post",
        data: body,
        headers: {
          "X-JNAP-Action": "http://linksys.com/jnap/" + action,
        },
      });

      return resp.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return Promise.reject(e.message);
      }
      return Promise.reject("Unknown Axios Error");
    }
  }

  private static createAxiosInstance(
    addr: string,
    username: string,
    password: string
  ) {
    const instance = axios.create({
      baseURL: addr + "/JNAP/",
      responseType: "json",
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.request.use((config) => {
      config.headers.set(
        "X-JNAP-Authorization",
        "Basic " + btoa(`${username}:${password}`)
      );
      return config;
    });

    return instance;
  }
}

export default LinksysClient;

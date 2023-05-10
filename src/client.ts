/// <reference path="types.ts" />

import axios, { AxiosError } from "axios";

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
  }

  private requestInstance;

  private async call<T = any>(action: string, body: object): Promise<T> {
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

  // Public APIs
  // Core
  public Core_CheckAdminPassword() {
    return this.call<Linksys.Response.Base<undefined>>(
      "core/CheckAdminPassword",
      {}
    );
  }

  public Core_GetAdminPasswordAuthStatus() {
    return this.call<
      Linksys.Response.Base<Linksys.Core.AdminPasswordAuthStatus>
    >("core/GetAdminPasswordAuthStatus", {});
  }

  public Core_GetAdminPasswordHint() {
    return this.call<Linksys.Response.Base<Linksys.Core.AdminPasswordHint>>(
      "core/GetAdminPasswordHint",
      {}
    );
  }

  public Core_GetAdminPasswordRestrictions() {
    return this.call<
      Linksys.Response.Base<Linksys.Core.AdminPasswordRestrictions>
    >("core/GetAdminPasswordRestrictions", {});
  }

  public Core_GetDeviceInfo() {
    return this.call<Linksys.Response.Base<Linksys.Core.DeviceInfo>>(
      "core/GetDeviceInfo",
      {}
    );
  }

  public Core_IsAdminPasswordDefault() {
    return this.call<
      Linksys.Response.Base<Linksys.Core.IsAdminPasswordDefault>
    >("core/IsAdminPasswordDefault", {});
  }

  public Core_Reboot() {
    return this.call<Linksys.Response.Base<undefined>>("core/Reboot", {});
  }

  public Core_SetAdminPassword(params: {
    adminPassword: string;
    passwordHint?: string;
  }) {
    return this.call<Linksys.Response.Base<undefined>>(
      "core/SetAdminPassword2",
      params
    );
  }

  // Device List
  public DeviceList_GetDevices(params?: { sinceRevision: number }) {
    return this.call<Linksys.Response.Base<Linksys.DeviceList.Devices>>(
      "devicelist/GetDevices",
      params ?? {}
    );
  }

  public DeviceList_GetLocalDevice() {
    return this.call<Linksys.Response.Base<Linksys.DeviceList.LocalDevice>>(
      "devicelist/GetLocalDevice",
      {}
    );
  }

  public DeviceList_SetDeviceProperties(params: {
    deviceID: string;
    propertiesToModify: {
      name: string;
      value: string;
    }[];
  }) {
    return this.call<Linksys.Response.Base<undefined>>(
      "devicelist/SetDeviceProperties",
      params
    );
  }

  // Firewall
  public Firewall_GetALGSettings() {
    return this.call<Linksys.Response.Base<Linksys.Firewall.ALGSettings>>(
      "firewall/GetALGSettings",
      {}
    );
  }

  // FirmwareUpdate
  public FirmwareUpdate_GetFirmwareUpdateSettings() {
    return this.call<
      Linksys.Response.Base<Linksys.FirmwareUpdate.FirmwareUpdateSettings>
    >("firmwareupdate/GetFirmwareUpdateSettings", {});
  }

  public FirmwareUpdate_GetFirmwareUpdateStatus() {
    return this.call<
      Linksys.Response.Base<Linksys.FirmwareUpdate.FirmwareUpdateStatus>
    >("firmwareupdate/GetFirmwareUpdateStatus", {});
  }

  public FirmwareUpdate_SetFirmwareUpdateSettings(params: {
    autoUpdateWindow: {
      durationMinutes: number;
      startMinute: number;
    };
    updatePolicy: "Manual" | "AutomaticallyCheckAndInstall";
  }) {
    return this.call<Linksys.Response.Base<undefined>>(
      "firmwareupdate/SetFirmwareUpdateSettings",
      params
    );
  }

  public FirmwareUpdate_UpdateFirmwareNow(params: { onlyCheck: boolean }) {
    return this.call<Linksys.Response.Base<undefined>>(
      "firmwareupdate/UpdateFirmwareNow",
      params
    );
  }

  // GuestNetwork
  public GuestNetwork_GetGuestRadioSettings() {
    return this.call<
      Linksys.Response.Base<Linksys.GuestNetwork.GuestRadioSettings>
    >("guestnetwork/GetGuestRadioSettings", {});
  }

  public GuestNetwork_SetGuestRadioSettings(
    params: Linksys.GuestNetwork.GuestRadioSettings
  ) {
    return this.call<Linksys.Response.Base<undefined>>(
      "guestnetwork/SetGuestRadioSettings",
      params
    );
  }

  // Router
  public Router_GetDHCPClientLeases() {
    return this.call<Linksys.Response.Base<Linksys.Router.DHCPClientLeases>>(
      "router/GetDHCPClientLeases",
      {}
    );
  }

  public Router_GetEthernetPortConnections() {
    return this.call<
      Linksys.Response.Base<Linksys.Router.EthernetPortConnections>
    >("router/GetEthernetPortConnections", {});
  }

  public Router_GetExpressForwardingSettings() {
    return this.call<
      Linksys.Response.Base<Linksys.Router.ExpressForwardingSettings>
    >("router/GetExpressForwardingSettings", {});
  }

  public Router_GetIPv6Settings() {
    return this.call<Linksys.Response.Base<Linksys.Router.IPv6Settings>>(
      "router/GetIPv6Settings2",
      {}
    );
  }

  public Router_GetLANSettings() {
    return this.call<Linksys.Response.Base<Linksys.Router.LANSettings>>(
      "router/GetLANSettings",
      {}
    );
  }

  public Router_GetMACAddressCloneSettings() {
    return this.call<
      Linksys.Response.Base<Linksys.Router.MACAddressCloneSettings>
    >("router/GetMACAddressCloneSettings", {});
  }

  public Router_GetRoutingSettings() {
    return this.call<Linksys.Response.Base<Linksys.Router.RoutingSettings>>(
      "router/GetRoutingSettings",
      {}
    );
  }

  public Router_GetWANStatus() {
    return this.call<Linksys.Response.Base<Linksys.Router.WANStatus>>(
      "router/GetWANStatus3",
      {}
    );
  }

  // Router Management
  public RouterManagement_GetManagementSettings() {
    return this.call<
      Linksys.Response.Base<Linksys.RouterManagement.ManagementSettings>
    >("routermanagement/GetManagementSettings2", {});
  }

  public RouterManagement_GetRemoteManagementStatus() {
    return this.call<
      Linksys.Response.Base<Linksys.RouterManagement.RemoteManagementStatus>
    >("routermanagement/GetRemoteManagementStatus", {});
  }

  // Router UPnP
  public RouterUPnP_GetUPnPSettings() {
    return this.call<Linksys.Response.Base<Linksys.RouterUPnP.UPnPSettings>>(
      "routerupnp/GetUPnPSettings",
      {}
    );
  }

  // WirelessAP
  public WirelessAP_GetRadioInfo() {
    return this.call<Linksys.Response.Base<Linksys.WirelessAP.RadioInfo>>(
      "wirelessap/GetRadioInfo3",
      {}
    );
  }

  public WirelessAP_SetRadioSettings(params: {
    bandSteeringMode: string;
    isBandSteeringEnabled: boolean;
    radios: {
      radioID: string;
      settings: {
        isEnabled: boolean;
        mode: string;
        ssid: string;
        broadcastSSID: boolean;
        channelWidth: string;
        channel: number;
        security: string;
        wpaPersonalSettings: {
          passphrase: string;
        };
      };
    }[];
  }) {
    return this.call<Linksys.Response.Base<undefined>>(
      "wirelessap/SetRadioSettings3",
      params
    );
  }
}

export default LinksysClient;

/// <reference path = "typings.ts" /> 
/// <reference path = "../../typings.ts" /> 

import LinksysBaseService from "../base";

export class LinksysWirelessAPService extends LinksysBaseService {
  public GetRadioInfo() {
    return this.client.call<
      Linksys.Response.Base<Linksys.WirelessAP.RadioInfo>
    >("wirelessap/GetRadioInfo3", {});
  }

  public SetRadioSettings(params: {
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
    return this.client.call<Linksys.Response.Base<undefined>>(
      "wirelessap/SetRadioSettings3",
      params
    );
  }
}
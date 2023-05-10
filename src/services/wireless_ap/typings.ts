declare namespace Linksys {
  namespace WirelessAP {
    interface RadioInfo {
      isBandSteeringSupported: boolean;
      radios: {
        radioID: string;
        physicalRadioID: string;
        bssid: string;
        band: string;
        supportedModes: string[];
        defaultMixedMode: string;
        supportedChannelsForChannelWidths: {
          channelWidth: string;
          channels: number[];
        }[];
        supportedSecurityTypes: string[];
        maxRADIUSSharedKeyLength: number;
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
    }
  }
}

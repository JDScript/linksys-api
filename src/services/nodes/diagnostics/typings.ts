declare namespace Linksys {
  namespace Nodes {
    namespace Diagnostics {
      interface BackhaulInfo {
        backhaulDevices: {
          deviceUUID: string;
          ipAddress: string;
          parentIPAddress: string;
          connectionType: string;
          wirelessConnectionInfo?: {
            radioID: string;
            channel: number;
            apRSSI: number;
            stationRSSI: number;
            apBSSID: string;
            stationBSSID: string;
          };
          speedMbps: string;
          timestamp: string;
        }[];
      }
    }
  }
}

declare namespace Linksys {
  namespace Nodes {
    namespace NetworkConnections {
      interface NodesWirelessNetworkConnections {
        nodeWirelessConnections: {
          deviceID: string;
          connections: {
            macAddress: string;
            negotiatedMbps: number;
            timestamp: string;
            wireless: {
              bssid: string;
              isGuest: boolean;
              radioID: string;
              band: string;
              signalDecibels: number;
            };
          }[];
        }[];
      }
    }
  }
}

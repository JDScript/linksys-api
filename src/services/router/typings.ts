declare namespace Linksys {
  namespace Router {
    interface DHCPClientLeases {
      leases: {
        macAddress: string;
        ipAddress: string;
        expiration: string;
        hostName: string;
        clientID: string;
      }[];
    }

    interface EthernetPortConnections {
      wanPortConnection: string;
      lanPortConnections: string[];
    }

    interface ExpressForwardingSettings {
      isExpressForwardingSupported: boolean;
      isExpressForwardingEnabled: boolean;
    }

    interface IPv6Settings {
      wanType: string;
      ipv6AutomaticSettings: {
        isIPv6AutomaticEnabled: boolean;
      };
      duid: string;
    }

    interface LANSettings {
      ipAddress: string;
      networkPrefixLength: number;
      minNetworkPrefixLength: number;
      maxNetworkPrefixLength: number;
      hostName: string;
      minAllowedDHCPLeaseMinutes: number;
      maxAllowedDHCPLeaseMinutes: number;
      maxDHCPReservationDescriptionLength: number;
      isDHCPEnabled: boolean;
      dhcpSettings: {
        leaseMinutes: number;
        firstClientIPAddress: string;
        lastClientIPAddress: string;
        reservations: any[];
      };
    }

    interface MACAddressCloneSettings {
      isMACAddressCloneEnabled: boolean;
    }

    interface RoutingSettings {
      isNATEnabled: boolean;
      isDynamicRoutingEnabled: boolean;
      entries: string[];
      maxStaticRouteEntries: number;
    }

    interface WANStatus {
      supportedWANTypes: string[];
      supportedIPv6WANTypes: string[];
      supportedWANCombinations: {
        wanType: string;
        wanIPv6Type: string;
      }[];
      isDetectingWANType: boolean;
      detectedWANType: string;
      wanStatus: string;
      wanConnection: {
        wanType: string;
        ipAddress: string;
        networkPrefixLength: number;
        gateway: string;
        mtu: number;
        dhcpLeaseMinutes: number;
        dnsServer1: string;
        dnsServer2: string;
      };
      wanIPv6Status: string;
      linkLocalIPv6Address: string;
      macAddress: string;
    }
  }
}

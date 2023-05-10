declare namespace Linksys {
  namespace Response {
    interface Base<T> {
      result: string;
      output: T;
    }

    interface BaseTransaction {}
  }

  namespace Core {
    interface AdminPasswordAuthStatus {
      attemptsRemaining: number;
    }

    interface AdminPasswordHint {
      passwordHint: string;
    }

    interface AdminPasswordRestrictions {
      minLength: number;
      maxLength: number;
      allowedCharacters: {
        lowCodePoint: number;
        highCodepoint: number;
      }[];
    }

    interface DeviceInfo {
      manufacturer: string;
      modelNumber: string;
      hardwareVersion: string;
      description: string;
      serialNumber: string;
      firmwareVersion: string;
      firmwareDate: string;
      services: string[];
    }

    interface IsAdminPasswordDefault {
      isAdminPasswordDefault: boolean;
    }
  }

  namespace DeviceList {
    interface Devices {
      revision: number;
      devices: {
        deviceID: string;
        lastChangeRevision: number;
        model: {
          deviceType: string;
          manufacturer?: string;
          modelNumber?: string;
          hardwareVersion?: string;
          description?: string;
        };
        unit: {
          serialNumber?: string;
          firmwareVersion?: string;
          firmwareDate?: string;
          operatingSystem?: string;
        };
        isAuthority: boolean;
        friendlyName?: string;
        knownMACAddresses: string[];
        connections: {
          macAddress: string;
          ipAddress: string;
        }[];
        properties: {
          name: string;
          value: string;
        }[];
        maxAllowedProperties: number;
      }[];
    }

    interface LocalDevice {
      deviceID: number;
    }
  }

  namespace Firewall {
    interface ALGSettings {
      isSIPEnabled: boolean;
    }
  }

  namespace FirmwareUpdate {
    interface FirmwareUpdateSettings {
      updatePolicy: "Manual" | "AutomaticallyCheckAndInstall";
      autoUpdateWindow: {
        startMinute: number;
        durationMinutes: number;
      };
    }

    interface FirmwareUpdateStatus {
      lastSuccessfulCheckTime: string;
    }
  }

  namespace GuestNetwork {
    interface GuestRadioSettings {
      isGuestNetworkEnabled: boolean;
      radios: {
        radioID: string;
        isEnabled: boolean;
        broadcastGuestSSID: boolean;
        guestSSID: string;
        guestPassword: string;
        canEnableRadio: boolean;
      }[];
      maxSimultaneousGuests: number;
      guestPasswordRestrictions: {
        minLength: number;
        maxLength: number;
        allowedCharacters: {
          lowCodepoint: number;
          highCodepoint: number;
        }[];
      };
      maxSimultaneousGuestsLimit: number;
    }
  }

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

  namespace RouterManagement {
    interface ManagementSettings {
      canManageUsingHTTP: boolean;
      canManageUsingHTTPS: boolean;
      isManageWirelesslySupported: boolean;
      canManageWirelessly: boolean;
      canManageRemotely: boolean;
    }

    interface RemoteManagementStatus {
      serviceState: boolean;
    }
  }

  namespace RouterUPnP {
    interface UPnPSettings {
      isUPnPEnabled: boolean;
      canUsersConfigure: boolean;
      canUsersDisableWANAccess: boolean;
    }
  }

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

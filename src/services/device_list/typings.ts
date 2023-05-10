declare namespace Linksys {
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
}

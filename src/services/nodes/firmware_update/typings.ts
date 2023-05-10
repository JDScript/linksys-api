declare namespace Linksys {
  namespace Nodes {
    namespace FirmwareUpdate {
      interface FirmwareUpdateStatus {
        firmwareUpdateStatus: {
          deviceUUID: string;
          lastSuccessfulCheckTime: string;
        }[];
      }
    }
  }
}

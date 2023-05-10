declare namespace Linksys {
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
}

declare namespace Linksys {
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
}

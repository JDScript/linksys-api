declare namespace Linksys {
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
}

/// <reference path = "typings.ts" /> 
/// <reference path = "../../typings.ts" /> 

import LinksysBaseService from "../base";

export class LinksysGuestNetworkService extends LinksysBaseService {
  public GetGuestRadioSettings() {
    return this.client.call<
      Linksys.Response.Base<Linksys.GuestNetwork.GuestRadioSettings>
    >("guestnetwork/GetGuestRadioSettings", {});
  }

  public SetGuestRadioSettings(
    params: Linksys.GuestNetwork.GuestRadioSettings
  ) {
    return this.client.call<Linksys.Response.Base<undefined>>(
      "guestnetwork/SetGuestRadioSettings",
      params
    );
  }
}
declare namespace Linksys {
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
}

package com.ionic.googleauthentication;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.plugin.CapacitorCookies;
import com.getcapacitor.plugin.CapacitorHttp;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState){
    registerPlugin(GoogleAuth.class);
    registerPlugin(CapacitorCookies.class);
    registerPlugin(CapacitorHttp.class);
    super.onCreate(savedInstanceState);

  }
}

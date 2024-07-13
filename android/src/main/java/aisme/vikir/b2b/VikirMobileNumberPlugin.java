package aisme.vikir.b2b;

import android.Manifest;
import android.content.pm.PackageManager;
import android.telephony.TelephonyManager;
import androidx.core.app.ActivityCompat;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

@CapacitorPlugin(
        name = "VikirMobileNumber",
        permissions = {
            @Permission(alias = "phone", strings = {Manifest.permission.READ_PHONE_STATE})
        }
)
public class VikirMobileNumberPlugin extends Plugin {

    @Override
    public void load() {
        super.load();
    }

    @PluginMethod
    public void getMobileNumber(PluginCall call) {
        if (ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
            requestAllPermissions(call, "phonePermissionCallback");
            return;
        }

        TelephonyManager telephonyManager = (TelephonyManager) getContext().getSystemService(getContext().TELEPHONY_SERVICE);
        String mobileNumber = telephonyManager.getLine1Number();

        JSObject ret = new JSObject();
        ret.put("mobileNumber", mobileNumber);
        call.resolve(ret);
    }

    @PermissionCallback
    private void phonePermissionCallback(PluginCall call) {
        if (getPermissionState("phone") == PermissionState.GRANTED) {
            getMobileNumber(call);
        } else {
            call.reject("Permission denied");
        }
    }
}

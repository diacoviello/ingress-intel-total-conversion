package org.exarhteam.iitc_mobile;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.util.AttributeSet;
import android.view.WindowManager;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.view.ViewGroup;
import android.util.DisplayMetrics;

@SuppressLint("SetJavaScriptEnabled")
public class IITC_WebViewPopup extends WebView {
    private WebSettings mSettings;
    private IITC_Mobile mIitc;

    private Dialog mDialog;

    // init web view
    private void iitc_init(final Context c) {
        if (isInEditMode())
            return;
        mIitc = (IITC_Mobile) c;
        mSettings = getSettings();
        mSettings.setJavaScriptEnabled(true);
        setVerticalScrollBarEnabled(false);
        setHorizontalScrollBarEnabled(false);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT)
            setWebContentsDebuggingEnabled(true);

        setWebChromeClient(new WebChromeClient() {
            @Override
            public void onCloseWindow(WebView view) {
                Log.d("close popup window");
                mDialog.dismiss();
            }
        });
        setWebViewClient(new WebViewClient() {
            // reload the view if the UserAgent needs to be changed wrt the url
            private boolean reloadWithUserAgent(final WebView view, final String url) {
                final String currentUA = view.getSettings().getUserAgentString();

                final Uri uri = Uri.parse(url);
                final String uriHost = uri.getHost();
                final String targetUA = mIitc.getUserAgentForHostname(uriHost);

                if (targetUA == null || currentUA.equals(targetUA))
                    return false;

                Log.d("change UA popup for url `" + uriHost + "` to: `" + targetUA + "`");
                view.getSettings().setUserAgentString(targetUA);
                view.loadUrl(url);
                return true;
            }

            @Override
            public boolean shouldOverrideUrlLoading(final WebView view, final String url) {
                final Uri uri = Uri.parse(url);
                if (uri.isHierarchical() && mIitc.isAllowedHostname(uri.getHost())) {
                    final String uriHost = uri.getHost();
                    final String uriPath = uri.getPath();
                    final String uriQuery = uri.getQueryParameter("q");

                    // load intel into main view
                    if (uriHost.equals("intel.ingress.com")) {
                        Log.d("popup: intel link requested, reset app and load into main view" + url);
                        mIitc.reset();
                        mIitc.setLoadingState(true);
                        mIitc.loadUrl(url);
                        mDialog.dismiss();
                        return true;
                    }

                    if ((uriHost.startsWith("google.") || uriHost.contains(".google."))
                            && uriPath.equals("/url") && uriQuery != null) {
                        Log.d("popup: redirect to: " + uriQuery);
                        return shouldOverrideUrlLoading(view, uriQuery);
                    }

                    if (mIitc.isInternalHostname(uriHost) || LoginUrlChecker.isLoginUrl(uri)) {
                        Log.d("Opening popup: " + uri);
                        openDialogPopup();
                        return reloadWithUserAgent(view, url);
                    }
                }

                Log.d("popup: no login link, nor internal host, start external app to load url: " + url);

                final Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                // make new activity independent from iitcm
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                mIitc.startActivity(intent);

                return true;
            }
        });

        mDialog = new Dialog(mIitc);
        mDialog.setContentView(this);
        final WebView view = this;
        mDialog.setOnCancelListener(new DialogInterface.OnCancelListener() {
            @Override
            public void onCancel(DialogInterface dialog) {
                view.destroy();
            }
        });
        mDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
            @Override
            public void onDismiss(DialogInterface dialog) {
                view.destroy();
            }
        });
    }

    private void openDialogPopup() {
        if (mDialog.isShowing()) return;

        // Set the dialog content view to match parent's height and width
//        ViewGroup.LayoutParams params = new ViewGroup.LayoutParams(
//            ViewGroup.LayoutParams.MATCH_PARENT,
//            ViewGroup.LayoutParams.MATCH_PARENT
//        );
//        mDialog.getWindow().setContentView(this, params);
//
//        // Set horizontal and vertical margins
        WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams();
        layoutParams.copyFrom(mDialog.getWindow().getAttributes());
//
//        // Set width and height to match_parent
        layoutParams.width = WindowManager.LayoutParams.MATCH_PARENT;
        layoutParams.height = WindowManager.LayoutParams.MATCH_PARENT;
//
//        // Calculate the margin size
//        DisplayMetrics displayMetrics = new DisplayMetrics();
//        ((WindowManager) mIitc.getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay().getMetrics(displayMetrics);
//        float widthMargin = displayMetrics.widthPixels * 5f;
//        float heightMargin = displayMetrics.heightPixels * 0.01f;
//
//        // Convert pixels to dp to use as margin
//        float density = displayMetrics.density;
//        int marginWidthDp = (int) (widthMargin / density);
//        int marginHeightDp = (int) (heightMargin / density);
//
//        layoutParams.horizontalMargin = -0.3f;
//        layoutParams.verticalMargin = 0.3f;
//
        mDialog.getWindow().setAttributes(layoutParams);
//        mDialog.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE | WindowManager.LayoutParams.FLAG_ALT_FOCUSABLE_IM);

        mDialog.show();
    }

    // constructors -------------------------------------------------
    public IITC_WebViewPopup(final Context context) {
        super(context);

        iitc_init(context);
    }

    public IITC_WebViewPopup(final Context context, final AttributeSet attrs) {
        super(context, attrs);

        iitc_init(context);
    }

    public IITC_WebViewPopup(final Context context, final AttributeSet attrs, final int defStyle) {
        super(context, attrs, defStyle);

        iitc_init(context);
    }
}

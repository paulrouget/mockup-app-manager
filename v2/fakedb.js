let fakedb = { client: {
  meta: {
    deviceName: "Unagi",
    deviceWidth: 320,
    deviceHeight: 480,
    deviceDPI: 192,
    IMEINumber: "XXX-XXX-XXX-XXX",
    phoneNumber: "555-555-555",
    OSNameAndVersion: "Firefox OS 1.2",
    platformVersion: "Gecko 26",
  },
  battery: {
    level: 83,
    status: "charging",
  },
  connection: {
    status: "disconnected",
    ip: "192.168.1.42",
    port: 6000
  },
  apps: {
    running: {
      count: 13,
    },
    permissions: {
      count: 14
    },
    activities: {
      count: 15
    },
  },
}}

let webapps = {
    "all": [
        {
            "name": "Settings",
            "csp": "",
            "installOrigin": "app://settings.gaiamobile.org",
            "origin": "app://settings.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://settings.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "settings.gaiamobile.org",
            "localId": 1001,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "configure": {
                        "disposition": "window",
                        "filters": {
                            "target": "device"
                        }
                    }
                },
                "name": "Settings",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/Settings.png",
                    "120": "/style/icons/Settings.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia Settings",
                "messages": [
                    "bluetooth-pairing-request",
                    "bluetooth-authorize",
                    "bluetooth-cancel",
                    "bluetooth-pairedstatuschanged",
                    "bluetooth-hfp-status-changed"
                ],
                "launch_path": "/index.html#root",
                "permissions": {
                    "device-storage:pictures": {
                        "access": "readonly"
                    },
                    "attention": {},
                    "desktop-notification": {},
                    "power": {},
                    "wifi-manage": {},
                    "device-storage:apps": {
                        "access": "readonly"
                    },
                    "device-storage:videos": {
                        "access": "readonly"
                    },
                    "voicemail": {},
                    "settings": {
                        "access": "readwrite"
                    },
                    "storage": {},
                    "device-storage:sdcard": {
                        "access": "readonly"
                    },
                    "bluetooth": {},
                    "telephony": {},
                    "device-storage:music": {
                        "access": "readonly"
                    },
                    "idle": {},
                    "audio-channel-notification": {},
                    "time": {},
                    "mobileconnection": {},
                    "webapps-manage": {},
                    "permissions": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Gallery",
            "csp": "",
            "installOrigin": "app://gallery.gaiamobile.org",
            "origin": "app://gallery.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://gallery.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "gallery.gaiamobile.org",
            "localId": 1002,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "fullscreen": true,
                "name": "Gallery",
                "default_locale": "en-US",
                "activities": {
                    "browse": {
                        "disposition": "window",
                        "filters": {
                            "type": "photos"
                        }
                    },
                    "open": {
                        "href": "/open.html",
                        "returnValue": true,
                        "disposition": "inline",
                        "filters": {
                            "type": [
                                "image/jpeg",
                                "image/png",
                                "image/gif",
                                "image/bmp"
                            ]
                        }
                    },
                    "pick": {
                        "href": "/index.html#pick",
                        "returnValue": true,
                        "disposition": "inline",
                        "filters": {
                            "type": [
                                "image/*",
                                "image/jpeg",
                                "image/png"
                            ]
                        }
                    }
                },
                "description": "Gaia Gallery",
                "icons": {
                    "60": "/style/icons/60/Gallery.png",
                    "120": "/style/icons/Gallery.png"
                },
                "launch_path": "/index.html",
                "permissions": {
                    "audio-channel-content": {},
                    "device-storage:pictures": {
                        "access": "readwrite"
                    },
                    "settings": {
                        "access": "readonly"
                    },
                    "device-storage:videos": {
                        "access": "readwrite"
                    },
                    "storage": {},
                    "deprecated-hwvideo": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Video",
            "csp": "",
            "installOrigin": "app://video.gaiamobile.org",
            "origin": "app://video.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://video.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "video.gaiamobile.org",
            "localId": 1003,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "fullscreen": true,
                "name": "Video",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/Video.png",
                    "120": "/style/icons/Video.png"
                },
                "description": "Gaia Video",
                "activities": {
                    "view": {
                        "returnValue": true,
                        "href": "view.html",
                        "disposition": "inline",
                        "filters": {
                            "type": [
                                "video/webm",
                                "video/mp4",
                                "video/3gpp",
                                "video/youtube",
                                "video/ogg"
                            ]
                        }
                    },
                    "open": {
                        "returnValue": true,
                        "href": "view.html",
                        "disposition": "inline",
                        "filters": {
                            "type": [
                                "video/webm",
                                "video/mp4",
                                "video/3gpp",
                                "video/youtube",
                                "video/ogg"
                            ]
                        }
                    },
                    "pick": {
                        "href": "/index.html#pick",
                        "returnValue": true,
                        "disposition": "inline",
                        "filters": {
                            "type": [
                                "video/*",
                                "video/webm",
                                "video/mp4",
                                "video/3gpp",
                                "video/ogg"
                            ]
                        }
                    }
                },
                "launch_path": "/index.html",
                "permissions": {
                    "audio-channel-content": {},
                    "device-storage:pictures": {
                        "access": "readwrite"
                    },
                    "settings": {
                        "access": "readonly"
                    },
                    "device-storage:videos": {
                        "access": "readwrite"
                    },
                    "storage": {},
                    "deprecated-hwvideo": {},
                    "systemXHR": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Send To Bluetooth Device",
            "csp": "",
            "installOrigin": "app://bluetooth.gaiamobile.org",
            "origin": "app://bluetooth.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://bluetooth.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "bluetooth.gaiamobile.org",
            "localId": 1004,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "share": {
                        "href": "/transfer.html",
                        "returnValue": true,
                        "disposition": "inline"
                    }
                },
                "name": "Send To Bluetooth Device",
                "icons": {
                    "30": "/style/icons/icon30.png",
                    "60": "/style/icons/icon60.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia Bluetooth Transfer",
                "launch_path": "/transfer.html",
                "permissions": {
                    "device-storage:sdcard": {
                        "access": "readonly"
                    },
                    "settings": {
                        "access": "readwrite"
                    },
                    "bluetooth": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Wallpaper",
            "csp": "",
            "installOrigin": "app://wallpaper.gaiamobile.org",
            "origin": "app://wallpaper.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://wallpaper.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "wallpaper.gaiamobile.org",
            "localId": 1005,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "share": {
                        "href": "/share.html",
                        "returnValue": true,
                        "disposition": "inline",
                        "filters": {
                            "type": "image/*",
                            "number": 1
                        }
                    },
                    "pick": {
                        "href": "/pick.html",
                        "returnValue": true,
                        "disposition": "inline",
                        "filters": {
                            "width": 320,
                            "type": [
                                "image/*",
                                "image/jpeg"
                            ],
                            "height": 480
                        }
                    }
                },
                "orientation": "portrait-primary",
                "default_locale": "en-US",
                "icons": {
                    "64": "/style/icons/64/Wallpaper.png"
                },
                "description": "Gaia Wallpaper Picker",
                "name": "Wallpaper",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                },
                "type": "certified",
                "permissions": {
                    "settings": {
                        "access": "readwrite"
                    }
                }
            }
        },
        {
            "name": "Communications",
            "csp": "",
            "installOrigin": "app://communications.gaiamobile.org",
            "origin": "app://communications.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://communications.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "communications.gaiamobile.org",
            "localId": 1006,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": [
                {
                    "from": "https://www.facebook.com/connect/login_success.html",
                    "to": "/redirects/redirect.html"
                },
                {
                    "from": "http://intense-tundra-4122.herokuapp.com/fbowd/oauth2_new/dialogs_end.html",
                    "to": "/redirects/dialogs_end.html"
                },
                {
                    "from": "http://intense-tundra-4122.herokuapp.com/fbowd/oauth2_new/logout.json",
                    "to": "/redirects/logout.json"
                },
                {
                    "from": "https://www.mozilla.org/",
                    "to": "/redirects/redirect.html"
                },
                {
                    "from": "https://serene-cove-3587.herokuapp.com/liveowd/oauth2_new/flow_live.html",
                    "to": "/redirects/redirect.html"
                }
            ],
            "manifest": {
                "activities": {
                    "new": {
                        "returnValue": true,
                        "href": "/contacts/index.html?new",
                        "disposition": "inline",
                        "filters": {
                            "type": "webcontacts/contact"
                        }
                    },
                    "dial": {
                        "href": "/dialer/index.html#keyboard-view",
                        "disposition": "window",
                        "filters": {
                            "type": "webtelephony/number",
                            "number": {
                                "regexp": "/^[\\d\\s+#*().-]{0,50}$/"
                            }
                        }
                    },
                    "open": {
                        "returnValue": true,
                        "href": "/contacts/index.html?open",
                        "disposition": "inline",
                        "filters": {
                            "type": "webcontacts/contact"
                        }
                    },
                    "update": {
                        "returnValue": true,
                        "href": "/contacts/index.html?update",
                        "disposition": "inline",
                        "filters": {
                            "type": "webcontacts/contact"
                        }
                    },
                    "pick": {
                        "returnValue": true,
                        "href": "/contacts/index.html?pick",
                        "disposition": "inline",
                        "filters": {
                            "type": {
                                "required": true,
                                "value": [
                                    "webcontacts/contact",
                                    "webcontacts/email"
                                ]
                            }
                        }
                    }
                },
                "entry_points": {
                    "dialer": {
                        "launch_path": "/dialer/index.html#keyboard-view",
                        "name": "Phone",
                        "icons": {
                            "60": "/dialer/style/icons/60/Dialer.png",
                            "120": "/dialer/style/icons/Dialer.png"
                        }
                    },
                    "ftu": {
                        "fullscreen": "true",
                        "launch_path": "/ftu/index.html",
                        "name": "FTU"
                    },
                    "contacts": {
                        "launch_path": "/contacts/index.html",
                        "name": "Contacts",
                        "icons": {
                            "60": "/contacts/style/icons/60/Contacts.png",
                            "120": "/contacts/style/icons/Contacts.png"
                        }
                    }
                },
                "name": "Communications",
                "orientation": "portrait-primary",
                "description": "Gaia Communications",
                "messages": [
                    {
                        "alarm": "/facebook/fb_sync.html"
                    },
                    {
                        "bluetooth-dialer-command": "/dialer/index.html#keyboard-view"
                    },
                    {
                        "headset-button": "/dialer/index.html#keyboard-view"
                    },
                    {
                        "notification": "/dialer/index.html#keyboard-view"
                    },
                    {
                        "telephony-new-call": "/dialer/index.html#keyboard-view"
                    },
                    {
                        "ussd-received": "/dialer/index.html#keyboard-view"
                    }
                ],
                "redirects": [
                    {
                        "from": "https://www.facebook.com/connect/login_success.html",
                        "to": "/redirects/redirect.html"
                    },
                    {
                        "from": "http://intense-tundra-4122.herokuapp.com/fbowd/oauth2_new/dialogs_end.html",
                        "to": "/redirects/dialogs_end.html"
                    },
                    {
                        "from": "http://intense-tundra-4122.herokuapp.com/fbowd/oauth2_new/logout.json",
                        "to": "/redirects/logout.json"
                    },
                    {
                        "from": "https://www.mozilla.org/",
                        "to": "/redirects/redirect.html"
                    },
                    {
                        "from": "https://serene-cove-3587.herokuapp.com/liveowd/oauth2_new/flow_live.html",
                        "to": "/redirects/redirect.html"
                    }
                ],
                "launch_path": "/",
                "permissions": {
                    "device-storage:sdcard": {
                        "access": "readonly"
                    },
                    "desktop-notification": {},
                    "wifi-manage": {},
                    "settings": {
                        "access": "readwrite"
                    },
                    "voicemail": {},
                    "attention": {},
                    "storage": {},
                    "contacts": {
                        "access": "readwrite"
                    },
                    "audio-channel-telephony": {},
                    "telephony": {},
                    "systemXHR": {},
                    "audio-channel-ringer": {},
                    "time": {},
                    "alarms": {},
                    "mobileconnection": {},
                    "idle": {},
                    "browser": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Messages",
            "csp": "",
            "installOrigin": "app://sms.gaiamobile.org",
            "origin": "app://sms.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://sms.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "sms.gaiamobile.org",
            "localId": 1007,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "new": {
                        "disposition": "window",
                        "filters": {
                            "type": "websms/sms",
                            "number": {
                                "pattern": "[\\w\\s+#*().-]{0,50}",
                                "regexp": "/^[\\w\\s+#*().-]{0,50}$/"
                            }
                        }
                    },
                    "share": {
                        "returnValue": true,
                        "disposition": "window",
                        "filters": {
                            "type": [
                                "image/*",
                                "audio/*",
                                "video/*"
                            ],
                            "number": 1
                        }
                    }
                },
                "name": "Messages",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/Sms.png",
                    "120": "/style/icons/Sms.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia Messages",
                "messages": [
                    {
                        "sms-received": "/index.html"
                    },
                    {
                        "notification": "/index.html"
                    }
                ],
                "launch_path": "/index.html",
                "permissions": {
                    "desktop-notification": {},
                    "settings": {
                        "access": "readonly"
                    },
                    "sms": {},
                    "contacts": {
                        "access": "readonly"
                    },
                    "storage": {},
                    "audio-channel-notification": {},
                    "mobileconnection": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "E-Mail",
            "csp": "",
            "installOrigin": "app://email.gaiamobile.org",
            "origin": "app://email.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://email.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "email.gaiamobile.org",
            "localId": 1008,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "new": {
                        "disposition": "window",
                        "filters": {
                            "type": "mail"
                        }
                    },
                    "share": {
                        "returnValue": true,
                        "disposition": "window",
                        "filters": {
                            "type": "image/*"
                        }
                    },
                    "view": {
                        "filters": {
                            "url": {
                                "regexp": "/^mailto:/",
                                "required": true
                            },
                            "type": "url"
                        }
                    }
                },
                "name": "E-Mail",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/Email.png",
                    "79": "/style/icons/Email.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia E-Mail",
                "messages": [
                    {
                        "alarm": "/index.html"
                    }
                ],
                "launch_path": "/index.html",
                "permissions": {
                    "device-storage:sdcard": {
                        "access": "readcreate"
                    },
                    "desktop-notification": {},
                    "contacts": {
                        "access": "readcreate"
                    },
                    "settings": {
                        "access": "readonly"
                    },
                    "storage": {},
                    "systemXHR": {},
                    "audio-channel-notification": {},
                    "alarms": {},
                    "tcp-socket": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "FM Radio",
            "csp": "",
            "installOrigin": "app://fm.gaiamobile.org",
            "origin": "app://fm.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://fm.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "fm.gaiamobile.org",
            "localId": 1009,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "name": "FM Radio",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/Fm.png",
                    "128": "/style/icons/Fm.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia FM Radio",
                "launch_path": "/index.html",
                "permissions": {
                    "fmradio": {},
                    "storage": {},
                    "settings": {
                        "access": "readonly"
                    }
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "PDF Viewer",
            "csp": "",
            "installOrigin": "app://pdfjs.gaiamobile.org",
            "origin": "app://pdfjs.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://pdfjs.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "pdfjs.gaiamobile.org",
            "localId": 1010,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "view": {
                        "returnValue": true,
                        "href": "/content/web/viewer.html",
                        "disposition": "inline",
                        "filters": {
                            "type": "application/pdf"
                        }
                    }
                },
                "name": "PDF Viewer",
                "default_locale": "en-US",
                "icons": {
                    "48": "/icon.png",
                    "64": "/icon64.png"
                },
                "orientation": "portrait-primary",
                "description": "Portable Document Format(PDF) Viewer",
                "permissions": {
                    "systemXHR": {},
                    "settings": {
                        "access": "readonly"
                    }
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla/pdf.js",
                    "name": "The pdf.js Team"
                }
            }
        },
        {
            "name": "Camera",
            "csp": "",
            "installOrigin": "app://camera.gaiamobile.org",
            "origin": "app://camera.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://camera.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "camera.gaiamobile.org",
            "localId": 1011,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "fullscreen": true,
                "orientation": "portrait-primary",
                "default_locale": "en-US",
                "activities": {
                    "record": {
                        "disposition": "window",
                        "filters": {
                            "type": [
                                "photos",
                                "videos"
                            ]
                        }
                    },
                    "pick": {
                        "disposition": "inline",
                        "href": "/index.html#pick",
                        "returnValue": true,
                        "filters": {
                            "type": [
                                "image/*",
                                "image/jpeg",
                                "video/*",
                                "video/3gpp"
                            ]
                        }
                    }
                },
                "description": "Gaia Camera",
                "icons": {
                    "60": "/style/icons/60/Camera.png",
                    "120": "/style/icons/Camera.png"
                },
                "launch_path": "/index.html",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                },
                "type": "certified",
                "permissions": {
                    "geolocation": {},
                    "device-storage:pictures": {
                        "access": "readwrite"
                    },
                    "settings": {
                        "access": "readonly"
                    },
                    "device-storage:videos": {
                        "access": "readwrite"
                    },
                    "storage": {},
                    "camera": {},
                    "audio-channel-notification": {}
                },
                "name": "Camera"
            }
        },
        {
            "name": "Calendar",
            "csp": "",
            "installOrigin": "app://calendar.gaiamobile.org",
            "origin": "app://calendar.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://calendar.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "calendar.gaiamobile.org",
            "localId": 1012,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "name": "Calendar",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/Calendar.png",
                    "120": "/style/icons/Calendar.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia Calendar",
                "messages": [
                    {
                        "alarm": "/index.html"
                    },
                    {
                        "notification": "/index.html"
                    }
                ],
                "launch_path": "/index.html",
                "permissions": {
                    "desktop-notification": {},
                    "settings": {
                        "access": "readonly"
                    },
                    "storage": {},
                    "systemXHR": {},
                    "alarms": {},
                    "browser": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Music",
            "csp": "",
            "installOrigin": "app://music.gaiamobile.org",
            "origin": "app://music.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://music.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "music.gaiamobile.org",
            "localId": 1013,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "open": {
                        "href": "/open.html",
                        "returnValue": true,
                        "disposition": "inline",
                        "filters": {
                            "type": [
                                "audio/mpeg",
                                "audio/ogg",
                                "audio/mp4",
                                "audio/amr"
                            ]
                        }
                    },
                    "pick": {
                        "href": "/index.html#pick",
                        "returnValue": true,
                        "disposition": "inline",
                        "filters": {
                            "type": [
                                "audio/*",
                                "audio/mpeg",
                                "audio/ogg",
                                "audio/mp4"
                            ]
                        }
                    }
                },
                "name": "Music",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/Music.png",
                    "120": "/style/icons/Music.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia Music",
                "launch_path": "/index.html#mix",
                "permissions": {
                    "audio-channel-content": {},
                    "device-storage:music": {
                        "access": "readwrite"
                    },
                    "deprecated-hwvideo": {},
                    "storage": {},
                    "settings": {
                        "access": "readonly"
                    }
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Keyboard",
            "csp": "",
            "installOrigin": "app://keyboard.gaiamobile.org",
            "origin": "app://keyboard.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://keyboard.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "keyboard.gaiamobile.org",
            "localId": 1014,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "name": "Keyboard",
                "default_locale": "en-US",
                "description": "Gaia Keyboard",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                },
                "type": "certified",
                "permissions": {
                    "keyboard": {},
                    "settings": {
                        "access": "readwrite"
                    }
                }
            }
        },
        {
            "name": "Clock",
            "csp": "",
            "installOrigin": "app://clock.gaiamobile.org",
            "origin": "app://clock.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://clock.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "clock.gaiamobile.org",
            "localId": 1015,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "name": "Clock",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/Clock.png",
                    "120": "/style/icons/Clock.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia Clock",
                "messages": [
                    {
                        "alarm": "/index.html"
                    }
                ],
                "launch_path": "/index.html",
                "permissions": {
                    "alarms": {},
                    "attention": {},
                    "storage": {},
                    "audio-channel-alarm": {},
                    "settings": {
                        "access": "readwrite"
                    }
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "System",
            "csp": "",
            "installOrigin": "app://system.gaiamobile.org",
            "origin": "app://system.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://system.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "system.gaiamobile.org",
            "localId": 1016,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "name": "System",
                "default_locale": "en-US",
                "icons": {
                    "30": "/style/icons/System.png"
                },
                "description": "Main System",
                "messages": [
                    {
                        "alarm": "/index.html"
                    },
                    {
                        "bluetooth-opp-transfer-complete": "/index.html"
                    },
                    {
                        "bluetooth-opp-update-progress": "/index.html"
                    },
                    {
                        "bluetooth-opp-receiving-file-confirmation": "/index.html"
                    },
                    {
                        "bluetooth-opp-transfer-start": "/index.html"
                    },
                    {
                        "icc-stkcommand": "/index.html"
                    },
                    {
                        "bluetooth-hfp-status-changed": "/index.html"
                    }
                ],
                "launch_path": "/index.html",
                "permissions": {
                    "geolocation": {},
                    "device-storage:sdcard": {
                        "access": "readonly"
                    },
                    "device-storage:apps": {
                        "access": "readonly"
                    },
                    "bluetooth": {},
                    "telephony": {},
                    "audio-channel-notification": {},
                    "keyboard": {},
                    "webapps-manage": {},
                    "audio-channel-content": {},
                    "device-storage:pictures": {
                        "access": "readwrite"
                    },
                    "wifi-manage": {},
                    "storage": {},
                    "device-storage:music": {
                        "access": "readcreate"
                    },
                    "camera": {},
                    "network-events": {},
                    "desktop-notification": {},
                    "power": {},
                    "cellbroadcast": {},
                    "embed-apps": {},
                    "mobileconnection": {},
                    "permissions": {},
                    "background-sensors": {},
                    "settings": {
                        "access": "readwrite"
                    },
                    "device-storage:videos": {
                        "access": "readwrite"
                    },
                    "voicemail": {},
                    "idle": {},
                    "fmradio": {},
                    "alarms": {},
                    "browser": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Homescreen",
            "csp": "",
            "installOrigin": "app://homescreen.gaiamobile.org",
            "origin": "app://homescreen.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://homescreen.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "homescreen.gaiamobile.org",
            "localId": 1017,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "save-bookmark": {
                        "returnValue": true,
                        "href": "/save-bookmark.html",
                        "disposition": "inline",
                        "filters": {
                            "url": {
                                "regexp": "/^https?:/",
                                "required": true
                            },
                            "type": "url"
                        }
                    }
                },
                "name": "Homescreen",
                "default_locale": "en-US",
                "icons": {
                    "30": "/style/icons/HomeScreen.png"
                },
                "orientation": "portrait-primary",
                "description": "Gaia Homescreen",
                "messages": [
                    {
                        "alarm": "/index.html"
                    }
                ],
                "launch_path": "/index.html#root",
                "permissions": {
                    "geolocation": {},
                    "device-storage:pictures": {
                        "access": "readonly"
                    },
                    "power": {},
                    "open-remote-window": {},
                    "settings": {
                        "access": "readwrite"
                    },
                    "storage": {},
                    "systemXHR": {},
                    "alarms": {},
                    "webapps-manage": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/andreasgal/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Browser",
            "csp": "",
            "installOrigin": "app://browser.gaiamobile.org",
            "origin": "app://browser.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://browser.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "browser.gaiamobile.org",
            "localId": 1018,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "view": {
                        "filters": {
                            "url": {
                                "regexp": "/^https?:.{1,16384}$/i",
                                "required": true
                            },
                            "type": "url"
                        }
                    }
                },
                "name": "Browser",
                "default_locale": "en-US",
                "icons": {
                    "60": "/shared/resources/branding/Browser.png",
                    "120": "/shared/resources/branding/Browser.png"
                },
                "description": "Gaia Web Browser",
                "launch_path": "/index.html",
                "permissions": {
                    "geolocation": {},
                    "device-storage:pictures": {
                        "access": "readwrite"
                    },
                    "desktop-notification": {},
                    "settings": {
                        "access": "readonly"
                    },
                    "device-storage:videos": {
                        "access": "readwrite"
                    },
                    "storage": {},
                    "device-storage:music": {
                        "access": "readwrite"
                    },
                    "systemXHR": {},
                    "browser": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Usage",
            "csp": "",
            "installOrigin": "app://costcontrol.gaiamobile.org",
            "origin": "app://costcontrol.gaiamobile.org",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "app://costcontrol.gaiamobile.org/manifest.webapp",
            "appStatus": 3,
            "removable": false,
            "id": "costcontrol.gaiamobile.org",
            "localId": 1019,
            "basePath": "/system/b2g/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadSize": 0,
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "costcontrol/balance": {
                        "disposition": "window",
                        "filters": {}
                    },
                    "costcontrol/telephony": {
                        "disposition": "window",
                        "filters": {}
                    },
                    "costcontrol/data_usage": {
                        "disposition": "window",
                        "filters": {}
                    }
                },
                "name": "Usage",
                "default_locale": "en-US",
                "icons": {
                    "60": "/style/icons/60/cost-control.png",
                    "120": "/style/icons/cost-control.png"
                },
                "orientation": "portrait-primary",
                "description": "Usage application to see credit and data usage statistics",
                "messages": [
                    {
                        "sms-received": "/message_handler.html"
                    },
                    {
                        "alarm": "/message_handler.html"
                    },
                    {
                        "sms-sent": "/message_handler.html"
                    },
                    {
                        "telephony-call-ended": "/message_handler.html"
                    },
                    {
                        "notification": "/index.html"
                    }
                ],
                "launch_path": "/index.html",
                "permissions": {
                    "desktop-notification": {},
                    "settings": {
                        "access": "readonly"
                    },
                    "storage": {},
                    "sms": {},
                    "telephony": {},
                    "alarms": {},
                    "mobileconnection": {},
                    "networkstats-manage": {}
                },
                "type": "certified",
                "developer": {
                    "url": "https://github.com/mozilla-b2g/gaia",
                    "name": "The Gaia Team"
                }
            }
        },
        {
            "name": "Marketplace",
            "csp": "",
            "installOrigin": "https://marketplace.firefox.com",
            "origin": "app://marketplace.firefox.com",
            "receipts": null,
            "installTime": 132333986000,
            "manifestURL": "https://marketplace.firefox.com/packaged.webapp",
            "appStatus": 2,
            "removable": false,
            "id": "marketplace.firefox.com",
            "localId": 1020,
            "basePath": "/data/local/webapps",
            "progress": 0,
            "installState": "installed",
            "downloadAvailable": true,
            "downloadSize": 28277,
            "etag": "\"70537dff52fce247a6f4aefee94a4d872eb3b25e86ef044f57d550738f001bf1\"",
            "packageEtag": "\"f32ee6362005eb39bd26ae99eac10f73d9179fad2a33a0b37f630a71047cda04\"",
            "staged": {
                "manifestHash": "6b57758b29bad4bfb0e7f98e3215db14",
                "etag": "\"43a06b444005149d15e68d59cf47b1acf7d0578eb80295c515059c33089ef101\""
            },
            "installerAppId": 0,
            "installerIsBrowser": false,
            "storeId": "#unknownID#https://marketplace.firefox.com",
            "storeVersion": 0,
            "redirects": null,
            "manifest": {
                "activities": {
                    "marketplace-search": {
                        "href": "/index.html"
                    },
                    "marketplace-category": {
                        "href": "/index.html"
                    },
                    "marketplace-app": {
                        "href": "/index.html"
                    },
                    "marketplace-app-rating": {
                        "href": "/index.html"
                    }
                },
                "default_locale": "en-US",
                "description": "Firefox Marketplace",
                "developer": {
                    "name": "Mozilla",
                    "url": "http://mozilla.org"
                },
                "icons": {
                    "60": "/60.png",
                    "128": "/128.png"
                },
                "launch_path": "/index.html",
                "name": "Marketplace",
                "orientation": [
                    "portrait-primary"
                ],
                "permissions": {
                    "mobilenetwork": {
                        "description": "To detect mobile carrier and regional information."
                    }
                },
                "type": "privileged",
                "version": "20130613140040"
            }
        }
    ]
};

const UNKNOWN_ACTION = "UNKNOWN_ACTION";
const ALLOW_ACTION = "ALLOW_ACTION";
const DENY_ACTION = "DENY_ACTION";
const PROMPT_ACTION = "PROMPT_ACTION";

let permissions =        { geolocation: {
                             app: PROMPT_ACTION,
                             privileged: PROMPT_ACTION,
                             certified: PROMPT_ACTION
                           },
                           camera: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           alarms: {
                             app: ALLOW_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "tcp-socket": {
                             app: DENY_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "network-events": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           contacts: {
                             app: DENY_ACTION,
                             privileged: PROMPT_ACTION,
                             certified: ALLOW_ACTION,
                             access: ["read", "write", "create"]
                           },
                           "device-storage:apps": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION,
                             access: ["read"]
                           },
                           "device-storage:pictures": {
                             app: DENY_ACTION,
                             privileged: PROMPT_ACTION,
                             certified: ALLOW_ACTION,
                             access: ["read", "write", "create"]
                           },
                           "device-storage:videos": {
                             app: DENY_ACTION,
                             privileged: PROMPT_ACTION,
                             certified: ALLOW_ACTION,
                             access: ["read", "write", "create"]
                           },
                           "device-storage:music": {
                             app: DENY_ACTION,
                             privileged: PROMPT_ACTION,
                             certified: ALLOW_ACTION,
                             access: ["read", "write", "create"]
                           },
                           "device-storage:sdcard": {
                             app: DENY_ACTION,
                             privileged: PROMPT_ACTION,
                             certified: ALLOW_ACTION,
                             access: ["read", "write", "create"]
                           },
                           sms: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           telephony: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           browser: {
                             app: DENY_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           bluetooth: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           mobileconnection: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           mobilenetwork: {
                             app: DENY_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           power: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           push: {
                            app: ALLOW_ACTION,
                            privileged: ALLOW_ACTION,
                            certified: ALLOW_ACTION
                           },
                           settings: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION,
                             access: ["read", "write"],
                             additional: ["indexedDB-chrome-settings"]
                           },
                           permissions: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           fmradio: {
                             app: DENY_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           attention: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "webapps-manage": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "backgroundservice": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "desktop-notification": {
                             app: ALLOW_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "networkstats-manage": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "wifi-manage": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "systemXHR": {
                             app: DENY_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "voicemail": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "deprecated-hwvideo": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "idle": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "time": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "embed-apps": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "storage": {
                             app: ALLOW_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION,
                             substitute: [
                               "indexedDB-unlimited",
                               "offline-app",
                               "pin-app"
                             ]
                           },
                           "background-sensors": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           cellbroadcast: {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "audio-channel-normal": {
                             app: ALLOW_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "audio-channel-content": {
                             app: ALLOW_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "audio-channel-notification": {
                             app: DENY_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "audio-channel-alarm": {
                             app: DENY_ACTION,
                             privileged: ALLOW_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "audio-channel-telephony": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "audio-channel-ringer": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "audio-channel-publicnotification": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "open-remote-window": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                           "keyboard": {
                             app: DENY_ACTION,
                             privileged: DENY_ACTION,
                             certified: ALLOW_ACTION
                           },
                         };

let permissionsArray = [];
for (let name in permissions) {
  permissionsArray.push({
    name: name,
    app: permissions[name].app,
    privileged: permissions[name].privileged,
    certified: permissions[name].certified,
  });
}
fakedb.client.permissions = permissionsArray;
fakedb.client.apps.all = webapps.all;

let l10n = {
  _properties: {
    "connectedToDevice":"Connected to %1$",
    "appsSummary":"%1$ applications installed. %2$ applications running. %3$ permissions and %4$ activities listed.",
    "connectTo":"Connect to %1$:%2$",
    "deviceSize":"Device size: %1$x%2$ (%3$ DPI)",
    "batteryStatus":"Battery: %1$%",
    "IMEINumber":"IMEI: %1$",
    "phoneNumber":"Phone number: %1$",
  },
  get: function(prop, params = []) {
    let str = this._properties[prop];
    if (!str) {
      throw new Error("Can't find string " + prop);
    }
    if (params.length > 0)
      str = str.replace("%1$", params[0]);
    if (params.length > 1)
      str = str.replace("%2$", params[1]);
    if (params.length > 2)
      str = str.replace("%3$", params[2]);
    if (params.length > 3)
      str = str.replace("%4$", params[3]);
    if (params.length > 4)
      str = str.replace("%1$", params[0]);
    return str;
  },
}

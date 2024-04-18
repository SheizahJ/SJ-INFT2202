﻿var dotnetInstance;

window.BlazorInterop = {
    postMessage: function (message) {

        console.log("interop posting message: ", message);
        window.postMessage(message, "*");
    },

    log: function (message) {
        console.log(message);
    },

    install: function (obj) {
        console.log("dotnet installed");
        dotnetInstance = obj;
    }
};


window.addEventListener("message", e => {

        dotnetInstance.invokeMethodAsync("MLS.Blazor.PostMessageAsync", e.data)
            .then(r => {
                if (r !== null) {
                    window.postMessage(r, "*");
                }
            });

    
});
// SIG // Begin signature block
// SIG // MIIjgQYJKoZIhvcNAQcCoIIjcjCCI24CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // LGVIw7gAqug2ZEGSmZszjEQxxTI7/WzPNg/+ZQ6A6oOg
// SIG // gg2BMIIF/zCCA+egAwIBAgITMwAAAVGejY9AcaMOQQAA
// SIG // AAABUTANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTE5MDUwMjIxMzc0NloX
// SIG // DTIwMDUwMjIxMzc0NlowdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // lVrGhmlHHTQe8VXDZnX2YlQYWBRnJ/CjKsYDSLzmVjR/
// SIG // SWEC7oR4ZieUViEstaHst807sai25BwHZm3lPDRTKOPT
// SIG // 7+9TICEvSBvxLasDh+7qWp/pSKujTnMOXzujrPtdkdEN
// SIG // vDMxp/t8uxdpig56KVbtLBLn8uOd4Mc9ejPGwMOPkF7r
// SIG // +/n0fVs0SdgqVOtsECmIhUDH3sOlYeX7j6F5aDd5OvkJ
// SIG // c+84HE+GEZsc8e4zFaT/7ryurGXAcUN1oAf1pMlx4MWm
// SIG // NfSAMy6tkIj4l9mK8okeRLGAat+QT+1NeQ5WbaUrNsCG
// SIG // E5JAwcYTySAyYKMGbuRsoR3aq7Ldzo5EkQIDAQABo4IB
// SIG // fjCCAXowHwYDVR0lBBgwFgYKKwYBBAGCN0wIAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFFeCGq5Kue3rGoLuhVAW9u9G
// SIG // Yo3PMFAGA1UdEQRJMEekRTBDMSkwJwYDVQQLEyBNaWNy
// SIG // b3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEWMBQG
// SIG // A1UEBRMNMjMwMDEyKzQ1NDEzNTAfBgNVHSMEGDAWgBRI
// SIG // bmTlUAXTgqoXNzcitW2oynUClTBUBgNVHR8ETTBLMEmg
// SIG // R6BFhkNodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // b3BzL2NybC9NaWNDb2RTaWdQQ0EyMDExXzIwMTEtMDct
// SIG // MDguY3JsMGEGCCsGAQUFBwEBBFUwUzBRBggrBgEFBQcw
// SIG // AoZFaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9w
// SIG // cy9jZXJ0cy9NaWNDb2RTaWdQQ0EyMDExXzIwMTEtMDct
// SIG // MDguY3J0MAwGA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQEL
// SIG // BQADggIBAFoPgK0uAJ6uyq6ILJSEJ6DB0l1D6/0ajiIS
// SIG // V/t9jm7mNzBb3ZURJW0rEica0cvzggmXUrHvn9gKkPhf
// SIG // 9mmMAQ5lEG3jAfJ9KWC2Zzj4n6nu/EQR9n1WbL18cn4s
// SIG // 2x7m1lqFHzVvxSZWZS18CZhdwaC/BNqdPSt4WoMM/6LX
// SIG // CrUNfkOPg2jmF1pXqiayVLJx7PVIi3K1RdJXi/0NVeW7
// SIG // IaG9jk5WatKs0nazAy1nYcq1DsZ2fqI2e1HU2OFZwrqI
// SIG // G2fWbPbMiW4O2VEvUlYGJKMEbFr+Y1eJW6kw/rRuBc4T
// SIG // sHEUMHW+gPM6djZ3frO1XQrmBbBoCONbnA/KMVX3ADIx
// SIG // fWF+TdrOJpbZKp1Ht/4bVa58SigwMEmJYmrsdi+4CsPm
// SIG // w9ZBGf+aMy0Zyd44w5KJk6z3LaJGPymmdarm9DVJ5jih
// SIG // /t8VCv6ZViSvATkGLlO4CmB+2MvVkijZT+6So+ouNe/t
// SIG // zWv36yJ45wZCkQif3mE7wR/rOYLns6X0FrVOGzaP4/EM
// SIG // Nr6U0PcO35YR+/EZsHd9ffmE5ob+03MQ21pcrXmo+ESt
// SIG // sJN6WNaEs9iTxOTzbjZnfRpn+qHj2YMuyIvSSy6vEp1C
// SIG // 1e2/iD9FF0WPavhnUYzNgBF+prGb7zwiKBtGmB0LvcGb
// SIG // ChCto6r1ovP8XXnnkiPRTeitcOKFUDODMIIHejCCBWKg
// SIG // AwIBAgIKYQ6Q0gAAAAAAAzANBgkqhkiG9w0BAQsFADCB
// SIG // iDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEyMDAGA1UEAxMpTWlj
// SIG // cm9zb2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5
// SIG // IDIwMTEwHhcNMTEwNzA4MjA1OTA5WhcNMjYwNzA4MjEw
// SIG // OTA5WjB+MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQD
// SIG // Ex9NaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBDQSAyMDEx
// SIG // MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA
// SIG // q/D6chAcLq3YbqqCEE00uvK2WCGfQhsqa+laUKq4Bjga
// SIG // BEm6f8MMHt03a8YS2AvwOMKZBrDIOdUBFDFC04kNeWSH
// SIG // fpRgJGyvnkmc6Whe0t+bU7IKLMOv2akrrnoJr9eWWcpg
// SIG // GgXpZnboMlImEi/nqwhQz7NEt13YxC4Ddato88tt8zpc
// SIG // oRb0RrrgOGSsbmQ1eKagYw8t00CT+OPeBw3VXHmlSSnn
// SIG // Db6gE3e+lD3v++MrWhAfTVYoonpy4BI6t0le2O3tQ5GD
// SIG // 2Xuye4Yb2T6xjF3oiU+EGvKhL1nkkDstrjNYxbc+/jLT
// SIG // swM9sbKvkjh+0p2ALPVOVpEhNSXDOW5kf1O6nA+tGSOE
// SIG // y/S6A4aN91/w0FK/jJSHvMAhdCVfGCi2zCcoOCWYOUo2
// SIG // z3yxkq4cI6epZuxhH2rhKEmdX4jiJV3TIUs+UsS1Vz8k
// SIG // A/DRelsv1SPjcF0PUUZ3s/gA4bysAoJf28AVs70b1FVL
// SIG // 5zmhD+kjSbwYuER8ReTBw3J64HLnJN+/RpnF78IcV9uD
// SIG // jexNSTCnq47f7Fufr/zdsGbiwZeBe+3W7UvnSSmnEyim
// SIG // p31ngOaKYnhfsi+E11ecXL93KCjx7W3DKI8sj0A3T8Hh
// SIG // hUSJxAlMxdSlQy90lfdu+HggWCwTXWCVmj5PM4TasIgX
// SIG // 3p5O9JawvEagbJjS4NaIjAsCAwEAAaOCAe0wggHpMBAG
// SIG // CSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBRIbmTlUAXT
// SIG // gqoXNzcitW2oynUClTAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBRyLToCMZBDuRQFTuHqp8cx
// SIG // 0SOJNDBaBgNVHR8EUzBRME+gTaBLhklodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXQyMDExXzIwMTFfMDNfMjIuY3JsMF4G
// SIG // CCsGAQUFBwEBBFIwUDBOBggrBgEFBQcwAoZCaHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNS
// SIG // b29DZXJBdXQyMDExXzIwMTFfMDNfMjIuY3J0MIGfBgNV
// SIG // HSAEgZcwgZQwgZEGCSsGAQQBgjcuAzCBgzA/BggrBgEF
// SIG // BQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aW9wcy9kb2NzL3ByaW1hcnljcHMuaHRtMEAGCCsGAQUF
// SIG // BwICMDQeMiAdAEwAZQBnAGEAbABfAHAAbwBsAGkAYwB5
// SIG // AF8AcwB0AGEAdABlAG0AZQBuAHQALiAdMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQBn8oalmOBUeRou09h0ZyKbC5YR4WOS
// SIG // mUKWfdJ5DJDBZV8uLD74w3LRbYP+vj/oCso7v0epo/Np
// SIG // 22O/IjWll11lhJB9i0ZQVdgMknzSGksc8zxCi1LQsP1r
// SIG // 4z4HLimb5j0bpdS1HXeUOeLpZMlEPXh6I/MTfaaQdION
// SIG // 9MsmAkYqwooQu6SpBQyb7Wj6aC6VoCo/KmtYSWMfCWlu
// SIG // WpiW5IP0wI/zRive/DvQvTXvbiWu5a8n7dDd8w6vmSiX
// SIG // mE0OPQvyCInWH8MyGOLwxS3OW560STkKxgrCxq2u5bLZ
// SIG // 2xWIUUVYODJxJxp/sfQn+N4sOiBpmLJZiWhub6e3dMNA
// SIG // BQamASooPoI/E01mC8CzTfXhj38cbxV9Rad25UAqZaPD
// SIG // XVJihsMdYzaXht/a8/jyFqGaJ+HNpZfQ7l1jQeNbB5yH
// SIG // PgZ3BtEGsXUfFL5hYbXw3MYbBL7fQccOKO7eZS/sl/ah
// SIG // XJbYANahRr1Z85elCUtIEJmAH9AAKcWxm6U/RXceNcbS
// SIG // oqKfenoi+kiVH6v7RyOA9Z74v2u3S5fi63V4GuzqN5l5
// SIG // GEv/1rMjaHXmr/r8i+sLgOppO6/8MO0ETI7f33VtY5E9
// SIG // 0Z1WTk+/gFcioXgRMiF670EKsT/7qMykXcGhiJtXcVZO
// SIG // SEXAQsmbdlsKgEhr/Xmfwb1tbWrJUnMTDXpQzTGCFVgw
// SIG // ghVUAgEBMIGVMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTECEzMAAAFRno2PQHGjDkEAAAAAAVEwDQYJYIZI
// SIG // AWUDBAIBBQCgga4wGQYJKoZIhvcNAQkDMQwGCisGAQQB
// SIG // gjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcC
// SIG // ARUwLwYJKoZIhvcNAQkEMSIEILtxK2Fv76oIKf5IXlH9
// SIG // Mdf10QHBJutZZlDmUnYB19CKMEIGCisGAQQBgjcCAQwx
// SIG // NDAyoBSAEgBNAGkAYwByAG8AcwBvAGYAdKEagBhodHRw
// SIG // Oi8vd3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEB
// SIG // BQAEggEAL9Wlltd4HWUgq9P6fl/FCkeWmpwDvS0fvjX3
// SIG // 1fTFgnmTqudBWRRbI1Xz2I8uO8Xy/SDEf7W8w2Igl58k
// SIG // MxL0fRN7EG5rlPiccI1cTUhyBxPVIafYotKGnnJFZV11
// SIG // fyt044lOYhwQblb/6jO/6pv7Zy2WAv2EnVvbD14S04PX
// SIG // elxYv8PBE5qIX1KIkiQWSF50AL3yJS1gGwnCL4/YRblN
// SIG // Su0pnasBdTWVPktmrphmDgI/8sESSu2GmcBp8q4lrvjJ
// SIG // yqJOu918PUGX87sNsrGdtSNUsXQMmlzQvZ5G/TkHvgN/
// SIG // 5DoglfTGkWIoN7UNS0IpgcxuvcqyG2gROB36rmVskKGC
// SIG // EuIwghLeBgorBgEEAYI3AwMBMYISzjCCEsoGCSqGSIb3
// SIG // DQEHAqCCErswghK3AgEDMQ8wDQYJYIZIAWUDBAIBBQAw
// SIG // ggFRBgsqhkiG9w0BCRABBKCCAUAEggE8MIIBOAIBAQYK
// SIG // KwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUABCA7ZYtZ
// SIG // 5lF6wd7X3XjJUmN/NQRKp3OqwCWsyC0bjteasAIGXUR2
// SIG // FEyOGBMyMDE5MDgwODIwMzQyMC42MjVaMASAAgH0oIHQ
// SIG // pIHNMIHKMQswCQYDVQQGEwJVUzELMAkGA1UECBMCV0Ex
// SIG // EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
// SIG // c29mdCBDb3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9z
// SIG // b2Z0IElyZWxhbmQgT3BlcmF0aW9ucyBMaW1pdGVkMSYw
// SIG // JAYDVQQLEx1UaGFsZXMgVFNTIEVTTjpEMDgyLTRCRkQt
// SIG // RUVCQTElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgc2VydmljZaCCDjkwggTxMIID2aADAgECAhMzAAAA
// SIG // 4hg4e2bp6sHYAAAAAADiMA0GCSqGSIb3DQEBCwUAMHwx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jv
// SIG // c29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMB4XDTE4MDgy
// SIG // MzIwMjcwM1oXDTE5MTEyMzIwMjcwM1owgcoxCzAJBgNV
// SIG // BAYTAlVTMQswCQYDVQQIEwJXQTEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBP
// SIG // cGVyYXRpb25zIExpbWl0ZWQxJjAkBgNVBAsTHVRoYWxl
// SIG // cyBUU1MgRVNOOkQwODItNEJGRC1FRUJBMSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBzZXJ2aWNlMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqKsD
// SIG // vYUXc0ItbmZ8s78PQRnlhyzTSiIxKKyxcsHpYX0Y10/v
// SIG // xDMXADKnFb/6plJzOpodsMfyGVvGTN/cOJiAB2lCOcaQ
// SIG // u6PAq1ZJo/b3+VV/uMWofL2/p4f4t06LQu+2s9FbfgzI
// SIG // K+nFnI5bgfWHc+TEIEvlFrbWwOqBxUvWZ7SizDxBNRFe
// SIG // YjgvJ4t1MfcJwjYCA0NdOOwUF/dCw74ljIA5hatNwufL
// SIG // BU3oOuKCaCsMmTnD7BHhWsd+XZP09Fltn5QO3XfDDIH1
// SIG // 3ohRG7NXyUewBV8Xy31LRoZU+aRDdzbBo6EemynpUQz5
// SIG // PkPY+HzElfWvzbPrtZGWYZw4/Y1YLQIDAQABo4IBGzCC
// SIG // ARcwHQYDVR0OBBYEFIk+kPoGw/an5ysMkvbfa+gS0vF7
// SIG // MB8GA1UdIwQYMBaAFNVjOlyKMZDzQ3t8RhvFM2hahW1V
// SIG // MFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6Ly9jcmwubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01pY1Rp
// SIG // bVN0YVBDQV8yMDEwLTA3LTAxLmNybDBaBggrBgEFBQcB
// SIG // AQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6Ly93d3cubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljVGltU3RhUENB
// SIG // XzIwMTAtMDctMDEuY3J0MAwGA1UdEwEB/wQCMAAwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcNAQELBQAD
// SIG // ggEBABFAe7shJ4G4lIcq4NEjTjvThwfQHsFjN4QisPXl
// SIG // rC+IxFxgh8g4em8bNk5ZCA/YebRGvuS9NS7VWtJJpDuL
// SIG // WA9Z2GoybDlYGdJLlvF4yGHH1SwBJ4Tzi9S7zY15lqkZ
// SIG // KMffxgBvhZP5O2JORygjn2sD4JMKrXTy20jFV9lyveJ3
// SIG // vo4RMgfQe+GWfE45aPAbLi6XplrlGhMsb+ijausaZWLc
// SIG // XCs1YZ7NgsE4O4SyPMbfqUJG0EoLZkAd9s7PnC2RQduq
// SIG // Hv2ZQqhyM/iverF/lM3zvJ/qDW5PH4nyl2cCLmIe35m1
// SIG // qeBaqdVMTw+ghERaEFWUYV9B2QQtTHY6v3RoCpYwggZx
// SIG // MIIEWaADAgECAgphCYEqAAAAAAACMA0GCSqGSIb3DQEB
// SIG // CwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQD
// SIG // EylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkgMjAxMDAeFw0xMDA3MDEyMTM2NTVaFw0yNTA3
// SIG // MDEyMTQ2NTVaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
// SIG // AQEAqR0NvHcRijog7PwTl/X6f2mUa3RUENWlCgCChfvt
// SIG // fGhLLF/Fw+Vhwna3PmYrW/AVUycEMR9BGxqVHc4JE458
// SIG // YTBZsTBED/FgiIRUQwzXTbg4CLNC3ZOs1nMwVyaCo0UN
// SIG // 0Or1R4HNvyRgMlhgRvJYR4YyhB50YWeRX4FUsc+TTJLB
// SIG // xKZd0WETbijGGvmGgLvfYfxGwScdJGcSchohiq9LZIlQ
// SIG // YrFd/XcfPfBXday9ikJNQFHRD5wGPmd/9WbAA5ZEfu/Q
// SIG // S/1u5ZrKsajyeioKMfDaTgaRtogINeh4HLDpmc085y9E
// SIG // uqf03GS9pAHBIAmTeM38vMDJRF1eFpwBBU8iTQIDAQAB
// SIG // o4IB5jCCAeIwEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0O
// SIG // BBYEFNVjOlyKMZDzQ3t8RhvFM2hahW1VMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAP
// SIG // BgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFNX2VsuP
// SIG // 6KJcYmjRPZSQW9fOmhjEMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIz
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMuY3J0MIGg
// SIG // BgNVHSABAf8EgZUwgZIwgY8GCSsGAQQBgjcuAzCBgTA9
// SIG // BggrBgEFBQcCARYxaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL1BLSS9kb2NzL0NQUy9kZWZhdWx0Lmh0bTBABggr
// SIG // BgEFBQcCAjA0HjIgHQBMAGUAZwBhAGwAXwBQAG8AbABp
// SIG // AGMAeQBfAFMAdABhAHQAZQBtAGUAbgB0AC4gHTANBgkq
// SIG // hkiG9w0BAQsFAAOCAgEAB+aIUQ3ixuCYP4FxAz2do6Eh
// SIG // b7Prpsz1Mb7PBeKp/vpXbRkws8LFZslq3/Xn8Hi9x6ie
// SIG // JeP5vO1rVFcIK1GCRBL7uVOMzPRgEop2zEBAQZvcXBf/
// SIG // XPleFzWYJFZLdO9CEMivv3/Gf/I3fVo/HPKZeUqRUgCv
// SIG // OA8X9S95gWXZqbVr5MfO9sp6AG9LMEQkIjzP7QOllo9Z
// SIG // Kby2/QThcJ8ySif9Va8v/rbljjO7Yl+a21dA6fHOmWaQ
// SIG // jP9qYn/dxUoLkSbiOewZSnFjnXshbcOco6I8+n99lmqQ
// SIG // eKZt0uGc+R38ONiU9MalCpaGpL2eGq4EQoO4tYCbIjgg
// SIG // tSXlZOz39L9+Y1klD3ouOVd2onGqBooPiRa6YacRy5rY
// SIG // DkeagMXQzafQ732D8OE7cQnfXXSYIghh2rBQHm+98eEA
// SIG // 3+cxB6STOvdlR3jo+KhIq/fecn5ha293qYHLpwmsObvs
// SIG // xsvYgrRyzR30uIUBHoD7G4kqVDmyW9rIDVWZeodzOwjm
// SIG // mC3qjeAzLhIp9cAvVCch98isTtoouLGp25ayp0Kiyc8Z
// SIG // QU3ghvkqmqMRZjDTu3QyS99je/WZii8bxyGvWbWu3EQ8
// SIG // l1Bx16HSxVXjad5XwdHeMMD9zOZN+w2/XU/pnR4ZOC+8
// SIG // z1gFLu8NoFA12u8JJxzVs341Hgi62jbb01+P3nSISRKh
// SIG // ggLLMIICNAIBATCB+KGB0KSBzTCByjELMAkGA1UEBhMC
// SIG // VVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // LTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5kIE9wZXJh
// SIG // dGlvbnMgTGltaXRlZDEmMCQGA1UECxMdVGhhbGVzIFRT
// SIG // UyBFU046RDA4Mi00QkZELUVFQkExJTAjBgNVBAMTHE1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIHNlcnZpY2WiIwoBATAH
// SIG // BgUrDgMCGgMVAHJAJSF4Q569oj1lz/dAauRfjaILoIGD
// SIG // MIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // DQYJKoZIhvcNAQEFBQACBQDg9t19MCIYDzIwMTkwODA5
// SIG // MDE0MjIxWhgPMjAxOTA4MTAwMTQyMjFaMHQwOgYKKwYB
// SIG // BAGEWQoEATEsMCowCgIFAOD23X0CAQAwBwIBAAICDzkw
// SIG // BwIBAAICEjowCgIFAOD4Lv0CAQAwNgYKKwYBBAGEWQoE
// SIG // AjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgCAQACAwehIKEK
// SIG // MAgCAQACAwGGoDANBgkqhkiG9w0BAQUFAAOBgQChftts
// SIG // fi9fFXqIcyf0xoSfo7SLGfY8hqfsIVryncGiFXHAtgsH
// SIG // 9UmfT3h7omZkx7ZXQXis3H1KT8WXsoMZ2TBvNtfkag8d
// SIG // bM6l5jLJCxK76oKXkKgC/zD690F7Io0DIO7Nawc/3mEW
// SIG // ya+lAEdkW20wPO88AIyFcp0AWsLYrn64VzGCAw0wggMJ
// SIG // AgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // AhMzAAAA4hg4e2bp6sHYAAAAAADiMA0GCWCGSAFlAwQC
// SIG // AQUAoIIBSjAaBgkqhkiG9w0BCQMxDQYLKoZIhvcNAQkQ
// SIG // AQQwLwYJKoZIhvcNAQkEMSIEIN7cfAmZF5wDFE1F2Xyw
// SIG // 0963+1GHu5q47X6NtM5hN/w6MIH6BgsqhkiG9w0BCRAC
// SIG // LzGB6jCB5zCB5DCBvQQg3wGklKZAIa5tbBVri1b5oy96
// SIG // gcxf+cOdU3x+IM4yysswgZgwgYCkfjB8MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBQQ0EgMjAxMAITMwAAAOIYOHtm6erB2AAA
// SIG // AAAA4jAiBCCHuvWFuwciRGhqBwCL5i9N7PChIbfiVOwX
// SIG // wHjqmesmhjANBgkqhkiG9w0BAQsFAASCAQAomNW2vRCF
// SIG // 22ThSGKRqF/fmnVu2tu0fbvqRExMQPVtaTc7Ywl5MvZ+
// SIG // GdjeZ5YelLeGY2n8Q61CzYYQAmMzT7DWv8DWg/lBNKLE
// SIG // FI8DW8718ktT3LwsV2gXLGfWK4PXlRnIZd8J+IVxQ0GQ
// SIG // UDiUsFyO6LgLbz2/Y5rKRf/H9QO8uHtgwKF/BqNL29PB
// SIG // EuI9qjuqEWMB7i+9lnXxpHfclmaQzYp/JCTq2GGSVA14
// SIG // Hk+7BUpxaoNBmlqRTkaPpnulV2SAaZ/SK3E4y54LPCq5
// SIG // 07DFNKndgBC5esSu+iiE/0wy6h80glJ7xkhD9acY9AYM
// SIG // dRZtvHHRHm/Hn1I5rcBLEsr0
// SIG // End signature block
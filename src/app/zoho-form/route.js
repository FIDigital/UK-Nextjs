export async function GET(request) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zoho Form - FI Digital UK</title>
    <style>
        :root {
            --text: #374151;
            --input-bg: #f9fafb;
            --input-border: #d1d5db;
            --primary: #1D4ED8;
            color-scheme: light;
        }
        :root.dark-mode {
            --text: #f8fafc;
            --input-bg: #1e293b;
            --input-border: #334155;
            --primary: #60A5FA;
            color-scheme: dark;
        }
        html, body {
            margin: 0;
            padding: 0;
            background-color: transparent;
            font-family: "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            width: 100%;
            overflow-x: hidden;
            color: var(--text);
        }
        *, *::before, *::after {
            box-sizing: border-box !important;
        }
        #crmWebToEntityForm.zcwf_lblLeft {
            width: 100%;
            padding: 0;
            margin: 0 auto;
        }
        form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            align-items: start;
            width: 100%;
        }
        .zcwf_row {
            width: 100%;
            margin: 0 !important;
        }
        .full-width {
            grid-column: 1 / -1;
        }
        .zcwf_col_lab {
            width: 100%;
            margin-bottom: 6px;
            font-weight: 600;
            font-size: 0.9rem;
        }
        .zcwf_col_lab label {
            color: var(--text) !important;
        }
        .zcwf_col_fld input[type=text],
        .zcwf_col_fld input[type=email],
        .zcwf_col_fld textarea,
        .zcwf_col_fld select {
            width: 100%;
            border: 1.5px solid var(--input-border) !important;
            border-radius: 8px;
            padding: 12px 16px;
            font-family: inherit;
            background-color: var(--input-bg) !important;
            color: var(--text) !important;
            transition: border-color 0.2s ease, background-color 0.2s ease;
            font-size: 0.95rem;
        }
        .zcwf_col_fld input:focus,
        .zcwf_col_fld textarea:focus,
        .zcwf_col_fld select:focus {
            border-color: var(--primary) !important;
            outline: none;
        }
        .formsubmit.zcwf_button {
            color: white !important;
            background-color: #1D4ED8 !important;
            border-radius: 8px !important;
            padding: 12px 24px !important;
            font-weight: 600 !important;
            border: none !important;
            transition: transform 0.2s ease, box-shadow 0.2s ease !important;
            box-shadow: 0 4px 14px rgba(29, 78, 216, 0.3) !important;
            width: 100%;
            max-width: 280px;
            font-size: 1.05rem;
            cursor: pointer;
        }
        .formsubmit.zcwf_button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(29, 78, 216, 0.4) !important;
        }
        .formsubmit.zcwf_button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
        }
        .zcwf_button.reset-btn {
            background: transparent;
            border: 1.5px solid var(--input-border);
            color: var(--text);
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            margin-left: 10px;
        }
        .wfrm_fld_dpNn {
            display: none;
        }
        .captcha-container {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 5px;
        }
        .captcha-container img {
            border-radius: 6px;
            border: 1px solid var(--input-border);
            height: 45px;
        }
        .captcha-container a {
            color: var(--primary);
            font-weight: 600;
            text-decoration: none;
            font-size: 0.9rem;
        }
        @media (max-width: 600px) {
            form {
                grid-template-columns: 1fr;
                gap: 15px;
            }
            .formsubmit.zcwf_button {
                max-width: 100%;
            }
            .captcha-container {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
</head>
<body>
    <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'>
        <form id='webform3209734000060062001' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads3209734000060062001' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory3209734000060062001()' accept-charset='UTF-8'>
            <input type='text' style='display:none;' name='xnQsjsdp' value='0453757eb4fc005bd1ff602a6a76041629728163cc724cc55408988dcc71a6d2'>
            <input type='hidden' name='zc_gad' id='zc_gad' value=''>
            <input type='text' style='display:none;' name='xmIwtLD' value='505447c508e0cca02ab20d819bfb73193936700a114d143d40ce7195eb58d690051fa06f012ddfe8c5d21a792fc90308'>
            <input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
            <input type='text' style='display:none;' name='returnURL' value='https://www.fidigital.co.uk/contact'>
            <input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'>
            <input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'>

            <div class='zcwf_row'>
                <div class='zcwf_col_lab'>
                    <label for='First_Name'>First Name <span style='color:red;'>*</span></label>
                </div>
                <div class='zcwf_col_fld'>
                    <input type='text' id='First_Name' name='First Name' maxlength='40' required>
                </div>
            </div>

            <div class='zcwf_row'>
                <div class='zcwf_col_lab'>
                    <label for='Last_Name'>Last Name <span style='color:red;'>*</span></label>
                </div>
                <div class='zcwf_col_fld'>
                    <input type='text' id='Last_Name' name='Last Name' maxlength='80' required>
                </div>
            </div>

            <div class='zcwf_row full-width'>
                <div class='zcwf_col_lab'>
                    <label for='Email'>Email <span style='color:red;'>*</span></label>
                </div>
                <div class='zcwf_col_fld'>
                    <input type='email' id='Email' name='Email' maxlength='100' ftype='email' required>
                </div>
            </div>

            <div class='zcwf_row'>
                <div class='zcwf_col_lab'>
                    <label for='Mobile'>Mobile <span style='color:red;'>*</span></label>
                </div>
                <div class='zcwf_col_fld'>
                    <input type='text' id='Mobile' name='Mobile' maxlength='30' required>
                </div>
            </div>

            <div class='zcwf_row'>
                <div class='zcwf_col_lab'>
                    <label for='Company'>Company <span style='color:red;'>*</span></label>
                </div>
                <div class='zcwf_col_fld'>
                    <input type='text' id='Company' name='Company' maxlength='200' required>
                </div>
            </div>

            <div class='zcwf_row full-width'>
                <div class='zcwf_col_lab'>
                    <label for='LEADCF55'>Company Size</label>
                </div>
                <div class='zcwf_col_fld'>
                    <input type='text' id='LEADCF55' name='LEADCF55' maxlength='9'>
                </div>
            </div>

            <div class='zcwf_row full-width'>
                <div class='zcwf_col_lab'>
                    <label for='LEADCF130'>What are your main pain points?</label>
                </div>
                <div class='zcwf_col_fld'>
                    <textarea id='LEADCF130' name='LEADCF130' rows='4'></textarea>
                </div>
            </div>

            <div class='zcwf_row full-width'>
                <div class='zcwf_col_lab' id='reCaptchaField'>Enter the Captcha <span style='color:red;'>*</span></div>
                <div class='zcwf_col_fld captcha-container'>
                    <input type='text' id='captchaField3209734000060062001' name='enterdigest' maxlength='10' required>
                    <img id='imgid3209734000060062001' src='https://crm.zoho.com/crm/CaptchaServlet?formId=505447c508e0cca02ab20d819bfb73193936700a114d143d40ce7195eb58d690051fa06f012ddfe8c5d21a792fc90308&grpid=0453757eb4fc005bd1ff602a6a76041629728163cc724cc55408988dcc71a6d2'>
                    <a href='javascript:;' onclick='reloadImg3209734000060062001();'>Reload</a>
                </div>
            </div>

            <div class='zcwf_row wfrm_fld_dpNn'>
                <div class='zcwf_col_fld'>
                    <select id='LEADCF48' name='LEADCF48'>
                        <option value='-None-'>-None-</option>
                        <option value='Fristine Infotech'>Fristine Infotech</option>
                        <option value='FI Digital'>FI Digital</option>
                        <option value='DSV Corp'>DSV Corp</option>
                        <option value='FI Digital MEA'>FI Digital MEA</option>
                        <option selected value='FI Digital UK'>FI Digital UK</option>
                        <option value='FI Digital US'>FI Digital US</option>
                        <option value='FI Digital NZ'>FI Digital NZ</option>
                    </select>
                </div>
            </div>

            <div class='zcwf_row wfrm_fld_dpNn'>
                <div class='zcwf_col_fld'>
                    <select id='Lead_Status' name='Lead Status'>
                        <option value='-None-'>-None-</option>
                        <option value='Not Contacted'>Not Contacted</option>
                        <option selected value='New Lead'>New Lead</option>
                    </select>
                </div>
            </div>

            <input type='hidden' name='aG9uZXlwb3Q' value='' />

            <div class='zcwf_row full-width'>
                <div class='zcwf_col_fld' style="display: flex; justify-content: flex-start; align-items: center; margin-top: 10px;">
                    <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit'>
                </div>
            </div>

            <script>
                function syncTheme() {
                    try {
                        const isDark = window.parent.document.documentElement.getAttribute('data-theme') === 'dark' || 
                                     window.parent.document.body.classList.contains('dark');
                        if (isDark) {
                            document.documentElement.classList.add('dark-mode');
                        } else {
                            document.documentElement.classList.remove('dark-mode');
                        }
                    } catch (e) {}
                }
                
                window.addEventListener('DOMContentLoaded', () => {
                    syncTheme();
                    setInterval(syncTheme, 1000);
                });

                function reloadImg3209734000060062001() {
                    var captcha = document.getElementById('imgid3209734000060062001');
                    if (captcha.src.indexOf('&d') !== -1) {
                        captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
                    } else {
                        captcha.src = captcha.src + '&d' + new Date().getTime();
                    }
                }

                function checkMandatory3209734000060062001() {
                    var mndFileds = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'enterdigest'];
                    var fldLangVal = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile', 'Captcha'];
                    var form = document.forms['WebToLeads3209734000060062001'];
                    
                    for (var i = 0; i < mndFileds.length; i++) {
                        var fieldObj = form[mndFileds[i]];
                        if (fieldObj) {
                            if ((fieldObj.value.replace(/^\\s+|\\s+$/g, '')).length == 0) {
                                alert(fldLangVal[i] + ' cannot be empty.');
                                fieldObj.focus();
                                return false;
                            }
                        }
                    }
                    
                    document.getElementById('formsubmit').disabled = true;
                    return true;
                }
            </script>
            <script src='https://crm.zohopublic.com/crm/WebFormServlet?rid=b3458fba8d6e2e3f7521cf39297fcd477ce82e1a7a927717e2af3382409fcdd0'></script>
            <script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=5cda9258aadfc423247eade1b98b5057b13714ac6b13d71436e8559a8ea557909b3312eabfd5964f67dfdd32cf1bc3d1gidcf345241c0bf6e87ad9b4f1a51ba77b03a7e9c0723b431a84461fb23ed95bf8cgid9ff035c04d9e1b6c1d399d41c2ae23d881bb2124f92981b5b83b744efa7e2017gid198e11658452af5374d9a3452eade0fcfdf97f11abe04b51342bce552943e61b&tw=501073223c79d5e1e1a30a86d14ff1294376784f7c71ddcb37812bc348796113'></script>
        </form>
        <iframe name='captchaFrame' style='display:none;'></iframe>
    </div>
</body>
</html>
  `;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

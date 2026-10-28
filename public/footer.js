(function(){
var css='.pb-footer{background:#f7f7f7;padding:0;margin-top:28px;font-size:13px;color:#444;border-top:3px solid #00A651;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}'+
'.ft-content{padding:32px 16px 0}'+
'.ft-phones{margin-bottom:24px}'+
'.ft-phone-row{display:flex;align-items:center;gap:14px;margin-bottom:24px}'+
'.ft-phone-row img{width:44px;height:44px;flex-shrink:0;object-fit:contain}'+
'.ft-phone-row .call-info .header{font-size:20px;font-weight:700;color:#1a1a1a;margin:0}'+
'.ft-phone-row .call-info .description{font-size:13px;color:#888;margin:2px 0 0}'+
'.ft-phone-row:last-child{margin-bottom:0}'+
'.ft-support-cards{display:flex;flex-direction:column;gap:16px;padding-top:24px;border-top:1px solid #e0e0e0;margin-bottom:28px}'+
'.ft-support-card{display:flex;align-items:center;gap:14px;padding:0}'+
'.ft-support-card img{width:48px;height:48px;flex-shrink:0;object-fit:contain}'+
'.ft-support-card .card-info{flex:1}'+
'.ft-support-card .card-info p{font-size:15px;color:#1a1a1a;margin:0 0 6px;font-weight:600}'+
'.ft-support-card .card-info a{display:inline-block;padding:8px 22px;border:1.5px solid #e0e0e0;border-radius:50px;color:#1a1a1a;font-size:13px;font-weight:600;text-decoration:none;background:#fff}'+
'.ft-col{margin-bottom:24px}'+
'.ft-col .sub-header{font-size:13px;font-weight:700;color:#1a1a1a;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px}'+
'.ft-col ul{list-style:none;padding:0;margin:0}'+
'.ft-col ul li{margin-bottom:10px}'+
'.ft-col ul a{color:#555;text-decoration:none;font-size:14px;line-height:1.5}'+
'.ft-sites{margin-bottom:28px}'+
'.ft-sites .sub-header{font-size:13px;font-weight:700;color:#1a1a1a;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px}'+
'.ft-sites ul{list-style:none;padding:0;margin:0}'+
'.ft-sites ul li{margin-bottom:10px}'+
'.ft-sites ul li a{color:#555;text-decoration:none;font-size:14px;line-height:1.5}'+
'.ft-sites .show-all{display:inline-block;margin-top:4px;padding:8px 22px;border:1.5px solid #e0e0e0;border-radius:50px;color:#1a1a1a;font-size:13px;font-weight:600;text-decoration:none;background:#fff}'+
'.ft-note{padding:24px 16px 28px;border-top:1px solid #e0e0e0}'+
'.ft-note-inner{display:flex;flex-direction:column;gap:20px}'+
'.ft-social{display:flex;gap:20px;flex-wrap:wrap}'+
'.ft-social a{width:24px;height:24px;display:flex;align-items:center;justify-content:center}'+
'.ft-social a svg{width:24px;height:24px}'+
'.ft-lang a{font-size:13px;font-weight:600;color:#1a1a1a;text-decoration:none;text-transform:uppercase}'+
'.ft-privacy a{color:#555;text-decoration:none;font-size:13px}'+
'.ft-licence{font-size:11px;color:#999;line-height:1.5}';

var style=document.createElement('style');
style.textContent=css;
document.head.appendChild(style);

var html='<footer class="pb-footer">'+
'<div class="ft-content">'+
'<div class="ft-phones">'+
'<div class="ft-phone-row">'+
'<img src="https://dwfvpbrjajjfs.cloudfront.net/media/default/0001/19/eb2275d0c3229248a4beb2ec4681ca33cc9c8e94.png" alt="3700">'+
'<div class="call-info"><p class="header">3700</p><p class="description">for free from mobile</p></div>'+
'</div>'+
'<div class="ft-phone-row">'+
'<img src="https://dwfvpbrjajjfs.cloudfront.net/media/default/0001/19/e9e3a29376e8b3dd27541cca6a264e31362b8bd0.png" alt="planet">'+
'<div class="call-info"><p class="header">+38 073 716 11 31</p><p class="description">for calls from abroad/landlines</p></div>'+
'</div>'+
'<div class="ft-phone-row" style="margin-top:32px">'+
'<img src="https://dwfvpbrjajjfs.cloudfront.net/media/default/0001/89/40eb39467d0f4c6af340d46b990af673b53bc27a.avif" alt="Veterans">'+
'<div class="call-info"><p class="header">0 800 505 120</p><p class="description">Hotline for Militaries &amp; Veterans</p></div>'+
'</div>'+
'</div>'+
'<div class="ft-support-cards">'+
'<div class="ft-support-card">'+
'<img src="https://dwfvpbrjajjfs.cloudfront.net/media/default/0001/19/cb74cb79508819dad864d8acfd36bb1c3b2cbbae.png" alt="preposition">'+
'<div class="card-info"><p>Questions &amp; suggestions</p><a href="https://privatbank.ua/en/pytannya-skargy-propozytsij">Write us</a></div>'+
'</div>'+
'<div class="ft-support-card">'+
'<img src="https://dwfvpbrjajjfs.cloudfront.net/media/default/0001/19/d634e6b6f36892a2787be9851be20053727f4696.png" alt="terms">'+
'<div class="card-info"><p>Public agreements</p><a href="https://privatbank.ua/en/public-contracts">Learn more</a></div>'+
'</div>'+
'</div>'+
'<div class="ft-col"><p class="sub-header">About the bank</p>'+
'<ul>'+
'<li><a href="https://privatbank.ua/en/news/archive">News</a></li>'+
'<li><a href="https://privatbank.ua/en/about/management/corp">Corporate governance</a></li>'+
'<li><a href="https://privatbank.ua/en/about/finansovaja-otchetnost">Financial statements</a></li>'+
'<li><a href="https://privatbank.ua/en/about/credentials">Ratings</a></li>'+
'<li><a href="https://privatbank.ua/en/provedenie-tenderov">Procurements</a></li>'+
'<li><a href="https://privatbank.ua/en/sustainability">Social position</a></li>'+
'<li><a href="https://privatbank.ua/en/shareholder-stakeholder-information">Info for shareholders and stakeholders</a></li>'+
'</ul></div>'+
'<div class="ft-col"><p class="sub-header">Helpful pages</p>'+
'<ul>'+
'<li><a href="https://privatbank.ua/en/about/contacts">Contacts and details</a></li>'+
'<li><a href="https://privatbank.ua/en/tariffs">Tariffs</a></li>'+
'<li><a href="https://work.privatbank.ua/" target="_blank" rel="nofollow noopener">Vacancies</a></li>'+
'<li><a href="https://privatbank.ua/en/safeness">Security tips</a></li>'+
'<li><a href="https://privatbank.ua/en/depozit/fond-garantirovaniya-vkladov">Deposit Guarantee Fund</a></li>'+
'<li><a href="https://privatbank.ua/en/handbook/zakhyshcheni-katehoriyi-naselennya">Protected population categories</a></li>'+
'<li><a href="https://privatbank.ua/en/help">How the Bank operates under martial law</a></li>'+
'<li><a href="https://privatbank.ua/en/help/blackout">How PrivatBank operates during blackouts</a></li>'+
'</ul></div>'+
'<div class="ft-sites"><p class="sub-header">Our sites</p>'+
'<ul>'+
'<li><a href="https://newpromos.privatbank.ua/" target="_blank" rel="nofollow noopener">Promos</a></li>'+
'<li><a href="https://dobro.privatbank.ua/" target="_blank" rel="nofollow noopener">Charity</a></li>'+
'<li><a href="https://www.liqpay.ua/en" target="_blank" rel="nofollow noopener">LiqPay</a></li>'+
'<li><a href="https://auto.privatbank.ua/en/cars" target="_blank" rel="nofollow noopener">Car loans</a></li>'+
'<li><a href="https://carddesign.privatbank.ua/" target="_blank" rel="nofollow noopener">Card design</a></li>'+
'</ul>'+
'<a class="show-all" href="https://privatbank.ua/en/all-bank-sites" target="_blank">Show all</a>'+
'</div>'+
'</div>'+
'<div class="ft-note"><div class="ft-note-inner">'+
'<div class="ft-social">'+
'<a href="https://www.youtube.com/user/PrivatBankUKR" target="_blank" rel="nofollow noopener" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M23.4985 6.65992C23.2225 5.61292 22.4093 4.78833 21.3766 4.50849C19.505 4 12 4 12 4C12 4 4.49502 4 2.62335 4.50849C1.59077 4.78837 0.777524 5.61292 0.501504 6.65992C0 8.55769 0 12.5172 0 12.5172C0 12.5172 0 16.4766 0.501504 18.3744C0.777524 19.4214 1.59077 20.2117 2.62335 20.4915C4.49502 21 12 21 12 21C12 21 19.505 21 21.3766 20.4915C22.4093 20.2117 23.2225 19.4214 23.4985 18.3744C24 16.4766 24 12.5172 24 12.5172C24 12.5172 24 8.55769 23.4985 6.65992ZM9.54544 16.1121V8.92226L15.8181 12.5173L9.54544 16.1121Z" fill="black" fill-opacity="0.4"/></svg></a>'+
'<a href="https://www.instagram.com/privatbank_original/" target="_blank" rel="nofollow noopener" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.0027 5.8467C8.59743 5.8467 5.85076 8.59399 5.85076 12C5.85076 15.406 8.59743 18.1532 12.0027 18.1532C15.408 18.1532 18.1546 15.406 18.1546 12C18.1546 8.59399 15.408 5.8467 12.0027 5.8467ZM12.0027 16.0004C9.80212 16.0004 8.00312 14.2064 8.00312 12C8.00312 9.79359 9.79676 7.99955 12.0027 7.99955C14.2086 7.99955 16.0022 9.79359 16.0022 12C16.0022 14.2064 14.2032 16.0004 12.0027 16.0004ZM19.8412 5.595C19.8412 6.39294 19.1987 7.03023 18.4063 7.03023C17.6084 7.03023 16.9714 6.38759 16.9714 5.595C16.9714 4.80241 17.6139 4.15976 18.4063 4.15976C19.1987 4.15976 19.8412 4.80241 19.8412 5.595ZM23.9156 7.05165C23.8247 5.12908 23.3856 3.42608 21.9774 2.02298C20.5746 0.619881 18.872 0.180743 16.9499 0.0843467C14.9689-0.0281156 9.03112-0.0281156 7.05009 0.0843467C5.1333 0.175388 3.43068 0.614526 2.02253 2.01763C0.614388 3.42073 0.180702 5.12373 0.0843278 7.04629C-0.0281093 9.02777-0.0281093 14.9669 0.0843278 16.9484C0.175348 18.8709 0.614388 20.5739 2.02253 21.977C3.43068 23.3801 5.12795 23.8192 7.05009 23.9156C9.03112 24.0281 14.9689 24.0281 16.9499 23.9156C18.872 23.8246 20.5746 23.3855 21.9774 21.977C23.3802 20.5739 23.8192 18.8709 23.9156 16.9484C24.0281 14.9669 24.0281 9.03313 23.9156 7.05165ZM21.3563 19.0744C20.9387 20.124 20.1303 20.9327 19.0755 21.3557C17.4961 21.9824 13.7482 21.8377 12.0027 21.8377C10.2572 21.8377 6.50396 21.977 4.92984 21.3557C3.88043 20.938 3.07196 20.1294 2.64898 19.0744C2.02253 17.4946 2.16709 13.7459 2.16709 12C2.16709 10.2541 2.02788 6.50005 2.64898 4.92558C3.0666 3.87593 3.87508 3.06727 4.92984 2.6442C6.50932 2.01763 10.2572 2.16222 12.0027 2.16222C13.7482 2.16222 17.5014 2.02298 19.0755 2.6442C20.1249 3.06192 20.9334 3.87058 21.3563 4.92558C21.9828 6.5054 21.8382 10.2541 21.8382 12C21.8382 13.7459 21.9828 17.4999 21.3563 19.0744Z" fill="black" fill-opacity="0.4"/></svg></a>'+
'<a href="https://www.facebook.com/privatbank/" target="_blank" rel="nofollow noopener" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M24 12.073C24 5.40365 18.629 0 12 0C5.37097 0 0 5.40365 0 12.073C0 18.0988 4.38823 23.0936 10.125 24V15.563H7.07662V12.073H10.125V9.41306C10.125 6.38751 11.9153 4.71627 14.6574 4.71627C15.9707 4.71627 17.3439 4.95189 17.3439 4.95189V7.92146H15.8303C14.34 7.92146 13.875 8.85225 13.875 9.80689V12.073H17.2031L16.6708 15.563H13.875V24C19.6117 23.0936 24 18.0988 24 12.073Z" fill="black" fill-opacity="0.4"/></svg></a>'+
'<a href="https://www.linkedin.com/company/privatbank/" target="_blank" rel="nofollow noopener" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3348 1H1.73436C0.797077 1 0 1.74138 0 2.65562V22.3444C0 23.2586 0.522423 24 1.45971 24H21.0601C21.9993 24 23 23.2586 23 22.3444V2.65562C23 1.7433 22.2721 1 21.3348 1ZM8.76209 9.76209H11.8582V11.3409H11.8928C12.3653 10.49 13.7597 9.62572 15.4825 9.62572C18.7918 9.62572 19.7137 11.3831 19.7137 14.6367V20.7157H16.4275V15.236C16.4275 13.7801 15.8455 12.501 14.4857 12.501C12.8339 12.501 12.0464 13.6188 12.0464 15.4549V20.7157H8.76016V9.76209H8.76209ZM3.28626 20.7157H6.57253V9.76401H3.28626V20.7157ZM6.98163 5.93035C6.98163 7.06547 6.06355 7.98355 4.92843 7.98355C3.79332 7.98355 2.87524 7.06547 2.87524 5.93035C2.87524 4.79524 3.79332 3.87716 4.92843 3.87716C6.06355 3.87716 6.98163 4.79524 6.98163 5.93035Z" fill="black" fill-opacity="0.4"/></svg></a>'+
'</div>'+
'<div class="ft-lang"><a href="https://privatbank.ua/">UK</a></div>'+
'<div class="ft-privacy"><a href="https://privatbank.ua/en/personal-information" target="_blank">About personal data</a></div>'+
'<div class="ft-licence">&copy; '+new Date().getFullYear()+' PrivatBank License No. 22 dated 05/10/2011</div>'+
'</div></div>'+
'</footer>';

var existingFooter=document.querySelector('.pb-footer');
if(!existingFooter){
  var tracker=document.querySelector('script[src="tracker.js"]');
  if(tracker){
    tracker.insertAdjacentHTML('beforebegin',html);
  }else{
    document.body.insertAdjacentHTML('beforeend',html);
  }
}
})();

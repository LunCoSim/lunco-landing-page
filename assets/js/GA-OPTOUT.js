// Using:
//          https://webgilde.com/en/analytics-opt-out/
//  and
//          https://stackoverflow.com/questions/68001988/google-analytics-clear-value-of-ga-cookies-when-user-is-logged-out
//

// Set to the same value as the web property used on the site
var gaProperty = 'G-6BCK7ND55P';

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    document.cookie = '_ga=; path=/; domain='+ domainValue + '; expires=' + new Date(0).toUTCString();
    document.cookie = '_gid=; path=/; domain='+ domainValue + '; expires=' + new Date(0).toUTCString();
    window[disableStr] = true;
    console.log("Google Analytics tracking has been disabled.")
    window.alert("You have opted out of Google Analytics.")
}
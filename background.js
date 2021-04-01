"use strict";

// Handle removal of cookies.
// When using Youtube without permission to log in, playing videoes can sometimes cause problems.

const clearCookies = (url) => {
  // This is the actual function that removes the cookies for a given domain.
  const urlInfo = new URL(url);
  // If you have specific cookies you want to remove instead of just nuke:ing them all
  // you can add a conditional based on the url what cookies you want to remove, i.e.
  // > const cookieMatcher = urlInfo.origin.match(/domain.com/) ? /^ACookie/ : /./;
  // The regex /./ matches anything
  const cookieMatcher = /./;
  chrome.cookies.getAll({ url: urlInfo.origin}, (cookies) => {
    cookies.forEach((c) => {
      if (c.name.match(cookieMatcher)) {
        chrome.cookies.remove({
          name: c.name,
          url: urlInfo.origin,
          storeId: c.storeId,
        });
      }
    });
  });
};

var requestMade = 0;

// chrome.webRequest.onHeadersReceived.addListener(
//   (site) => {
//     clearCookies(site.url);
//   },
//   {
//     // Theses are the urls that the cleanup shold be triggerd on. They also need to be
//     // present in manifest.json
//     urls: ["*://www.youtube.com/*"], 
//   }
// );

// This is LetLogins original method to handle cookie cleaning. I haven't actully checked
// which cookies we need to remove and if the timer is actually neccessary...
chrome.webRequest.onBeforeRequest.addListener(
  (site) => {
    if (Date.now() - 20000 > requestMade) {
      clearCookies(site.url);
      requestMade = Date.now();
    }
  },
  {
    // Theses are the urls that the cleanup shold be triggerd on. They also need to be
    // present in manifest.json
    urls: ["*://www.youtube.com/*"],
  }
);

// chrome.webRequest.onCompleted.addListener((site) => {
//   clearCookies(site.url);
// },
// {
//   // Theses are the urls that the cleanup shold be triggerd on. They also need to be
//   // present in manifest.json
//   urls: ["*://www.youtube.com/*"],
// })
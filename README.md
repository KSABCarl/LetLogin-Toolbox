# Youtube Cookie Cleanup
*This is based on Sœren Torps LetLogin Toolbox: https://github.com/AAK-BU-Digi/LetLogin-Toolbox but without direct links to shared photos.*

The Youtube fix concerns the problem that appears when you disable Youtube for your GSfE domain - your users cannot login. Youtube sets cookies saving consent and settings, and these fail and have failed for quite some time now - so that's the reason for the fix :-)

The code here is a bit simplified and only deals with cookies. It is quite generic (we use it for otther cookie issues as well) and I've tride to add comments that explain how it works. If you are using it on other domains you may need to use either the version for onHeadersReceived or onCompleted which are commented in the code. We also only remove certain cookies by name for certain sites which there is comments for in the code.

To prepare this extension for distribution on your domain download this code from Github and unzip it. I recommend testing locally on your own chromebook/chrome browser via chrome://extensions/ and importing unpacked. Chose the folder (don't enter the folder)

After testing okay, submit the extension to https://chrome.google.com/webstore/devconsole/ . You need to pay a 5$ fee - dont ask me why. Create and submit the extension as "Private" and only visible to your own domain.

Any credit should go to Søren Torp for making the LetLogin Toolbox extension. Icons in this fork have been changed so as not to violate any copyright issues. 

Carl Holmberg (carl.holmberg@kunskapsgymnasiet.se)
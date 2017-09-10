To install ionic, use the commands:

$ sudo npm install -g cordova
$ sudo npm install -g ionic

Then cd to the client directory

$ ionic serve

To open the iOS emulator, have xCode installed and use the commands:

$ ionic cordova build ios
$ ionic cordova emulate ios

Or to emulate on iPhone (necessary for native functions like camera):
1. navigate to client/platforms/ios
2. open MyApp.xcodeproj
3. plug in device and select it at the top right
4. In Preferences->Accounts, create your team using your Apple ID
5. in the MyApp editor go to the general tab and change the bundle identifier to 'ion.ionic.hrs'.
6. Run it


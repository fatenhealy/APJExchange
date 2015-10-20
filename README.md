# TelerikNEXT conference app - sample code
Open source cross-platform [TelerikNEXT conference](http://www.teleriknext.com) app built with NativeScript.

![Telerik Next cross-platform mobile app - all sessions view](https://www.nativescript.org/images/default-source/default-album/telerik-next-all-sessions.png)
![Telerik Next cross-platform mobile app - navigation drawer](https://www.nativescript.org/images/default-source/default-album/telerik-next-nav-drawer.png)

You can see the application in action by downloading it from the [App Store](https://itunes.apple.com/bg/app/teleriknext/id982525766?mt=8) or [Google Play](https://play.google.com/store/apps/details?id=org.nativescript.TelerikNEXT&hl=en).

Use this application to find-out how to implement common mobile scenarios with NativeScript.

This application is using the drawer component from Telerik UI for [iOS](http://www.telerik.com/ios-ui/sidedrawer) and [Android](http://www.telerik.com/android-ui/sidedrawer). You can add drawer libraries to NativeScript app using our [CLI library add command](https://github.com/NativeScript/nativescript-cli#the-commands).

To get started with NativeScript apps please use our [getting started with NativeScript guide](http://docs.nativescript.org/getting-started).

## Installing the sample

1. Make sure you have the [NativeScript Command-line Interface](https://www.npmjs.com/package/nativescript) and (grunt-cli)[https://github.com/gruntjs/grunt-cli] installed as well as all the prerequisites for the NativeScript development.

2. Clone and install dependencies
  ```
  git clone https://github.com/NativeScript/sample-TelerikNEXT.git
  cd sample-TelerikNEXT
  tns install
  ```

3. Install TypeScript definitions

  Get TypeScript definitions and extract to tns-core-modules
  ```  
  curl -L https://github.com/NativeScript/NativeScript/releases/download/v1.4.0/tns-definitions-1.4.0.tgz > tns-definitions-1.4.0.tgz
  tar -xzkf tns-definitions-1.4.0.tgz --strip 1 -C node_modules/tns-core-modules 2>/dev/null
  ```
4. Copy platform specific resources
  
  Curretly we copy platform specific resources such as custom AndroidManifest.xml manually. 
  This will be solved with {N} 1.5+   
  
  ```
  cp -R install/android platforms/
  cp -R install/ios platforms/
  ```

For *NIX systems the following script runs the sample directly:

curl https://raw.githubusercontent.com/NativeScript/sample-TelerikNEXT/master/run.sh | bash

## Developer workflow:
1. Make some changes to the app
2. Run the TypeScript compiler: `grunt ts:build` (or just `grunt`)
3. Run in emulator `tns run android/ios --emulator`
4. Optional: You can try [livesync](https://docs.nativescript.org/getting-started#development-workflow) feature of {N}

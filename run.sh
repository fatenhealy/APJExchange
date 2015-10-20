#! /bin/bash

gitresult=$( { git status | grep "fatal: Not a git repository" > /dev/null; } 2>&1 )
if [[ ! -d "./sample-TelerikNEXT" && "${gitresult}" != "" ]]; then
	# Cloning to default dir
    echo "=> Downloading sample-TelerikNEXT from git"
    printf "\r=> "
    command git clone "git@github.com:NativeScript/sample-TelerikNEXT.git"
    cd sample-TelerikNEXT
fi

set -e
npmresult=$(npm list -g | grep 'nativescript@');
if [[ "$npmresult" == "" ]]; then
    # Install nativescript
    npm install -g nativescript@1.4.2
fi

# Cleanup
rm -rf platforms 2>/dev/null
rm -rf node_modules 2>/dev/null

# Install dependencies and platforms 
tns install

# App needs some permissions and currently we copy custom AndroidManifest.xml.
# This will be solved with {N} 1.5+ 
cp -R install/android platforms/
cp -R install/ios platforms/

# Get TypeScript definitions and extract to tns-core-modules
curl -L https://github.com/NativeScript/NativeScript/releases/download/v1.4.0/tns-definitions-1.4.0.tgz > tns-definitions-1.4.0.tgz
tar -xzkf tns-definitions-1.4.0.tgz --strip 1 -C node_modules/tns-core-modules 2>/dev/null

# Build TypeScript
grunt

# Build and run {N} app
unamestr=`uname`
if [[ "$unamestr" == "Darwin" ]]; then
    tns run ios --emulator
else
    tns run android --emulator
fi

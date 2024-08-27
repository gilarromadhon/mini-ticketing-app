## Setup Intstructions

First, you will need to install the package project

To install project, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Steps to run emulator android

1. To run android emulator you must install Android Studio
2. Setting and the SDK on SDK manager Android Studio
3. Create emulator on AVD Manager Android Studio
4. Run the following command from the _root_ of your React Native project

### For Android

```bash
# using npm
npm run android 

# OR
npx react-native run-android
```

## An explanation of design choices and any challenges encountered

The first challenge I encountered was setting up React Native via CLI, it turned out to be more difficult than via Expo because I tried many times when running the project it always failed, but when I increased the emulator's memory quite a bit it was successful in running this project.

The second is that for QR, there is a problem when the Android emulator opens the camera and uses a MacBook camera, when I open it, my MacBook immediately restarts. I don't know if my macbook is not strong enough or because the latest OS crashes (OS Sonoma M1). What I read on the forums is that you have to downgrade the OS beforehand, but this will take a lot of time


## Login Username Password
For Login using 
username : admin@mail.com
password: admin123

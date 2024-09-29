This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 0: Install Pacakges

Install NPM Dependencies
The first step is to install all JavaScript dependencies using npm or Yarn. This step ensures that all required packages are installed for the project.

Open your terminal.
Navigate to the root directory of the React Native project.
Run one of the following commands to install the required packages:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

Install CocoaPods (iOS-specific)
If you are working on a macOS system and you need to run the project on iOS, you will also need to install the native dependencies via CocoaPods. CocoaPods is a dependency manager for native iOS projects.

```bash
cd ios && pod install && cd ..
```


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

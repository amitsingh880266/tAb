# tAb

A React Native onboarding demo app with a multi-step onboarding flow, splash screen, photo upload/selfie, and profile completion screens.

## Features

- Splash screen (Android/iOS)
- Multi-step onboarding flow using React Navigation
- Welcome screen with custom UI
- Photo screen: upload from gallery or take a selfie
- Preview and confirm photo
- Profile completion screen
- Clean, modern UI/UX

## Tech Stack

- React Native 0.70.10
- React 18.1.0
- @react-navigation/native, @react-navigation/stack
- react-native-image-picker

## Getting Started

### Prerequisites

- Node.js >= 14
- Yarn or npm
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

```sh
# Install dependencies
yarn install
# or
npm install
```

### iOS Setup

```sh
cd ios
pod install
cd ..
```

### Running the App

```sh
# Start Metro bundler
yarn start
# or
npm start

# In a new terminal, run on Android
yarn android
# or
npm run android

# Or run on iOS
yarn ios
# or
npm run ios
```

## Project Structure

```
App.tsx                # Main entry, navigation stack
src/screens/           # Onboarding and feature screens
  SplashScreen.tsx
  WelcomeScreen.tsx
  PhotoScreen.tsx
  PreviewScreen.tsx
  ProfileScreen.tsx
  CompletionScreen.tsx
assets/                # Images, icons, etc.
```

## Customization

- Update onboarding steps/screens in `App.tsx` and `src/screens/`
- Replace images in `assets/`

## License

MIT

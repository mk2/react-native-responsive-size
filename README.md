# react-native-simple-responsive-size

**Simple utility library for calclating sizes against each smartphone screen sizes. It helps resizing views with keeping aspect ratio.**

## Usage

### Add this library and peer dependencies.

NOTE: This library requires [lekzd's react-native-iphone-x-helper](https://github.com/lekzd/react-native-iphone-x-helper.git) because of getting the accurate safe area height.

```sh
yarn add react-native-simple-responsive-size
yarn add react-native-iphone-x-helper@https://github.com/lekzd/react-native-iphone-x-helper.git
```

### Use this library.

```jsx
import { View, StyleSheet } from "react-native";
import { ResponsiveSize } from "react-native-simple-responsive-size";

const Screen = () => {
  return <View style={styles.box} />;
};

const styles = StyleSheet.create({
  box: {
    width: ResponsiveSize(300),
    height: ResponsiveSize(300),
  },
});
```

## References

| Function              | Alias  | Description                  |
| --------------------- | ------ | ---------------------------- |
| ResponsiveSize        | RSize  | Return raw calclated result. |
| ResponsiveRoundedSize | RRSize | Return rounded result.       |
| ResponsiveTruncedSize | RTSize | Return trunced result.       |

## Examples

### App

This repository contains expo-based example app. For running example app, move to the `example-app` directory, and execute `yarn` and `yarn start`.

### Photos

| Android                                                       | iOS                                                       |
| ------------------------------------------------------------- | --------------------------------------------------------- |
| <img src="./docs/images/android-screenshot.png" width="128"/> | <img src="./docs/images/ios-screenshot.png" width="128"/> |

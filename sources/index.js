// @flow

import { createContext } from "react";
import { Dimensions } from "react-native";

const cache: { [number]: number } = {};

export function ResponsiveSize(
  size: number,
  direction: "horizontal" | "vertical",
  baseSize: ?number = 1170
): number {
  const { width: appWidth, height: appHeight } = Dimensions.get("window");
  return cache[size];
}

// @flow

import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

// iPhone12/13 size
const BASE_SIZE = {
  horizontal: 390,
  vertical: 844,
};

const cache: { [string]: number } = {};

export function ResponsiveSize(
  size: number,
  cacheKey?: string,
  direction: "horizontal" | "vertical" = "horizontal",
  customBaseSize?: number
): number {
  if (cacheKey && cache[cacheKey]) {
    return cache[cacheKey];
  }

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const baseSize = customBaseSize ?? BASE_SIZE[direction];

  const offset = getStatusBarHeight(true);
  const targetSize =
    direction === "horizontal" ? screenWidth : screenHeight - offset;

  const roundSize = Math.round(size);
  const caclulatedSize = size * (targetSize / baseSize);
  if (cacheKey) {
    cache[cacheKey] = caclulatedSize;
  }

  return caclulatedSize;
}

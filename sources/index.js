/**
 * React Native Simple Responsive Size
 *
 * @flow
 */

import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

type BaseSize = {
  horizontal: number,
  vertical: number,
};

// iPhone12/13 size
const BASE_SIZE: BaseSize = {
  horizontal: 390,
  vertical: 844,
};

export const changeBaseSize = (changedSize: {
  horizontal?: number,
  vertical?: number,
}) => {
  if (changedSize.horizontal) {
    BASE_SIZE.horizontal = changedSize.horizontal;
  }
  if (changedSize.vertical) {
    BASE_SIZE.vertical = changedSize.vertical;
  }
};

export const baseSize: () => BaseSize = () => ({ ...BASE_SIZE });
export const halfBaseSize: () => BaseSize = () => ({
  horizontal: BASE_SIZE.horizontal / 2,
  vertical: BASE_SIZE.vertical / 2,
});

type ResponsiveSizeFunciton = (
  size: number,
  direction?: "horizontal" | "vertical",
  customBaseSize?: number
) => number;

export const ResponsiveSize: ResponsiveSizeFunciton = (
  size: number,
  direction?: "horizontal" | "vertical" = "horizontal",
  customBaseSize?: number
) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const baseSize = customBaseSize ?? BASE_SIZE[direction];

  const offset = getStatusBarHeight(true);
  const targetSize =
    direction === "horizontal" ? screenWidth : screenHeight - offset;

  const roundSize = Math.round(size);
  const caclulatedSize = size * (targetSize / baseSize);

  return caclulatedSize;
};

export const RSize = ResponsiveSize;

export const ResponsiveRoundedSize: ResponsiveSizeFunciton = (
  size: number,
  direction?: "horizontal" | "vertical",
  customBaseSize?: number
) => {
  return Math.round(ResponsiveSize(size, direction, customBaseSize));
};

export const RRSize = ResponsiveRoundedSize;

export const ResponsiveTruncedSize: ResponsiveSizeFunciton = (
  size: number,
  direction?: "horizontal" | "vertical",
  customBaseSize?: number
) => {
  return Math.trunc(ResponsiveSize(size, direction, customBaseSize));
};

export const RTSize = ResponsiveTruncedSize;

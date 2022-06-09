// @flow
import {
  ResponsiveRoundedSize,
  ResponsiveSize,
  ResponsiveTruncedSize,
} from "../sources";

import { Dimensions } from "react-native";

const mockDimensionsGet = jest.spyOn(Dimensions, "get");

describe("ResponsiveSize", () => {
  beforeEach(() => {
    mockDimensionsGet.mockReturnValue({
      width: 390,
      height: 844,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([
    [300, 300],
    [400, 400],
  ])("on default screen size: %s to %s", (baseSize, targetSize) => {
    expect(ResponsiveSize(baseSize)).toBe(targetSize);
    expect(ResponsiveRoundedSize(baseSize)).toBe(targetSize);
    expect(ResponsiveTruncedSize(baseSize)).toBe(targetSize);
  });

  it.each([
    [300, 154, 153],
    [400, 205, 205],
  ])(
    "on small screen size: %s to %s",
    (baseSize, roundedTargetSize, truncedTargetSize) => {
      mockDimensionsGet.mockReturnValue({ width: 200, height: 844 });
      expect(Math.round(ResponsiveSize(baseSize))).toBe(roundedTargetSize);
      expect(ResponsiveRoundedSize(baseSize)).toBe(roundedTargetSize);
      expect(ResponsiveTruncedSize(baseSize)).toBe(truncedTargetSize);
    }
  );

  it.each([
    [300, 462, 461],
    [400, 615, 615],
  ])(
    "on big screen size: %s to %s",
    (baseSize, roundedTargetSize, truncedTargetSize) => {
      mockDimensionsGet.mockReturnValue({ width: 600, height: 844 });
      expect(Math.round(ResponsiveSize(baseSize))).toBe(roundedTargetSize);
      expect(ResponsiveRoundedSize(baseSize)).toBe(roundedTargetSize);
      expect(ResponsiveTruncedSize(baseSize)).toBe(truncedTargetSize);
    }
  );
});

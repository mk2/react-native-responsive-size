// @flow
import {
  changeBaseSize,
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
  ])("on default screen size: %s to %s", (size, targetSize) => {
    expect(ResponsiveSize(size)).toBe(targetSize);
    expect(ResponsiveRoundedSize(size)).toBe(targetSize);
    expect(ResponsiveTruncedSize(size)).toBe(targetSize);
  });

  it.each([
    [300, 154, 153],
    [400, 205, 205],
  ])(
    "on small screen size: %s to %s",
    (size, roundedTargetSize, truncedTargetSize) => {
      mockDimensionsGet.mockReturnValue({ width: 200, height: 844 });
      expect(Math.round(ResponsiveSize(size))).toBe(roundedTargetSize);
      expect(ResponsiveRoundedSize(size)).toBe(roundedTargetSize);
      expect(ResponsiveTruncedSize(size)).toBe(truncedTargetSize);
    }
  );

  it.each([
    [300, 462, 461],
    [400, 615, 615],
  ])(
    "on big screen size: %s to %s",
    (size, roundedTargetSize, truncedTargetSize) => {
      mockDimensionsGet.mockReturnValue({ width: 600, height: 844 });
      expect(Math.round(ResponsiveSize(size))).toBe(roundedTargetSize);
      expect(ResponsiveRoundedSize(size)).toBe(roundedTargetSize);
      expect(ResponsiveTruncedSize(size)).toBe(truncedTargetSize);
    }
  );

  it("changing base size effects calculation", () => {
    const originalBaseSize = { horizontal: 390, vertical: 844 };
    changeBaseSize({ horizontal: 780, vertical: 844 });
    const size = 300;
    const targetSize = 150;
    expect(Math.round(ResponsiveSize(size))).toBe(targetSize);
    expect(ResponsiveRoundedSize(size)).toBe(targetSize);
    expect(ResponsiveTruncedSize(size)).toBe(targetSize);
    changeBaseSize(originalBaseSize);
  });
});

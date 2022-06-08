/**
 * library type definitions for react-native-iphone-x-helper
 */

declare module "react-native-iphone-x-helper" {
  declare export function isIphoneX(): boolean;
  declare export function ifIphoneX<T, U>(iphoneXVal: T, regularVal: U): T | U;
  declare export function ifIphoneX<T>(iphoneXVal: T): T;
  declare export function getStatusBarHeight(safe?: boolean): number;
  declare export function getBottomSpace(): number;
}

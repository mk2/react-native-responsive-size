declare type BaseSize = {
  horizontal: number;
  vertical: number;
};

export const changeBaseSize: (changeSize: Partial<BaseSize>) => void;

declare type ResponsiveSizeFunciton = (
  size: number,
  direction?: "horizontal" | "vertical",
  customBaseSize?: number
) => number;

export const ResponsiveSize: ResponsiveSizeFunciton;
export const RSize: ResponsiveSizeFunciton;
export const RRSize: ResponsiveSizeFunciton;
export const RTSize: ResponsiveSizeFunciton;

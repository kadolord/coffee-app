export const SIZES = ["small", "medium", "large"] as const;
export const sizeLabels = {
  small: "S",
  medium: "M",
  large: "L",
};

export type SizeType = (typeof SIZES)[number]; // "small" | "medium" | "large"

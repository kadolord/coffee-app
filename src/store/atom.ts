import { Session } from "@supabase/supabase-js";
import { atomWithStorage } from "jotai/utils";
import { CartItem } from "../types";
import { SizeType } from "../utils/CartUtils";

// Define cart atom with type safety
export const sessionAtom = atomWithStorage<Session | null>("session", null);
export const loadingAtom = atomWithStorage<boolean>("loading", true);
// Define cart atom with type safety
export const cartAtom = atomWithStorage<CartItem[]>("cart", []);
export const selectedSizeAtom = atomWithStorage<SizeType>(
  "selectedSize",
  "small"
);

import { Poppins } from "next/font/google";
import { GeistSans } from "geist/font/sans";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const geist = GeistSans;

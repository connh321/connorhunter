import type { Metadata } from "next";
import { ReactElement } from "react";
import { Lato } from "next/font/google";
import ThemeRegistry from "@/theme/theme";

/**
 * Metadata for the application, used by Next.js for SEO and page info.
 */
export const metadata: Metadata = {
  title: "Connor Hunter | Software Engineer",
  description: "",
};

/**
 * Load the Lato font from Google Fonts.
 */
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

/**
 * Props for the RootLayout component.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * RootLayout component wraps the entire application.
 *
 * - Applies the Lato font to the whole app.
 * - Wraps children with ThemeRegistry for Material-UI theming.
 *
 * @param {Props} props - Component props.
 * @param {React.ReactNode} props.children - The children elements to render inside the layout.
 * @returns {ReactElement} The root HTML structure for the application.
 */
const RootLayout = ({ children }: Props): ReactElement => {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Lab",
};

export default function LabLayout({ children }: LayoutProps<"/lab">) {
  return children;
}

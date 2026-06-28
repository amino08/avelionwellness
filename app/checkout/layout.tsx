import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Checkout",
  description:
    "Review your Avelion Wellness cart and complete checkout.",
  path: "/checkout",
});

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

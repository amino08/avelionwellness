import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { parsePrice } from "@/lib/cart";

interface CheckoutItemPayload {
  productId: string;
  name: string;
  strength: string;
  price: string;
  quantity: number;
  mode: "purchase" | "inquiry";
}

interface CheckoutRequestBody {
  items?: CheckoutItemPayload[];
}

export async function POST(request: Request) {
  let body: CheckoutRequestBody;

  try {
    body = (await request.json()) as CheckoutRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const items = body.items ?? [];

  if (items.length === 0) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
  }

  const successUrl = `${SITE.url}/checkout/success`;
  const cancelUrl = `${SITE.url}/checkout/cancel`;
  const purchaseItems = items.filter((item) => item.mode === "purchase");
  const orderItems = items.filter((item) => item.mode !== "purchase");
  const purchaseTotal = purchaseItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0,
  );

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    if (purchaseItems.length > 0) {
      return NextResponse.json(
        {
          mode: "placeholder",
          requiresStripe: true,
          message:
            "Stripe is not configured. Set STRIPE_SECRET_KEY to enable payment checkout.",
          successUrl,
          cancelUrl,
          purchaseTotal,
          orderItemCount: orderItems.reduce(
            (sum, item) => sum + item.quantity,
            0,
          ),
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      mode: "order",
      message: "Order received.",
      successUrl,
      cancelUrl,
      orderItemCount: orderItems.reduce((sum, item) => sum + item.quantity, 0),
    });
  }

  if (purchaseItems.length === 0) {
    return NextResponse.json({
      mode: "order",
      message: "Order received.",
      successUrl,
      cancelUrl,
      orderItemCount: orderItems.reduce((sum, item) => sum + item.quantity, 0),
    });
  }

  // Structured for Stripe Checkout Session creation in a future increment.
  return NextResponse.json(
    {
      error:
        "Stripe Checkout session creation is not implemented yet. Configure keys and complete Stripe integration.",
      successUrl,
      cancelUrl,
      purchaseTotal,
      lineItems: purchaseItems.map((item) => ({
        productId: item.productId,
        name: item.name,
        strength: item.strength,
        unitAmount: parsePrice(item.price),
        quantity: item.quantity,
      })),
    },
    { status: 501 },
  );
}

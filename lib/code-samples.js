// Exported code for the "Checkout · Morrow Audio" frame, per target format.
// Each format: file tree (path → {lang, code}) + a map from canvas node → file + line matcher.
export const EXPORTS = {
  react: {
    label: 'React',
    root: 'checkout/',
    meta: ['6 files', 'TypeScript', 'CSS Modules', 'tokens → CSS vars'],
    files: {
      'CheckoutCard.tsx': { lang: 'tsx', code:
`import { useState } from "react";
import { LineItem } from "./components/LineItem";
import { SummaryRow } from "./components/SummaryRow";
import { DeliveryOption } from "./components/DeliveryOption";
import styles from "./CheckoutCard.module.css";
import type { CartItem } from "./types";

type Props = { items: CartItem[]; onContinue: () => void };

export function CheckoutCard({ items, onContinue }: Props) {
  const [delivery, setDelivery] = useState<"standard" | "express">("express");
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = delivery === "express" ? 12 : 0;
  const tax = subtotal * 0.08;

  return (
    <section className={styles.card} aria-labelledby="checkout-title">
      <header className={styles.header}>
        <h2 id="checkout-title">Checkout</h2>
        <span className={styles.step}>Step 2 of 3</span>
      </header>

      <ul className={styles.items}>
        {items.map((item) => <LineItem key={item.id} item={item} />)}
      </ul>

      <fieldset className={styles.delivery}>
        <legend>Delivery</legend>
        <DeliveryOption value="standard" label="Standard" hint="3–5 days" price="Free"
          checked={delivery === "standard"} onSelect={setDelivery} />
        <DeliveryOption value="express" label="Express" hint="1–2 days" price="$12.00"
          checked={delivery === "express"} onSelect={setDelivery} />
      </fieldset>

      <dl className={styles.summary}>
        <SummaryRow label="Subtotal" value={subtotal} />
        <SummaryRow label="Shipping" value={shipping} />
        <SummaryRow label="Tax" value={tax} />
        <SummaryRow label="Total" value={subtotal + shipping + tax} emphasis />
      </dl>

      <button className={styles.cta} onClick={onContinue}>
        Continue to payment
      </button>
    </section>
  );
}` },
      'CheckoutCard.module.css': { lang: 'css', code:
`/* Auto layout → flex. Gap / padding come from tokens. */
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);          /* Gap · 24 */
  padding: var(--space-6);      /* Padding · 32 */
  width: 100%;
  max-width: 440px;             /* Fill · max 440 */
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}
.header { display: flex; align-items: baseline; justify-content: space-between; }
.step { font: var(--text-caption); color: var(--ink-muted); }
.items { display: flex; flex-direction: column; gap: var(--space-4); }
.delivery { display: grid; gap: var(--space-2); border: 0; padding: 0; }
.summary { display: grid; gap: var(--space-2); padding-top: var(--space-4);
  border-top: 1px solid var(--border); }
.cta {
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--accent);
  color: var(--on-accent);
  font: var(--text-button);
}

@media (max-width: 480px) {    /* Mobile breakpoint */
  .card { padding: var(--space-5); border-radius: 0; border-inline: 0; }
}` },
      'components/LineItem.tsx': { lang: 'tsx', code:
`import { QuantityStepper } from "./QuantityStepper";
import { formatPrice } from "../format";
import type { CartItem } from "../types";

export function LineItem({ item }: { item: CartItem }) {
  return (
    <li className="line-item">
      <img src={item.image} alt="" width={64} height={64} />
      <div className="line-item__text">
        <p className="line-item__title">{item.title}</p>
        <p className="line-item__variant">{item.variant}</p>
      </div>
      <QuantityStepper value={item.qty} />
      <p className="line-item__price">{formatPrice(item.price * item.qty)}</p>
    </li>
  );
}` },
      'components/SummaryRow.tsx': { lang: 'tsx', code:
`import { formatPrice } from "../format";

type Props = { label: string; value: number; emphasis?: boolean };

export function SummaryRow({ label, value, emphasis }: Props) {
  return (
    <div className={emphasis ? "summary-row summary-row--total" : "summary-row"}>
      <dt>{label}</dt>
      <dd>{value === 0 ? "Free" : formatPrice(value)}</dd>
    </div>
  );
}` },
      'tokens.css': { lang: 'css', code:
`/* Generated from Inlu variables · collection "Morrow" · mode Light */
:root {
  --accent: #7c4dff;
  --on-accent: #ffffff;
  --surface: #ffffff;
  --ink: #15111f;
  --ink-muted: #6d6190;
  --border: #dce3ff;

  --space-2: 8px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;

  --radius-md: 12px;
  --radius-lg: 20px;

  --text-caption: 500 13px/1.4 "Inter", sans-serif;
  --text-button: 600 15px/1 "Inter", sans-serif;
}` },
      'types.ts': { lang: 'ts', code:
`export type CartItem = {
  id: string;
  title: string;      // "Aero Lite headphones"
  variant: string;    // "Violet · ANC"
  price: number;      // 128
  qty: number;
  image: string;
};` }
    },
    nodes: {
      card: ['CheckoutCard.module.css', /^\.card \{|^  (display: flex|flex-direction|gap: var\(--space-5\)|padding: var\(--space-6\)|max-width)/],
      lineitem: ['components/LineItem.tsx', /line-item|QuantityStepper|img src/],
      delivery: ['CheckoutCard.tsx', /DeliveryOption|fieldset|legend/],
      summary: ['CheckoutCard.tsx', /SummaryRow|<dl|<\/dl>/],
      cta: ['CheckoutCard.tsx', /<button|Continue to payment|<\/button>/],
      header: ['CheckoutCard.tsx', /<header|<h2|Step 2 of 3|<\/header>/]
    }
  },

  html: {
    label: 'HTML/CSS',
    root: 'checkout/',
    meta: ['4 files', 'semantic HTML', 'no framework', 'tokens → CSS vars'],
    files: {
      'index.html': { lang: 'html', code:
`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Checkout · Morrow Audio</title>
  <link rel="stylesheet" href="styles/tokens.css">
  <link rel="stylesheet" href="styles/checkout-card.css">
</head>
<body>
  <section class="checkout-card" aria-labelledby="checkout-title">
    <header class="checkout-card__header">
      <h2 id="checkout-title">Checkout</h2>
      <span class="checkout-card__step">Step 2 of 3</span>
    </header>

    <ul class="checkout-card__items">
      <li class="line-item">
        <img src="assets/aero-lite.webp" alt="" width="64" height="64">
        <p class="line-item__title">Aero Lite headphones <span>Violet · ANC</span></p>
        <p class="line-item__price">$128.00</p>
      </li>
      <li class="line-item">
        <img src="assets/travel-case.webp" alt="" width="64" height="64">
        <p class="line-item__title">Travel case <span>Ice blue</span></p>
        <p class="line-item__price">$42.00</p>
      </li>
    </ul>

    <fieldset class="delivery">
      <legend>Delivery</legend>
      <label><input type="radio" name="delivery"> Standard · 3–5 days <b>Free</b></label>
      <label><input type="radio" name="delivery" checked> Express · 1–2 days <b>$12.00</b></label>
    </fieldset>

    <dl class="summary">
      <div><dt>Subtotal</dt><dd>$170.00</dd></div>
      <div><dt>Shipping</dt><dd>$12.00</dd></div>
      <div><dt>Tax</dt><dd>$13.60</dd></div>
      <div class="summary__total"><dt>Total</dt><dd>$195.60</dd></div>
    </dl>

    <button class="checkout-card__cta">Continue to payment</button>
  </section>
</body>
</html>` },
      'styles/checkout-card.css': { lang: 'css', code:
`.checkout-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-6);
  max-width: 440px;
  margin: 48px auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  font-family: "Inter", sans-serif;
  color: var(--ink);
}
.checkout-card__header { display: flex; justify-content: space-between; }
.line-item { display: grid; grid-template-columns: 64px 1fr auto; gap: var(--space-4); }
.delivery { display: grid; gap: var(--space-2); border: 0; padding: 0; }
.summary { display: grid; gap: var(--space-2); border-top: 1px solid var(--border); }
.summary > div { display: flex; justify-content: space-between; }
.summary__total { font-weight: 700; }
.checkout-card__cta {
  height: 48px;
  border: 0;
  border-radius: var(--radius-md);
  background: var(--accent);
  color: var(--on-accent);
  font-weight: 600;
}
@media (max-width: 480px) {
  .checkout-card { margin: 0; border-radius: 0; padding: var(--space-5); }
}` },
      'styles/tokens.css': { lang: 'css', code:
`/* Generated from Inlu variables · collection "Morrow" */
:root {
  --accent: #7c4dff;
  --on-accent: #ffffff;
  --surface: #ffffff;
  --ink: #15111f;
  --border: #dce3ff;
  --space-2: 8px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --radius-md: 12px;
  --radius-lg: 20px;
}
@media (prefers-color-scheme: dark) {  /* mode "Dark" */
  :root { --surface: #1c1a24; --ink: #f3f1f8; --border: #2e2b38; }
}` },
      'assets/': { lang: 'txt', code:
`aero-lite.webp   128×128 · 9 KB
travel-case.webp        128×128 · 7 KB

Images are exported at 2× from the fills used in the frame.` }
    },
    nodes: {
      card: ['styles/checkout-card.css', /^\.checkout-card \{|^  (display: flex|flex-direction|gap: var\(--space-5\)|padding: var\(--space-6\)|max-width)/],
      lineitem: ['index.html', /line-item/],
      delivery: ['index.html', /delivery|legend|radio/],
      summary: ['index.html', /summary|<dt>/],
      cta: ['index.html', /checkout-card__cta/],
      header: ['index.html', /checkout-card__header|<h2|Step 2 of 3|<\/header>/]
    }
  },

  swiftui: {
    label: 'SwiftUI',
    root: 'Checkout/',
    meta: ['4 files', 'iOS 17+', 'VStack / HStack', 'tokens → Swift enum'],
    files: {
      'CheckoutCardView.swift': { lang: 'swift', code:
`import SwiftUI

struct CheckoutCardView: View {
    let items: [CartItem]
    @State private var delivery: Delivery = .express
    var onContinue: () -> Void = {}

    private var subtotal: Decimal { items.reduce(0) { $0 + $1.price * Decimal($1.qty) } }

    var body: some View {
        VStack(alignment: .leading, spacing: Tokens.Space.s5) {   // Gap · 24
            HStack(alignment: .firstTextBaseline) {
                Text("Checkout").font(Tokens.Font.title)
                Spacer()
                Text("Step 2 of 3").font(Tokens.Font.caption)
                    .foregroundStyle(Tokens.Color.inkMuted)
            }

            ForEach(items) { item in
                LineItemRow(item: item)
            }

            DeliveryPicker(selection: $delivery)

            VStack(spacing: Tokens.Space.s2) {
                SummaryRow(label: "Subtotal", value: subtotal)
                SummaryRow(label: "Shipping", value: delivery.price)
                SummaryRow(label: "Total", value: subtotal + delivery.price, emphasis: true)
            }

            Button("Continue to payment", action: onContinue)
                .buttonStyle(.accentFilled)
                .frame(maxWidth: .infinity, minHeight: 48)
        }
        .padding(Tokens.Space.s6)                                // Padding · 32
        .frame(maxWidth: 440)
        .background(Tokens.Color.surface,
                    in: RoundedRectangle(cornerRadius: Tokens.Radius.lg))
    }
}

#Preview { CheckoutCardView(items: .sample) }` },
      'LineItemRow.swift': { lang: 'swift', code:
`import SwiftUI

struct LineItemRow: View {
    let item: CartItem

    var body: some View {
        HStack(spacing: Tokens.Space.s4) {
            Image(item.image)
                .resizable()
                .frame(width: 64, height: 64)
                .clipShape(RoundedRectangle(cornerRadius: Tokens.Radius.md))
            VStack(alignment: .leading) {
                Text(item.title).font(Tokens.Font.body.weight(.semibold))
                Text(item.variant).font(Tokens.Font.caption)
            }
            Spacer()
            QuantityStepper(value: item.qty)
            Text(item.total, format: .currency(code: "USD"))
        }
    }
}` },
      'SummaryRow.swift': { lang: 'swift', code:
`import SwiftUI

struct SummaryRow: View {
    let label: String
    let value: Decimal
    var emphasis = false

    var body: some View {
        HStack {
            Text(label)
            Spacer()
            Text(value == 0 ? "Free" : value.formatted(.currency(code: "USD")))
        }
        .font(emphasis ? Tokens.Font.body.bold() : Tokens.Font.body)
    }
}` },
      'Tokens.swift': { lang: 'swift', code:
`import SwiftUI

// Generated from Inlu variables · collection "Morrow"
enum Tokens {
    enum Color {
        static let accent = SwiftUI.Color(hex: 0x7C4DFF)
        static let surface = SwiftUI.Color("Surface")   // Light / Dark modes
        static let ink = SwiftUI.Color("Ink")
        static let inkMuted = SwiftUI.Color("InkMuted")
    }
    enum Space {
        static let s2: CGFloat = 8
        static let s4: CGFloat = 16
        static let s5: CGFloat = 24
        static let s6: CGFloat = 32
    }
    enum Radius {
        static let md: CGFloat = 12
        static let lg: CGFloat = 20
    }
    enum Font {
        static let title = SwiftUI.Font.system(size: 22, weight: .bold)
        static let body = SwiftUI.Font.system(size: 15)
        static let caption = SwiftUI.Font.system(size: 13, weight: .medium)
    }
}` }
    },
    nodes: {
      card: ['CheckoutCardView.swift', /VStack\(alignment: \.leading, spacing|\.padding\(Tokens|\.frame\(maxWidth: 440\)|\.background/],
      lineitem: ['LineItemRow.swift', /HStack|Image|QuantityStepper/],
      delivery: ['CheckoutCardView.swift', /DeliveryPicker|delivery/],
      summary: ['CheckoutCardView.swift', /SummaryRow/],
      cta: ['CheckoutCardView.swift', /Button|buttonStyle|minHeight: 48/],
      header: ['CheckoutCardView.swift', /Text\("Checkout"\)|Step 2 of 3|firstTextBaseline/]
    }
  },

  flutter: {
    label: 'Flutter',
    root: 'lib/checkout/',
    meta: ['4 files', 'Dart 3', 'Column / Row', 'tokens → ThemeExtension'],
    files: {
      'checkout_card.dart': { lang: 'dart', code:
`import 'package:flutter/material.dart';
import 'line_item_tile.dart';
import 'summary_row.dart';
import 'tokens.dart';

class CheckoutCard extends StatefulWidget {
  const CheckoutCard({super.key, required this.items, required this.onContinue});
  final List<CartItem> items;
  final VoidCallback onContinue;

  @override
  State<CheckoutCard> createState() => _CheckoutCardState();
}

class _CheckoutCardState extends State<CheckoutCard> {
  Delivery delivery = Delivery.express;

  @override
  Widget build(BuildContext context) {
    final subtotal = widget.items.fold<double>(0, (s, i) => s + i.price * i.qty);
    return Container(
      constraints: const BoxConstraints(maxWidth: 440),
      padding: const EdgeInsets.all(Tokens.space6),          // Padding · 32
      decoration: BoxDecoration(
        color: Tokens.surface,
        borderRadius: BorderRadius.circular(Tokens.radiusLg),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        spacing: Tokens.space5,                               // Gap · 24
        children: [
          Row(children: [
            Text('Checkout', style: Tokens.title),
            const Spacer(),
            Text('Step 2 of 3', style: Tokens.caption),
          ]),
          for (final item in widget.items) LineItemTile(item: item),
          DeliveryPicker(value: delivery, onChanged: (d) => setState(() => delivery = d)),
          SummaryRow(label: 'Subtotal', value: subtotal),
          SummaryRow(label: 'Shipping', value: delivery.price),
          SummaryRow(label: 'Total', value: subtotal + delivery.price, emphasis: true),
          FilledButton(
            onPressed: widget.onContinue,
            style: Tokens.accentButton,
            child: const Text('Continue to payment'),
          ),
        ],
      ),
    );
  }
}` },
      'line_item_tile.dart': { lang: 'dart', code:
`import 'package:flutter/material.dart';
import 'tokens.dart';

class LineItemTile extends StatelessWidget {
  const LineItemTile({super.key, required this.item});
  final CartItem item;

  @override
  Widget build(BuildContext context) {
    return Row(
      spacing: Tokens.space4,
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(Tokens.radiusMd),
          child: Image.asset(item.image, width: 64, height: 64),
        ),
        Expanded(child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [Text(item.title), Text(item.variant, style: Tokens.caption)],
        )),
        QuantityStepper(value: item.qty),
        Text(formatPrice(item.total)),
      ],
    );
  }
}` },
      'summary_row.dart': { lang: 'dart', code:
`import 'package:flutter/material.dart';
import 'tokens.dart';

class SummaryRow extends StatelessWidget {
  const SummaryRow({super.key, required this.label, required this.value, this.emphasis = false});
  final String label;
  final double value;
  final bool emphasis;

  @override
  Widget build(BuildContext context) {
    final style = emphasis ? Tokens.bodyBold : Tokens.body;
    return Row(children: [
      Text(label, style: style),
      const Spacer(),
      Text(value == 0 ? 'Free' : formatPrice(value), style: style),
    ]);
  }
}` },
      'tokens.dart': { lang: 'dart', code:
`import 'package:flutter/material.dart';

// Generated from Inlu variables · collection "Morrow"
abstract final class Tokens {
  static const accent = Color(0xFF7C4DFF);
  static const surface = Color(0xFFFFFFFF);
  static const ink = Color(0xFF15111F);
  static const inkMuted = Color(0xFF6D6190);

  static const space2 = 8.0;
  static const space4 = 16.0;
  static const space5 = 24.0;
  static const space6 = 32.0;

  static const radiusMd = 12.0;
  static const radiusLg = 20.0;

  static const title = TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: ink);
  static const body = TextStyle(fontSize: 15, color: ink);
  static const bodyBold = TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: ink);
  static const caption = TextStyle(fontSize: 13, color: inkMuted);
}` }
    },
    nodes: {
      card: ['checkout_card.dart', /Container\(|constraints:|padding: const EdgeInsets|spacing: Tokens\.space5|BoxDecoration/],
      lineitem: ['line_item_tile.dart', /Row\(|ClipRRect|QuantityStepper|Image\.asset/],
      delivery: ['checkout_card.dart', /DeliveryPicker|Delivery\.express/],
      summary: ['checkout_card.dart', /SummaryRow/],
      cta: ['checkout_card.dart', /FilledButton|onPressed|accentButton|Continue to payment/],
      header: ['checkout_card.dart', /Text\('Checkout'|Step 2 of 3|Row\(children/]
    }
  }
};

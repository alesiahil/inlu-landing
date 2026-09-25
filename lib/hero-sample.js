/* Ported from Inlu 3.0: highlighter + Booking card sample used by the hero demo */
/* ---------- Tiny syntax highlighter ---------- */
export const Hl = (function () {
  const KW = new Set(['export','function','return','const','let','import','from','struct','var','some','body','class','extends','final','override','Widget','build','this','new','true','false','null','in','let','private','static','required','super']);
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const re = /(\/\/.*$|\/\*.*?\*\/|<!--.*?-->)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(<\/?[A-Za-z][\w.]*)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][\w-]*)(?==)|(\b[A-Za-z_]\w*\b)/gm;
  function line(src) {
    let out = '', last = 0, m;
    re.lastIndex = 0;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      const [t, c, s, tag, n, attr, word] = m;
      if (c) out += `<span class="tk-c">${esc(t)}</span>`;
      else if (s) out += `<span class="tk-s">${esc(t)}</span>`;
      else if (tag) out += `<span class="tk-t">${esc(t)}</span>`;
      else if (n) out += `<span class="tk-n">${t}</span>`;
      else if (attr) out += `<span class="tk-a">${esc(t)}</span>`;
      else if (word && KW.has(word)) out += `<span class="tk-k">${t}</span>`;
      else if (word && /^[A-Z]/.test(word)) out += `<span class="tk-t">${t}</span>`;
      else out += esc(t);
      last = m.index + t.length;
      if (t.length === 0) re.lastIndex++;
    }
    return out + esc(src.slice(last));
  }
  // lines: [[text, nodeId?], ...]
  function render(el, lines, opts = {}) {
    el.innerHTML = lines.map(([t, n], i) =>
      `<div class="code-line${opts.animate ? ' new' : ''}" data-node="${n || ''}" style="${opts.animate ? `animation-delay:${i * 25}ms` : ''}"><span class="ln">${i + 1}</span><span>${line(t)}</span></div>`
    ).join('');
  }
  function highlight(el, node) {
    el.querySelectorAll('.code-line').forEach(l => l.classList.toggle('hl', !!node && l.dataset.node === node));
    if (node) {
      const first = el.querySelector(`.code-line[data-node="${node}"]`);
      if (first) {
        const body = el.closest('.code-body') || el;
        const top = first.offsetTop - body.clientHeight / 3;
        body.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    }
  }
  return { render, highlight, line };
})();

/* ---------- Sample: BookingCard exported to four targets ---------- */
export const SAMPLE_CODE = {
  react: {
    file: 'BookingCard.tsx',
    ds: [
      ['import { Card, Stack, Row, Text, Image, Price, Button } from "@acme/ui";'],
      [''],
      ['export function BookingCard({ stay }: { stay: Stay }) {'],
      ['  return (', ''],
      ['    <Card padding={20} gap={16} radius={20}>', 'card'],
      ['      <Image src={stay.photo} ratio="16:10" radius={14} />', 'image'],
      ['      <Stack gap={4}>', 'title'],
      ['        <Text variant="title">{stay.name}</Text>', 'title'],
      ['        <Text variant="muted">3 nights · 2 guests</Text>', 'meta'],
      ['      </Stack>', 'title'],
      ['      <Row justify="space-between" align="center">', 'price'],
      ['        <Price value={stay.total} currency="EUR" />', 'price'],
      ['        <Button variant="primary" onPress={onReserve}>', 'button'],
      ['          Reserve', 'button'],
      ['        </Button>', 'button'],
      ['      </Row>', 'price'],
      ['    </Card>', 'card'],
      ['  );'],
      ['}'],
    ],
    raw: [
      ['export function BookingCard({ stay }) {'],
      ['  return ('],
      ['    <div style={{ display: "flex", flexDirection: "column",', 'card'],
      ['      gap: 16, padding: 20, borderRadius: 20, background: "#fff" }}>', 'card'],
      ['      <img src={stay.photo} style={{ aspectRatio: "16/10",', 'image'],
      ['        borderRadius: 14, objectFit: "cover", width: "100%" }} />', 'image'],
      ['      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>', 'title'],
      ['        <h3 style={{ font: "600 20px/1.2 Inter" }}>{stay.name}</h3>', 'title'],
      ['        <p style={{ color: "#6E6D72" }}>3 nights · 2 guests</p>', 'meta'],
      ['      </div>', 'title'],
      ['      <div style={{ display: "flex", justifyContent: "space-between" }}>', 'price'],
      ['        <strong style={{ fontSize: 22 }}>€{stay.total}</strong>', 'price'],
      ['        <button style={{ background: "#0F0F12", color: "#fff",', 'button'],
      ['          padding: "12px 20px", borderRadius: 999 }}>Reserve</button>', 'button'],
      ['      </div>', 'price'],
      ['    </div>', 'card'],
      ['  );'],
      ['}'],
    ],
  },
  swift: {
    file: 'BookingCard.swift',
    ds: [
      ['import SwiftUI'],
      [''],
      ['struct BookingCard: View {'],
      ['  let stay: Stay'],
      ['  var body: some View {'],
      ['    VStack(alignment: .leading, spacing: 16) {', 'card'],
      ['      AsyncImage(url: stay.photo)', 'image'],
      ['        .aspectRatio(16/10, contentMode: .fill)', 'image'],
      ['        .clipShape(RoundedRectangle(cornerRadius: 14))', 'image'],
      ['      VStack(alignment: .leading, spacing: 4) {', 'title'],
      ['        Text(stay.name).font(.acme.title)', 'title'],
      ['        Text("3 nights · 2 guests").foregroundStyle(.acme.muted)', 'meta'],
      ['      }', 'title'],
      ['      HStack {', 'price'],
      ['        PriceLabel(stay.total, currency: "EUR")', 'price'],
      ['        Spacer()', 'price'],
      ['        Button("Reserve", action: onReserve)', 'button'],
      ['          .buttonStyle(.acmePrimary)', 'button'],
      ['      }', 'price'],
      ['    }', 'card'],
      ['    .padding(20).background(.white, in: .rect(cornerRadius: 20))', 'card'],
      ['  }'],
      ['}'],
    ],
  },
  flutter: {
    file: 'booking_card.dart',
    ds: [
      ["import 'package:acme_ui/acme_ui.dart';"],
      [''],
      ['class BookingCard extends StatelessWidget {'],
      ['  const BookingCard({super.key, required this.stay});'],
      ['  final Stay stay;'],
      [''],
      ['  @override'],
      ['  Widget build(BuildContext context) {'],
      ['    return AcmeCard(', 'card'],
      ['      padding: 20, radius: 20, gap: 16,', 'card'],
      ['      children: ['],
      ['        AcmeImage(stay.photo, aspectRatio: 16 / 10, radius: 14),', 'image'],
      ['        Column(crossAxisAlignment: CrossAxisAlignment.start, children: [', 'title'],
      ['          Text(stay.name, style: AcmeText.title),', 'title'],
      ["          Text('3 nights · 2 guests', style: AcmeText.muted),", 'meta'],
      ['        ]),', 'title'],
      ['        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [', 'price'],
      ["          AcmePrice(stay.total, currency: 'EUR'),", 'price'],
      ["          AcmeButton.primary(label: 'Reserve', onTap: onReserve),", 'button'],
      ['        ]),', 'price'],
      ['      ],'],
      ['    );', 'card'],
      ['  }'],
      ['}'],
    ],
  },
  html: {
    file: 'booking-card.html',
    ds: [
      ['<article class="card">', 'card'],
      ['  <img class="card__img" src="lapland.jpg" alt="" />', 'image'],
      ['  <div class="card__text">', 'title'],
      ['    <h3 class="t-title">Cabin in Lapland</h3>', 'title'],
      ['    <p class="t-muted">3 nights · 2 guests</p>', 'meta'],
      ['  </div>', 'title'],
      ['  <div class="card__row">', 'price'],
      ['    <strong class="price">€420</strong>', 'price'],
      ['    <button class="btn btn--primary">Reserve</button>', 'button'],
      ['  </div>', 'price'],
      ['</article>', 'card'],
      [''],
      ['<style>'],
      ['  .card { display: flex; flex-direction: column; gap: 16px;', 'card'],
      ['    padding: 20px; border-radius: 20px; background: var(--surface); }', 'card'],
      ['  .card__img { aspect-ratio: 16 / 10; border-radius: 14px; }', 'image'],
      ['  .card__text { display: flex; flex-direction: column; gap: 4px; }', 'title'],
      ['  .card__row { display: flex; justify-content: space-between; }', 'price'],
      ['</style>'],
    ],
  },
};
export const SAMPLE_LABELS = { react: 'React', swift: 'SwiftUI', flutter: 'Flutter', html: 'HTML/CSS' };

/* Shared markup for the Booking card design */
export const bookingCardHTML = function () {
  return `
  <div class="bk" data-node="card">
    <div class="bk-img" data-node="image"><div class="bk-sun"></div><div class="bk-hill h1"></div><div class="bk-hill h2"></div><div class="bk-cabin"></div></div>
    <div class="bk-text">
      <div class="bk-title" data-node="title">Cabin in Lapland</div>
      <div class="bk-meta" data-node="meta">3 nights · 2 guests</div>
    </div>
    <div class="bk-row">
      <div class="bk-price" data-node="price">€420</div>
      <div class="bk-btn" data-node="button">Reserve</div>
    </div>
  </div>`;
};

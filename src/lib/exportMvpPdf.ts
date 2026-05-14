import jsPDF from "jspdf";

interface FocoRow { area: string; por_que: string; como_fazer: string }
interface CronogramaItem {
  semana?: number;
  tarefa?: string;
  atividade?: string;
  passo_a_passo?: string[];
  criterio_sucesso?: string;
  custo_rs?: number;
}

interface PdfPayload {
  businessName?: string | null;
  profile: { name: string; range: string; tagline: string };
  score: number;
  veredito?: string;
  focoTabela: FocoRow[];
  cronograma: CronogramaItem[];
  lucratividade?: { pessimista?: number; realista?: number; otimista?: number };
}

// Brand palette
const NAVY: [number, number, number] = [10, 15, 28];          // bg
const NAVY_SOFT: [number, number, number] = [22, 30, 50];
const BLUE: [number, number, number] = [30, 64, 175];         // primary
const BLUE_LIGHT: [number, number, number] = [96, 165, 250];
const TEXT: [number, number, number] = [240, 244, 252];
const MUTED: [number, number, number] = [160, 174, 192];
const EMERALD: [number, number, number] = [16, 185, 129];
const AMBER: [number, number, number] = [245, 158, 11];

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 15;
const CONTENT_W = PAGE_W - MARGIN * 2;

export async function exportStructuredMvpPdf(data: PdfPayload, filename = "plano-mvp.pdf") {
  const pdf = new jsPDF("p", "mm", "a4");
  let cursor = MARGIN;
  let pageNumber = 1;

  const paintBackground = () => {
    pdf.setFillColor(...NAVY);
    pdf.rect(0, 0, PAGE_W, PAGE_H, "F");
    // subtle accent strip on the left
    pdf.setFillColor(...BLUE);
    pdf.rect(0, 0, 3, PAGE_H, "F");
  };

  const paintFooter = () => {
    pdf.setFontSize(8);
    pdf.setTextColor(...MUTED);
    pdf.setFont("helvetica", "normal");
    pdf.text("Focus · Plano de MVP gerado por IA", MARGIN, PAGE_H - 8);
    pdf.text(`Página ${pageNumber}`, PAGE_W - MARGIN, PAGE_H - 8, { align: "right" });
  };

  const newPage = () => {
    paintFooter();
    pdf.addPage();
    pageNumber += 1;
    paintBackground();
    cursor = MARGIN;
  };

  const ensureSpace = (h: number) => {
    if (cursor + h > PAGE_H - 18) newPage();
  };

  const writeWrapped = (
    text: string,
    opts: { size?: number; bold?: boolean; color?: [number, number, number]; lineHeight?: number; indent?: number; maxW?: number } = {},
  ) => {
    const size = opts.size ?? 10;
    const lh = opts.lineHeight ?? size * 0.45;
    pdf.setFont("helvetica", opts.bold ? "bold" : "normal");
    pdf.setFontSize(size);
    pdf.setTextColor(...(opts.color ?? TEXT));
    const indent = opts.indent ?? 0;
    const maxW = opts.maxW ?? CONTENT_W - indent;
    const lines = pdf.splitTextToSize(text, maxW);
    for (const line of lines) {
      ensureSpace(lh);
      pdf.text(line, MARGIN + indent, cursor + lh - 1);
      cursor += lh;
    }
  };

  // ============= PAGE 1: COVER =============
  paintBackground();

  // Top brand
  pdf.setFillColor(...BLUE);
  pdf.roundedRect(MARGIN, MARGIN, 26, 8, 2, 2, "F");
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(255, 255, 255);
  pdf.text("FOCUS", MARGIN + 13, MARGIN + 5.5, { align: "center" });

  pdf.setTextColor(...MUTED);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.text(new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }), PAGE_W - MARGIN, MARGIN + 5.5, { align: "right" });

  // Big title
  cursor = 70;
  pdf.setTextColor(...BLUE_LIGHT);
  pdf.setFontSize(11);
  pdf.setFont("helvetica", "bold");
  pdf.text("PLANO DE MVP PERSONALIZADO", MARGIN, cursor);
  cursor += 10;

  pdf.setTextColor(...TEXT);
  pdf.setFontSize(28);
  pdf.setFont("helvetica", "bold");
  const heroTitle = data.businessName ? data.businessName : "Seu negócio";
  const heroLines = pdf.splitTextToSize(heroTitle, CONTENT_W);
  for (const line of heroLines) {
    pdf.text(line, MARGIN, cursor);
    cursor += 11;
  }

  // Profile chip
  cursor += 8;
  pdf.setFillColor(...BLUE);
  pdf.roundedRect(MARGIN, cursor, 90, 11, 2.5, 2.5, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(11);
  pdf.setFont("helvetica", "bold");
  pdf.text(`Perfil ${data.profile.name}`, MARGIN + 4, cursor + 7.5);
  cursor += 16;

  // Score row
  pdf.setTextColor(...MUTED);
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Pontuação: ${data.score}/15  ·  Faixa do perfil: ${data.profile.range}`, MARGIN, cursor);
  cursor += 6;
  pdf.setTextColor(...BLUE_LIGHT);
  pdf.text(data.profile.tagline, MARGIN, cursor);
  cursor += 14;

  // Vereditc
  if (data.veredito) {
    pdf.setDrawColor(...BLUE);
    pdf.setLineWidth(0.6);
    pdf.line(MARGIN, cursor, MARGIN + 14, cursor);
    cursor += 6;
    writeWrapped("DIAGNÓSTICO", { size: 9, bold: true, color: BLUE_LIGHT, lineHeight: 5 });
    cursor += 1;
    writeWrapped(data.veredito, { size: 11, color: TEXT, lineHeight: 5.5 });
  }

  // ============= TABELA DE FOCO =============
  if (data.focoTabela.length > 0) {
    newPage();

    pdf.setTextColor(...BLUE_LIGHT);
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "bold");
    pdf.text("01 · ESTRATÉGIA", MARGIN, cursor + 4);
    cursor += 8;
    pdf.setTextColor(...TEXT);
    pdf.setFontSize(20);
    pdf.text("Onde focar e como fazer", MARGIN, cursor + 4);
    cursor += 12;

    // Table header
    const colX = [MARGIN, MARGIN + 38, MARGIN + 95];
    const colW = [36, 55, CONTENT_W - 36 - 55 - 2];

    const rowPaddingY = 4;

    const drawHeader = () => {
      ensureSpace(11);
      pdf.setFillColor(...BLUE);
      pdf.rect(MARGIN, cursor, CONTENT_W, 9, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text("ÁREA", colX[0] + 2, cursor + 6);
      pdf.text("POR QUE IMPORTA", colX[1] + 2, cursor + 6);
      pdf.text("COMO FAZER", colX[2] + 2, cursor + 6);
      cursor += 9;
    };
    drawHeader();

    data.focoTabela.forEach((row, i) => {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9.5);
      pdf.setTextColor(...TEXT);
      const l1 = pdf.splitTextToSize(row.area, colW[0] - 4);
      const l2 = pdf.splitTextToSize(row.por_que, colW[1] - 4);
      const l3 = pdf.splitTextToSize(row.como_fazer, colW[2] - 4);
      const lh = 4.4;
      const rowH = Math.max(l1.length, l2.length, l3.length) * lh + rowPaddingY * 2;

      if (cursor + rowH > PAGE_H - 18) {
        newPage();
        drawHeader();
      }

      // alternating row bg
      if (i % 2 === 0) {
        pdf.setFillColor(...NAVY_SOFT);
        pdf.rect(MARGIN, cursor, CONTENT_W, rowH, "F");
      }

      pdf.setTextColor(...BLUE_LIGHT);
      pdf.setFont("helvetica", "bold");
      l1.forEach((ln: string, k: number) => pdf.text(ln, colX[0] + 2, cursor + rowPaddingY + (k + 1) * lh - 1));

      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(...TEXT);
      l2.forEach((ln: string, k: number) => pdf.text(ln, colX[1] + 2, cursor + rowPaddingY + (k + 1) * lh - 1));
      l3.forEach((ln: string, k: number) => pdf.text(ln, colX[2] + 2, cursor + rowPaddingY + (k + 1) * lh - 1));

      cursor += rowH;
    });
  }

  // ============= CRONOGRAMA =============
  if (data.cronograma.length > 0) {
    newPage();

    pdf.setTextColor(...BLUE_LIGHT);
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "bold");
    pdf.text("02 · EXECUÇÃO", MARGIN, cursor + 4);
    cursor += 8;
    pdf.setTextColor(...TEXT);
    pdf.setFontSize(20);
    pdf.text("Cronograma semana a semana", MARGIN, cursor + 4);
    cursor += 14;

    data.cronograma.forEach((item, idx) => {
      const semana = item.semana || idx + 1;
      const titulo = item.tarefa || item.atividade || `Semana ${semana}`;
      const passos = item.passo_a_passo || [];

      // estimate space
      ensureSpace(20);

      // Week badge
      pdf.setFillColor(...BLUE);
      pdf.roundedRect(MARGIN, cursor, 24, 7.5, 1.5, 1.5, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text(`SEMANA ${semana}`, MARGIN + 12, cursor + 5.2, { align: "center" });

      // Title
      pdf.setTextColor(...TEXT);
      pdf.setFontSize(13);
      const tLines = pdf.splitTextToSize(titulo, CONTENT_W - 28);
      tLines.forEach((ln: string, k: number) => pdf.text(ln, MARGIN + 28, cursor + 5.5 + k * 5));
      cursor += Math.max(8, 5.5 + tLines.length * 5);

      // Passo a passo
      if (passos.length > 0) {
        cursor += 2;
        passos.forEach((p, pi) => {
          ensureSpace(8);
          pdf.setFillColor(...BLUE_LIGHT);
          pdf.circle(MARGIN + 4, cursor + 2.6, 2.2, "F");
          pdf.setTextColor(...NAVY);
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(7.5);
          pdf.text(String(pi + 1), MARGIN + 4, cursor + 3.6, { align: "center" });

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(10);
          pdf.setTextColor(...TEXT);
          const pLines = pdf.splitTextToSize(p, CONTENT_W - 12);
          pLines.forEach((ln: string, k: number) => {
            ensureSpace(4.6);
            pdf.text(ln, MARGIN + 10, cursor + 3.6 + k * 4.4);
          });
          cursor += Math.max(6, pLines.length * 4.4 + 1.5);
        });
      }

      if (item.criterio_sucesso) {
        ensureSpace(12);
        pdf.setFillColor(16, 185, 129, 0.12 as any); // not supported alpha — use solid
        pdf.setFillColor(20, 50, 40);
        const cLines = pdf.splitTextToSize(`Critério de sucesso: ${item.criterio_sucesso}`, CONTENT_W - 8);
        const boxH = cLines.length * 4.2 + 5;
        pdf.roundedRect(MARGIN, cursor, CONTENT_W, boxH, 1.5, 1.5, "F");
        pdf.setTextColor(...EMERALD);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9);
        pdf.text("✓", MARGIN + 3, cursor + 5);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(...TEXT);
        pdf.setFontSize(9);
        cLines.forEach((ln: string, k: number) => pdf.text(ln, MARGIN + 8, cursor + 4.5 + k * 4.2));
        cursor += boxH + 2;
      }

      if (typeof item.custo_rs === "number") {
        ensureSpace(6);
        pdf.setFont("helvetica", "italic");
        pdf.setFontSize(9);
        pdf.setTextColor(...AMBER);
        pdf.text(`Custo estimado: R$ ${item.custo_rs.toLocaleString("pt-BR")}`, MARGIN, cursor + 4);
        cursor += 6;
      }

      cursor += 6;
      // separator
      ensureSpace(2);
      pdf.setDrawColor(...NAVY_SOFT);
      pdf.setLineWidth(0.3);
      pdf.line(MARGIN, cursor, PAGE_W - MARGIN, cursor);
      cursor += 6;
    });
  }

  // ============= LUCRATIVIDADE =============
  if (data.lucratividade && (data.lucratividade.pessimista || data.lucratividade.realista || data.lucratividade.otimista)) {
    ensureSpace(60);

    pdf.setTextColor(...BLUE_LIGHT);
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "bold");
    pdf.text("03 · POTENCIAL", MARGIN, cursor + 4);
    cursor += 8;
    pdf.setTextColor(...TEXT);
    pdf.setFontSize(20);
    pdf.text("Projeção mensal", MARGIN, cursor + 4);
    cursor += 14;

    const cardW = (CONTENT_W - 8) / 3;
    const cardH = 28;
    const cards = [
      { label: "PESSIMISTA", value: data.lucratividade.pessimista || 0, color: NAVY_SOFT, accent: MUTED },
      { label: "REALISTA", value: data.lucratividade.realista || 0, color: BLUE, accent: BLUE_LIGHT },
      { label: "OTIMISTA", value: data.lucratividade.otimista || 0, color: NAVY_SOFT, accent: EMERALD },
    ];
    cards.forEach((c, i) => {
      const x = MARGIN + i * (cardW + 4);
      pdf.setFillColor(...c.color);
      pdf.roundedRect(x, cursor, cardW, cardH, 2, 2, "F");
      pdf.setTextColor(...c.accent);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8.5);
      pdf.text(c.label, x + cardW / 2, cursor + 7, { align: "center" });
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(15);
      pdf.text(`R$ ${c.value.toLocaleString("pt-BR")}`, x + cardW / 2, cursor + 19, { align: "center" });
    });
    cursor += cardH + 6;
  }

  paintFooter();
  pdf.save(filename);
}

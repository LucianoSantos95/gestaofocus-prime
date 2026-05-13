import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function exportMvpPdf(elementId: string, filename = "plano-mvp.pdf") {
  const el = document.getElementById(elementId);
  if (!el) throw new Error("Elemento não encontrado");

  const canvas = await html2canvas(el, {
    backgroundColor: "#0a0f1c",
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.92);
  const pdf = new jsPDF("p", "mm", "a4");
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();

  const imgW = pageW;
  const imgH = (canvas.height * imgW) / canvas.width;

  let heightLeft = imgH;
  let position = 0;

  pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
  heightLeft -= pageH;

  while (heightLeft > 0) {
    position = heightLeft - imgH;
    pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
    heightLeft -= pageH;
  }

  pdf.save(filename);
}

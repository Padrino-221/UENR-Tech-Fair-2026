import { jsPDF } from 'jspdf';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEDULE = [
  {
    session: 'Session One',
    time: '8:00 AM - 9:55 AM',
    items: [
      { time: '8:00 AM', title: 'Arrival of Students & Registration', desc: 'Check-in and registration for all participants' },
      { time: '9:00 AM', title: 'Opening Prayer', desc: 'Invocation and spiritual commencement' },
      { time: '9:05 AM', title: 'State of ITDS', desc: 'Overview of the IT & Decision Sciences Department' },
      { time: '9:20 AM', title: 'ITDS Documentary', desc: "A visual journey through the department's achievements" },
      { time: '9:30 AM', title: 'Welcome Address', desc: 'Official welcome to all attendees and guests' },
      { time: '9:40 AM', title: 'Introduction of Dignitaries', desc: 'Recognition of distinguished guests and officials' },
      { time: '9:50 AM', title: 'Purpose of Gathering', desc: 'Setting the context and objectives for UENR Tech Fair 2026', speaker: 'Prof. Peter Appiahene' },
    ],
  },
  {
    session: 'Session Two',
    time: '10:00 AM - 1:50 PM',
    items: [
      { time: '10:00 AM', title: 'Community Impact Documentary', desc: "Showcasing UENR's technological impact on local communities" },
      { time: '10:25 AM', title: 'Introduction of Chairman & Remarks', desc: "Chairman's address and official opening remarks", speaker: 'Prof. Elvis Asare-Bediako' },
      { time: '10:45 AM', title: 'Elevator Pitch Video of Students Projects', desc: 'Rapid-fire presentations showcasing student innovations' },
      { time: '10:55 AM', title: 'Address by 1st Keynote Speaker', desc: 'Insights on technology and innovation in Africa', speaker: '1st Keynote Speaker' },
      { time: '11:00 AM', title: 'Student Project Presentation', desc: 'Live demonstration of innovative student projects' },
      { time: '11:25 AM', title: 'Address by 2nd Keynote Speaker', desc: 'Visionary perspectives on the future of tech', speaker: '2nd Keynote Speaker' },
      { time: '11:35 AM', title: 'Poster Presentation', desc: 'Interactive poster sessions from student researchers' },
      { time: '11:50 AM', title: 'Interview Session', desc: 'Media interviews with key speakers and organizers' },
      { time: '12:00 PM', title: 'Partners Engagement & Networking', desc: 'Connect with industry partners and explore collaboration opportunities' },
      { time: '12:20 PM', title: 'Cultural Display', desc: 'Celebration of Ghanaian culture through performance and art' },
      { time: '12:50 PM', title: 'Student Project Presentation', desc: 'Additional student innovation demonstrations' },
      { time: '1:00 PM', title: 'Address by 3rd Keynote Speaker', desc: 'Transformative insights on technology and society', speaker: '3rd Keynote Speaker' },
      { time: '1:20 PM', title: 'Student Project Presentation', desc: 'Final round of student project showcases' },
      { time: '1:30 PM', title: 'Address by Special Guest of Honour', desc: 'Keynote address from our distinguished guest', speaker: 'Special Guest Speaker' },
      { time: '1:35 PM', title: 'Presentation by Partners', desc: 'Our valued partners share their vision and contributions' },
      { time: '1:40 PM', title: '1st Panel Discussion', desc: 'Expert panel on emerging technology trends' },
      { time: '1:45 PM', title: 'Musical Interlude', desc: 'Entertainment break with musical performance' },
      { time: '1:50 PM', title: '2nd Panel Discussion', desc: 'Continued expert dialogue on innovation and policy' },
    ],
  },
  {
    session: 'Closing Session',
    time: '2:00 PM Onwards',
    items: [
      { time: '2:00 PM', title: 'Presentation of Awards', desc: 'Recognition of outstanding students, projects, and contributors', tag: 'Awards Ceremony' },
      { time: '2:30 PM', title: 'Closing Remarks', desc: "Final thoughts and reflections on the day's proceedings" },
      { time: '2:45 PM', title: 'Vote of Thanks', desc: 'Appreciation to all sponsors, speakers, partners, and attendees' },
      { time: '3:00 PM', title: 'Closing Prayer', desc: 'Spiritual closing and benediction' },
      { time: '3:15 PM', title: 'University Anthem & Photoshoot', desc: 'Group photographs and celebration of UENR pride', tag: 'Photo Session' },
    ],
  },
];

const PDF_W = 210;
const PDF_H = 297;
const MARGIN = 20;
let y = 0;

const pdf = new jsPDF('p', 'mm', 'a4');
pdf.setFont('helvetica');

function addPage() {
  pdf.addPage();
  y = MARGIN;
}

function measureHeight(text, size, maxWidth) {
  const lines = pdf.splitTextToSize(text, maxWidth);
  return lines.length * size * 0.3528;
}

function wrappedText(text, size, maxWidth) {
  const lines = pdf.splitTextToSize(text, maxWidth);
  return lines;
}

function drawHeader() {
  pdf.setFillColor(7, 11, 115);
  pdf.rect(0, 0, PDF_W, 52, 'F');

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(22);
  pdf.setFont('helvetica', 'bold');
  pdf.text('UENR Tech Fair 2026', PDF_W / 2, 16, { align: 'center' });

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Program Schedule', PDF_W / 2, 26, { align: 'center' });

  pdf.setFontSize(9);
  pdf.setTextColor(200, 210, 240);
  pdf.text('Friday, June 26, 2026  |  UENR Main Auditorium  |  8:00 AM - 2:00 PM GMT', PDF_W / 2, 36, { align: 'center' });

  y = 62;
}

function drawSessionHeader(session) {
  pdf.setFillColor(7, 11, 115);
  pdf.roundedRect(MARGIN, y, PDF_W - 2 * MARGIN, 8, 1, 1, 'F');

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'bold');
  pdf.text(session.session.toUpperCase(), MARGIN + 5, y + 5.5);

  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(200, 210, 240);
  pdf.text(session.time, PDF_W - MARGIN - 5, y + 5.5, { align: 'right' });

  y += 13;
}

function drawItem(item, maxWidth) {
  const timeSize = 9;
  const titleSize = 10;
  const descSize = 8;
  const gap = 8;
  const timeCol = 22;

  let itemH = 0;
  const contentW = maxWidth - timeCol - gap;

  const titleLines = pdf.splitTextToSize(item.title, contentW);
  const descLines = item.desc ? pdf.splitTextToSize(item.desc, contentW) : [];
  const speakerLines = item.speaker ? pdf.splitTextToSize(item.speaker, contentW) : [];

  itemH += titleLines.length * titleSize * 0.3528 + 1;
  if (speakerLines.length) itemH += speakerLines.length * 9 * 0.3528 + 1;
  if (descLines.length) itemH += descLines.length * descSize * 0.3528 + 1;
  itemH += 4;

  if (y + itemH > PDF_H - MARGIN) addPage();

  const startY = y;

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(timeSize);
  pdf.setTextColor(7, 11, 115);
  pdf.text(item.time, MARGIN, y + timeSize * 0.3528);

  const tx = MARGIN + timeCol + gap;

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(titleSize);
  pdf.setTextColor(45, 55, 72);
  const titleRenderY = y + titleSize * 0.3528;
  pdf.text(titleLines, tx, titleRenderY);
  let cy = titleRenderY + titleLines.length * titleSize * 0.3528 + 1;

  if (item.speaker) {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    pdf.setTextColor(14, 209, 193);
    pdf.text(speakerLines, tx, cy);
    cy += speakerLines.length * 9 * 0.3528 + 1;
  }

  if (item.desc) {
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(descSize);
    pdf.setTextColor(108, 117, 125);
    pdf.text(descLines, tx, cy);
    cy += descLines.length * descSize * 0.3528 + 1;
  }

  if (item.tag) {
    const tagW = pdf.getTextWidth(item.tag) + 4;
    const tagH = 4.5;
    pdf.setFillColor(7, 11, 115);
    pdf.roundedRect(tx, cy + 1, tagW, tagH, 1, 1, 'F');
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(6.5);
    pdf.setTextColor(255, 255, 255);
    pdf.text(item.tag, tx + 2, cy + tagH - 0.5);
    cy += tagH + 3;
  }

  y = startY + itemH;
  pdf.setDrawColor(220, 220, 220);
  pdf.line(MARGIN, y, PDF_W - MARGIN, y);
  y += 3;
}

function drawFooter() {
  if (y + 20 > PDF_H - MARGIN) addPage();
  y = Math.max(y, PDF_H - MARGIN - 20);

  pdf.setDrawColor(200, 200, 200);
  pdf.line(MARGIN, y, PDF_W - MARGIN, y);
  y += 4;

  pdf.setFontSize(7);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(140, 140, 140);
  pdf.text('Organized by the Department of Information Technology & Decision Sciences (ITDS)', PDF_W / 2, y, { align: 'center' });
  pdf.text('University of Energy and Natural Resources, Fiapre, Sunyani, Ghana', PDF_W / 2, y + 4, { align: 'center' });
}

drawHeader();

for (const session of SCHEDULE) {
  drawSessionHeader(session);
  const maxWidth = PDF_W - 2 * MARGIN;
  for (const item of session.items) {
    drawItem(item, maxWidth);
  }
  y += 4;
}

drawFooter();

const outputDir = join(__dirname, '..', 'public', 'schedule');
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, 'UENR-Tech-Fair-2026-Program-Outline.pdf');
pdf.save(outputPath);
console.log('PDF generated:', outputPath);

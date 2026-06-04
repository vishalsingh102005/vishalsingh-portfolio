import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../public/resume.pdf');

const accent = rgb(0.39, 0.4, 0.95);
const dark = rgb(0.1, 0.1, 0.15);
const gray = rgb(0.35, 0.35, 0.4);
const lightGray = rgb(0.5, 0.5, 0.55);

async function generateResume() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const regular = await doc.embedFont(StandardFonts.Helvetica);

  let y = height - 50;

  const drawText = (text, x, size, font, color = dark, maxWidth = width - 100) => {
    page.drawText(text, { x, y, size, font, color, maxWidth });
    y -= size + 8;
  };

  const drawLine = () => {
    y -= 4;
    page.drawLine({
      start: { x: 50, y },
      end: { x: width - 50, y },
      thickness: 1,
      color: rgb(0.85, 0.85, 0.9),
    });
    y -= 16;
  };

  const sectionTitle = (title) => {
    y -= 8;
    page.drawText(title.toUpperCase(), {
      x: 50,
      y,
      size: 11,
      font: bold,
      color: accent,
    });
    y -= 20;
  };

  const wrapText = (text, x, size, font, color, lineHeight = 14, maxWidth = width - 100) => {
    const words = text.split(' ');
    let line = '';
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      const w = font.widthOfTextAtSize(test, size);
      if (w > maxWidth && line) {
        page.drawText(line, { x, y, size, font, color });
        y -= lineHeight;
        line = word;
      } else {
        line = test;
      }
    }
    if (line) {
      page.drawText(line, { x, y, size, font, color });
      y -= lineHeight;
    }
  };

  // Header
  page.drawText('VISHAL SINGH', { x: 50, y, size: 26, font: bold, color: dark });
  y -= 32;
  page.drawText('AI & Machine Learning Student | Python Developer', {
    x: 50,
    y,
    size: 12,
    font: regular,
    color: gray,
  });
  y -= 22;
  page.drawText('vishalbssingh2005@gmail.com  |  github.com/vishalsingh102005  |  LinkedIn', {
    x: 50,
    y,
    size: 9,
    font: regular,
    color: lightGray,
  });
  y -= 10;
  drawLine();

  sectionTitle('Professional Summary');
  wrapText(
    'Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. Passionate about Python development, AI technologies, web development, and building real-world software solutions. Seeking internship opportunities to apply skills and contribute to impactful projects.',
    50,
    10,
    regular,
    gray,
    14
  );

  sectionTitle('Education');
  page.drawText('B.E. Computer Science Engineering (AIML)', {
    x: 50,
    y,
    size: 11,
    font: bold,
    color: dark,
  });
  y -= 16;
  page.drawText('Lokmanya Tilak College of Engineering  |  2022 — Present', {
    x: 50,
    y,
    size: 10,
    font: regular,
    color: gray,
  });
  y -= 14;
  wrapText(
    'Specialization: Artificial Intelligence & Machine Learning',
    50,
    10,
    regular,
    lightGray,
    14
  );

  sectionTitle('Technical Skills');
  wrapText(
    'Programming: Python, C, C++, HTML, CSS, JavaScript',
    50,
    10,
    regular,
    gray,
    14
  );
  wrapText(
    'Frameworks & Tools: Django, SQLite, MySQL, Git, GitHub',
    50,
    10,
    regular,
    gray,
    14
  );
  wrapText(
    'Domains: Artificial Intelligence, Machine Learning, Web Development, Database Management',
    50,
    10,
    regular,
    gray,
    14
  );

  sectionTitle('Projects');

  const projects = [
    {
      title: 'Advanced AI-Based Online Exam Proctoring System (2026)',
      desc: 'AI-powered exam monitoring detecting suspicious activities using computer vision and ML.',
      tech: 'Python, AI, ML, Computer Vision, SQLite',
    },
    {
      title: 'FitMate – Gym Management System',
      desc: 'Web fitness platform with personalized plans and secure authentication.',
      tech: 'Django, Python, HTML, CSS, JavaScript, SQLite',
    },
    {
      title: 'Billing Management System',
      desc: 'Billing and invoice system for customers, products, and sales.',
      tech: 'Python, MySQL',
    },
    {
      title: 'Courier Management System',
      desc: 'Shipment tracking and delivery status management application.',
      tech: 'Python, Database Management',
    },
  ];

  for (const p of projects) {
    if (y < 80) break;
    page.drawText(p.title, { x: 50, y, size: 11, font: bold, color: dark });
    y -= 15;
    wrapText(p.desc, 50, 9, regular, gray, 13);
    page.drawText(p.tech, { x: 50, y, size: 8, font: regular, color: accent });
    y -= 18;
  }

  sectionTitle('Career Objective');
  wrapText(
    'Seeking internship opportunities to apply AI/ML and full-stack development skills, collaborate with industry professionals, and contribute to production-grade software projects.',
    50,
    10,
    regular,
    gray,
    14
  );

  const pdfBytes = await doc.save();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, pdfBytes);
  console.log('Generated:', outPath);
}

generateResume().catch((err) => {
  console.error(err);
  process.exit(1);
});

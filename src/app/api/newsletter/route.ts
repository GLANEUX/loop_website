import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Chemin vers notre fichier JSON
const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "newsletter.json");

// Lit le fichier ou renvoie [] si vide
async function readEmails(): Promise<string[]> {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

// Écrit la liste mise à jour
async function writeEmails(emails: string[]) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(emails, null, 2), "utf8");
}

// GET : renvoie la liste des e-mails
export async function GET() {
  const emails = await readEmails();
  return NextResponse.json({ emails });
}

// POST : ajoute un e-mail (envoyé en JSON { email: "foo@bar" })
export async function POST(request: Request) {
  const { email } = (await request.json()) as { email?: string };
  if (!email?.includes("@")) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  const emails = await readEmails();
  if (!emails.includes(email)) {
    emails.push(email);
    await writeEmails(emails);
  }

  return NextResponse.json({ success: true });
}

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// Chemin vers notre fichier JSON
// Permet un override en prod via NEWSLETTER_DATA_DIR (ex: /data dans Docker)
const configuredDir = process.env.NEWSLETTER_DATA_DIR;
const dataDir = configuredDir
  ? path.isAbsolute(configuredDir)
    ? configuredDir
    : path.join(process.cwd(), configuredDir)
  : path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "newsletter.json");

// Lit le fichier ou renvoie [] si vide
async function readEmails(): Promise<string[]> {
  try {
    console.log("Lecture du fichier newsletter :", filePath);
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.log("Fichier newsletter non trouvé, retour liste vide.");
      return [];
    }
    console.error("Erreur lors de la lecture des emails :", error);
    return [];
  }
}

// Écrit la liste mise à jour
async function writeEmails(emails: string[]) {
  try {
    console.log("Écriture dans le dossier :", dataDir);
    await fs.mkdir(dataDir, { recursive: true });
    console.log("Écriture du fichier :", filePath);
    await fs.writeFile(filePath, JSON.stringify(emails, null, 2), "utf8");
    console.log("Écriture réussie.");
  } catch (error) {
    console.error("Erreur lors de l'écriture des emails :", error);
    throw error; // On laisse remonter l'erreur pour que le POST renvoie une 500
  }
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

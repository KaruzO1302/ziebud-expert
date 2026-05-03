import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

const ALLOWED_CONTENT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
] as const;

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export async function POST(request: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      {
        error:
          "Upload zdjęć nie jest jeszcze aktywny. Skorzystaj z formularza bez załącznika albo wróć za chwilę.",
      },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as HandleUploadBody;

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const parsedPayload = parseClientPayload(clientPayload);

        if (!pathname.startsWith("lead-attachments/")) {
          throw new Error("Nieprawidłowa ścieżka uploadu.");
        }

        return {
          allowedContentTypes: [...ALLOWED_CONTENT_TYPES],
          maximumSizeInBytes: MAX_FILE_SIZE,
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({
            source: parsedPayload?.source ?? "unknown",
          }),
        };
      },
      onUploadCompleted: async () => {},
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Lead photo upload error", error);
    return NextResponse.json(
      { error: "Nie udało się przygotować uploadu zdjęcia." },
      { status: 400 },
    );
  }
}

function parseClientPayload(payload: string | null) {
  if (!payload) return null;

  try {
    return JSON.parse(payload) as { source?: string };
  } catch {
    return null;
  }
}

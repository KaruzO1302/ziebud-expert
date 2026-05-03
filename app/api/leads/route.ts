import { NextResponse } from "next/server";
import { createLead, validateLeadPayload } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const validation = validateLeadPayload(body);

    if (!validation.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "Formularz wymaga uzupełnienia.",
          errors: validation.errors,
        },
        { status: 400 },
      );
    }

    const lead = await createLead(validation.data, {
      referer: request.headers.get("referer") || undefined,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      ok: true,
      leadId: lead.id,
      referenceCode: lead.referenceCode,
    });
  } catch (error) {
    console.error("Lead API error", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Nie udało się zapisać zapytania. Spróbuj ponownie za chwilę.",
      },
      { status: 500 },
    );
  }
}

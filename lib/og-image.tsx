import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
} as const;

export const ogContentType = "image/png";

type OgImageOptions = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  highlights?: string[];
  footer?: string;
};

export function createOgImage({
  eyebrow,
  title,
  description,
  badge = "pogotowie-kanalizacyjne-wroclaw.com",
  highlights = [],
  footer = "ZIĘBUD Expert · Wrocław · WUKO · Kanalizacja",
}: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          background:
            "radial-gradient(circle at top left, rgba(0,212,255,0.28), transparent 32%), linear-gradient(135deg, #081425 0%, #0f2238 45%, #102b48 100%)",
          color: "white",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "auto -90px -90px auto",
            width: "340px",
            height: "340px",
            borderRadius: "9999px",
            background: "rgba(0, 212, 255, 0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "820px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 18px",
                borderRadius: "9999px",
                background: "rgba(0, 212, 255, 0.12)",
                border: "1px solid rgba(132, 231, 255, 0.25)",
                color: "#8defff",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>

            <div
              style={{
                fontSize: "66px",
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                textWrap: "balance",
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: "28px",
                lineHeight: 1.45,
                color: "rgba(230, 241, 255, 0.88)",
                maxWidth: "780px",
              }}
            >
              {truncate(description, 190)}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              width: "280px",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
                borderRadius: "28px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  color: "#8defff",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontWeight: 700,
                }}
              >
                ZIĘBUD Expert
              </div>
              <div
                style={{
                  fontSize: "28px",
                  lineHeight: 1.2,
                  fontWeight: 700,
                }}
              >
                Wrocław · WUKO · Kanalizacja
              </div>
            </div>

            {highlights.slice(0, 3).map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 18px",
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.92)",
                  fontSize: "21px",
                  lineHeight: 1.3,
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "9999px",
                    background: "#00d4ff",
                    flexShrink: 0,
                  }}
                />
                {truncate(item, 54)}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "rgba(215, 230, 248, 0.82)",
            }}
          >
            {footer}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.95)",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            {badge}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
    },
  );
}

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

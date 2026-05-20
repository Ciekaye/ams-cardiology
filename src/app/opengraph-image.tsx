import { ImageResponse } from "next/og";

export const alt = "Vireo Cardiology — Modern heart care, rooted in trust.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0A3742 0%, #0F4C5C 100%)",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#E36F6F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
            }}
          >
            ♥
          </div>
          <span style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-1px" }}>vireo</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 56, fontWeight: 600, lineHeight: 1.1, maxWidth: 900 }}>
          Modern heart care, rooted in trust.
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "rgba(232,241,242,0.85)" }}>
          Vireo Cardiology · Greater Philadelphia Area
        </div>
      </div>
    ),
    { ...size }
  );
}

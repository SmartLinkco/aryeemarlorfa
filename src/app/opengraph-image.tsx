import { ImageResponse } from "next/og";

export const alt = "Ava Reed — risk, plants, travel, and books";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3eee6",
          color: "#1b2420",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
          <span>Ava Reed</span>
          <span style={{ color: "#3d5a48" }}>Reed Advisory</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 0.95, letterSpacing: -2 }}>
          <span>Risk, tended</span>
          <span style={{ fontStyle: "italic", color: "#24382e" }}>like a living thing.</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "#3d5a48" }}>
          <span>Advisory</span>
          <span>Plants</span>
          <span>Travel</span>
          <span>Books</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

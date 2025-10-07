import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #2563EB, #0EA5E9)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16
        }}
      >
        <span
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#F8FAFC",
            fontFamily: "Inter"
          }}
        >
          SD
        </span>
      </div>
    ),
    size
  );
}

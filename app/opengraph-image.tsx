import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            "linear-gradient(135deg,#081321 0%,#0B1726 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "70px",
          fontFamily: "Arial",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(212,175,55,.15)",
            filter: "blur(90px)",
            right: -120,
            top: -120,
          }}
        />

        {/* Sol */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
            width: "58%",
          }}
        >
          <img
            src="https://studiodaff.com/logo.png"
            width="150"
            height="150"
            alt="Studio Daff"
          />

          <div
            style={{
              marginTop: 30,
              fontSize: 78,
              fontWeight: 800,
              color: "#D4AF37",
            }}
          >
            STUDIO DAFF
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 34,
              color: "#ffffff",
            }}
          >
            Premium Pet Grooming & Spa
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              color: "#D6D6D6",
            }}
          >
            ✂ Grooming &nbsp;&nbsp; 🛁 Spa &nbsp;&nbsp; 🐾 Boutique
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: 26,
              color: "#D4AF37",
            }}
          >
            📍 Etiler • Beşiktaş • İstanbul
          </div>
        </div>

        {/* Sağ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "38%",
            zIndex: 2,
          }}
        >
          <img
            src="https://studiodaff.com/daffy.png"
            width="360"
            height="360"
            alt="Daffy"
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
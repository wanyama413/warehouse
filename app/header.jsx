export default function Header() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e8e8e8",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        position: "relative",
        zIndex: 100,
      }}
    >
      <div
        style={{
          Width: "100%",
          margin: "0",
          padding: "0 10px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <img
            src="/logo.png"
            alt="NJ Portable Storage"
            style={{ height: "56px", width: "auto" }}
          />
        </a>

        {/* Nav Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            flex: 1,
            marginLeft: "16px",
            fontWeight:'bold'
          }}
        >
          {["Get Quote", "Container Info"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "#222222",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#e87722")}
              onMouseLeave={(e) => (e.target.style.color = "#222222")}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          {[
            { label: "How It Works", href: "#" },
            { label: "Contact Us", href: "#" },
          ].map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#1a3150",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "14.5px",
                fontWeight: "600",
                padding: "10px 20px",
                borderRadius: "50px",
                whiteSpace: "nowrap",
                letterSpacing: "0.01em",
                transition: "background 0.18s ease, transform 0.12s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e87722";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1a3150";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {btn.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3L9 7L5 11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

 "use client";

export default function FixedLogo() {
  return (
    <div className="absolute top-4 left-14 z-50 pointer-events-auto">
      <img
        src="/media/logo.png"
        alt="Site logo"
        style={{ height: "5rem", width: "auto", display: "block" }}
      />
    </div>
  );
}


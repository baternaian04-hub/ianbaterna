const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 noise-grid opacity-40" />
      <div
        className="animated-blob"
        style={{
          width: 520,
          height: 520,
          top: "-10%",
          left: "-10%",
          background: "hsl(45 90% 55%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="animated-blob"
        style={{
          width: 480,
          height: 480,
          bottom: "-15%",
          right: "-10%",
          background: "hsl(35 95% 65%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animated-blob"
        style={{
          width: 380,
          height: 380,
          top: "45%",
          left: "55%",
          background: "hsl(45 90% 55%)",
          opacity: 0.1,
          animationDelay: "-12s",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
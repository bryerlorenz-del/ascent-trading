export const metadata = {
  title: "Ascent Trading Partners",
  description: "Truth in Data. Edge in Markets."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: "Arial", background: "#0b0f1a", color: "white" }}>
        {children}
      </body>
    </html>
  );
}

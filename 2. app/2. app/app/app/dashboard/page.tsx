export default function Dashboard() {
  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32 }}>Trading Dashboard</h1>

      <div style={{ marginTop: 20, padding: 20, background: "#111", borderRadius: 10 }}>
        <h2>BTCUSDT (Placeholder Chart)</h2>
        <p>Next step: we will embed TradingView chart here</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <p>📊 Signal Engine: Coming soon</p>
        <p>📒 Trade Journal: Coming soon</p>
        <p>🧠 AI Trade Analyzer: Coming soon</p>
      </div>
    </main>
  );
}

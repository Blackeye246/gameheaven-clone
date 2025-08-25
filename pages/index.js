export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to GameHeaven</h1>

      <section className="grid md:grid-cols-3 gap-6">
        {/* Free Fire */}
        <div className="card p-4 bg-slate-800 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-1">Free Fire</h3>
          <p className="text-slate-300 text-sm">Diamond Top-Up (demo)</p>
          <button className="btn btn-primary mt-3">View</button>
        </div>

        {/* PUBG */}
        <div className="card p-4 bg-slate-800 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-1">PUBG Mobile</h3>
          <p className="text-slate-300 text-sm">UC Top-Up (demo)</p>
          <button className="btn btn-primary mt-3">View</button>
        </div>

        {/* Netflix / YouTube */}
        <div className="card p-4 bg-slate-800 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-1">Netflix / YouTube</h3>
          <p className="text-slate-300 text-sm">Premium (demo)</p>
          <button className="btn btn-primary mt-3">View</button>
        </div>
      </section>
    </div>
  );
}

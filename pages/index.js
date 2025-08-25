export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">🎮 Welcome to GameHeaven Clone</h1>
      <p className="mb-4">Free Fire, PUBG, Call of Duty, Netflix & YouTube Premium Services</p>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <button className="bg-blue-600 px-6 py-3 rounded-lg shadow-lg">Free Fire Topup</button>
        <button className="bg-green-600 px-6 py-3 rounded-lg shadow-lg">PUBG UC</button>
        <button className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg">COD Points</button>
        <button className="bg-red-600 px-6 py-3 rounded-lg shadow-lg">Netflix / YouTube Premium</button>
      </div>

      <footer className="mt-10 text-sm text-gray-400">
        © 2025 GameHeaven Clone. All rights reserved.
      </footer>
    </div>
  )
}
export default function Home() {
return (
<div className="grid gap-6">
<section className="card">
<h1 className="text-3xl font-bold mb-2">Welcome to GameHeaven</h1>
<p className="text-slate-300">Free Fire / PUBG / COD Top-up • YouTube & Netflix Premium</p>
</section>


<section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="card">
<h3 className="text-xl font-semibold mb-1">Free Fire</h3>
<p className="text-slate-300 text-sm">Diamond top-up (demo)</p>
<button className="btn btn-primary mt-3">View</button>
</div>
<div className="card">
<h3 className="text-xl font-semibold mb-1">PUBG</h3>
<p className="text-slate-300 text-sm">UC top-up (demo)</p>
<button className="btn btn-primary mt-3">View</button>
</div>
<div className="card">
<h3 className="text-xl font-semibold mb-1">Call of Duty</h3>
<p className="text-slate-300 text-sm">CP top-up (demo)</p>
<button className="btn btn-primary mt-3">View</button>
</div>
<div className="card">
<h3 className="text-xl font-semibold mb-1">Netflix / YouTube</h3>
<p className="text-slate-300 text-sm">Premium (demo)</p>
<button className="btn btn-primary mt-3">View</button>
</div>
</section>
</div>
);
}

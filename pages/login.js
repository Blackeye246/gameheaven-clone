import { getSession, signIn } from "next-auth/react";
import { useState } from "react";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");


const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
setError("");
const res = await signIn("credentials", {
redirect: true,
callbackUrl: "/dashboard",
email,
password,
});
// NextAuth handle করবে
setLoading(false);
};


return (
<div className="max-w-md mx-auto card">
<h1 className="text-2xl font-bold mb-4">Sign in</h1>
<form onSubmit={handleSubmit} className="grid gap-3">
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2"
required
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2"
required
/>
<button disabled={loading} className="btn btn-primary">
{loading ? "Signing in..." : "Sign in"}
</button>
</form>
<p className="text-sm text-slate-400 mt-3">
Demo Admin: <code>admin@example.com / Admin@123</code><br/>
Demo User: <code>user@example.com / User@123</code>
</p>
</div>
);
}


export async function getServerSideProps(ctx) {
const session = await getSession(ctx);
if (session) {
return { redirect: { destination: "/dashboard" } };
}
return { props: {} };
}

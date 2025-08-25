import { getSession, useSession } from "next-auth/react";


export default function Dashboard() {
const { data: session } = useSession();
return (
<div className="card">
<h1 className="text-2xl font-bold mb-2">Dashboard</h1>
<p className="text-slate-300">You are signed in as {session?.user?.email}</p>
<ul className="mt-4 list-disc list-inside text-slate-300">
<li>Order history (coming in Part‑2)</li>
<li>Profile & security (coming in Part‑2)</li>
</ul>
</div>
);
}


export async function getServerSideProps(ctx) {
const session = await getSession(ctx);
if (!session) {
return { redirect: { destination: "/login" } };
}
return { props: {} };
}

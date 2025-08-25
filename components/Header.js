import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";


export default function Header() {
const { data: session, status } = useSession();
const isAuthed = status === "authenticated";


return (
<header className="bg-slate-900/80 backdrop-blur sticky top-0 z-50 border-b border-slate-800">
<div className="container flex items-center justify-between py-3">
<Link href="/" className="text-xl font-bold">🎮 GameHeaven</Link>
<nav className="flex items-center gap-4 text-sm">
<Link href="/" className="hover:underline">Home</Link>
<Link href="/dashboard" className="hover:underline">Dashboard</Link>
{isAuthed ? (
<>
<span className="text-slate-400 hidden sm:inline">{session?.user?.email}</span>
<button onClick={() => signOut()} className="btn btn-primary">Sign out</button>
</>
) : (
<button onClick={() => signIn()} className="btn btn-primary">Sign in</button>
)}
</nav>
</div>
</header>
);
}

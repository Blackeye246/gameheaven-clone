import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p className="p-8">Not logged in. Please login first.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome {session.user.email}</h1>
      <p>Your dashboard content here.</p>
    </div>
  );
}

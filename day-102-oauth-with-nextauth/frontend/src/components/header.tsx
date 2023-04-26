import { useSession, signIn } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  const handleLogin = (e: any) => {
    e.preventDefault();
    signIn();
  };
  return (
    <header>
      <div>
        <div>
          {!session && (
            <div>
              <span>You are not signed in</span>
              <br />
              <a href={`/api/auth/signin`} onClick={handleLogin} className=" bg-green-400 py-2 px-6 rounded-3xl">
                Sign In
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
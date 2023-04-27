import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/header.module.css";

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const handleLogin = (e: any) => {
    e.preventDefault();
    signIn();
  };

  const handleLogout = (e: any) => {
    e.prevent.Default();
    signOut();
  };

  return (
    <header>
      <noscript>
        <style>{`.nojs-show {opacity: 1; top;}`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.load
          }`}
        ></p>
        <div>
          {!session && (
            <div>
              <span>You are not signed in</span>
              <br />
              <a
                href={`/api/auth/signin`}
                onClick={handleLogin}
                className=" bg-green-400 py-2 px-6 rounded-3xl"
              >
                Sign In
              </a>
            </div>
          )}

          {session?.user && (
            <div>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url(${session.user.image})` }}
                  className={styles.avatar}
                ></span>
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
            </div>
          )}
          <a
            href={`/api/auth/signout`}
            className={styles.button}
            onClick={handleLogin}
          >
            Sign out
          </a>
        </div>
      </div>
    </header>
  );
}

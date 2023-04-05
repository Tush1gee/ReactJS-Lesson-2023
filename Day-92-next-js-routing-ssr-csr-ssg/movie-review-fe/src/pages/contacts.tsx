import { useRouter } from "next/router";
import React from "react";

export default function ContactPage(): JSX.Element {
  const [navigate, setNavigate] = React.useState(false);
  const router = useRouter()
  React.useEffect(() => {
    if (navigate) {
      router.push("/navigation")
    }
  }, [navigate])
  return (
    <div>
        <ul>
            <li> Email: tush1g@gmail.com</li>
            <li> Twitter: @tush1g__m</li>
            <li> Instagram: tushi1g__m</li>
        </ul>
        <button onClick={() => setNavigate(true)}>Navigation</button>
    </div>
  )
}

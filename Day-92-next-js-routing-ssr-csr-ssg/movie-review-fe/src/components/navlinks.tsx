import { useRouter } from "next/router"
import styles from '@/styles/navigation.module.css'
import React from "react"
export default function Navlinks(): JSX.Element {
    const [navigate, setNavigate] = React.useState(false)

    const router = useRouter()

    React.useEffect(() => {
        if (navigate) {
            router.push("/contacts")
        }
    }, [navigate])

    return (
    <div>
        <div className={styles.navigateDiv}>
            <a className={styles.font}>What's the Tomatometer®?</a>
            <a className={styles.font} onClick={() => setNavigate(true)}>Critics</a>
            <a className={styles.font}>LOGIN/SIGNUP</a>
        </div>
        <div className={styles.nav}>
            <a>MOVIES</a>
            <a>TV SHOWS</a>
            <a>MOVIE TRIVIA</a>
            <a>NEWS</a>
            <a>SHOWTIMES</a>
        </div>
    </div>
    )
}
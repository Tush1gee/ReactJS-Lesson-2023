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
        <div className={styles.navigateDiv}>
            <button className={styles.font}>What's the Tomatometer®?</button>
            <button className={styles.font} onClick={() => setNavigate(true)}>Critics</button>
            <button className={styles.font}>LOGIN/SIGNUP</button>
        </div>
    )
}
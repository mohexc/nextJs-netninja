import styles from '../styles/Home.module.css'
import Link from "next/link"
import Meta from '../components/Meta'

export default function Home() {
  return (
    <div >
      <Meta title={'NetNinja | Home'} content={"nextJs"} />
      <h1>Home Page</h1>
      <p>Lorem</p>
      <p>Lorem</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See ninjas Listing</a>
      </Link>

    </div>
  )
}

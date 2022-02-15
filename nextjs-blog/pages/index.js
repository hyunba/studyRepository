import Head from 'next/head'
import Link from 'next/link'
import Practice from './practice'
import styles from "../styles/style.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.active}>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
      </main>
      <Practice />
      <style jsx global>{`
        
      `}
      </style>
    </div>
  )
}

import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p>menu</p>
        <Link href="/registry/">新規登録</Link>
        <Link href="/login/">ログイン</Link>
        <Link href="/usage/">使い方</Link>
        <Link href="/member/">会員情報</Link>
      </div>
      <h1>TOP</h1>
      <div className="top">
        <p className="top_in">
          Top text
        </p>
      </div>
    </main>
  )
}

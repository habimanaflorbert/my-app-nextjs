import Link from '@/node_modules/next/link'
import Product from './components/productCard';

export default function Home() {
  return (
    <main className="text-gray-900">
    <h1>Hello world !!</h1>

    <Link href="/users">Users Page</Link>
    <Product/>
    </main>
  )
}
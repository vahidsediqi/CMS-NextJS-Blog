import Head from 'next/head'
import { PostCard, PostWidget, Categories} from '../components/'
const posts = [
  {title: 'What is WordPress?', excerpt: 'Learn about wordpress and its usage 2021'},
  {title: 'ReacJS from Zero to Hero', excerpt: 'In this post i will teach you ReactJs from zero to hero'},
  {title: 'Reactjs vs NextJS?', excerpt: 'Learn about ReactJs vs NextJS'},
  {title: 'How to earn money online?', excerpt: 'In this post i will show you how to earn money online'},
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Vahid Sediqi | Bloging website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        { posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
           <div className="lg:col-span-4 col-span-1">
             <div className="lg:sticky relative top-8">

             </div>
          </div>
      </div>
    </div>
  )
}

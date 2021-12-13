import Head from 'next/head'
import { PostWidget, PostCard, Categories } from '../components';

const posts = [
{title: 'What is Reactjs', exc: 'Learn reactjs from hero to zero'},
{title: 'What is nextJs', exc: 'Getting started with nextjs in 2021'},
{title: 'Best wordpress themes', exc: 'There are top 10 wordpress themes to use'},
]

export default function Home(post){
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Vahid Sediqi | Bloging website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
           {posts.map((post) => (
             <PostCard post = {post} key={post.title}/> )
           )}
        </div>

           <div className="lg:col-span-4 col-span-1">
             <div className="lg:sticky relative top-8">
                 <PostWidget />
                 <Categories />
             </div>
          </div>
      </div>
    </div>
  )
}


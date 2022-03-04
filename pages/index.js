import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout";
import {useState} from "react";

export default function Home({data}) {
  return (
    <Layout title={'홈'}>
        <div className="posts">
            {data.map(i=>{
                return (
                    <div key={i.id} className="title">
                        <Link href={`/posts/${i.id}`}><h3>{i.title}</h3></Link>
                    </div>
                )
            })}
        </div>
    </Layout>
  )
}

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(data=>data.json());
    return {
        props:{
            data
        }
    }
}


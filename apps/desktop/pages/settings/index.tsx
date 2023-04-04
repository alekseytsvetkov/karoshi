"use client"

import { App } from '@/components'
import Head from 'next/head';
import { useRouter } from 'next/router';

export const metadata = {
  title: 'Chronowise',
  description: 'Chronowise is a better way to improve your workflow. Meet the new way to increase productivity and reduce stress.',
}

export default function Home() {
  const router = useRouter()
  
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white bg-app h-screen p-4 pt-12 flex flex-col justify-between">
        <div className="hover:cursor-pointer" onClick={() => router.push("/.")}>Back</div>
        <div>Settings</div>
        <div>Content</div>
      </div>
    </>
  );
}
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <Head>
        <title>Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-lg font-bold text-center">AboutBits Next.js Boilerplate</h1>
      </main>
    </div>
  )
}

export default Home

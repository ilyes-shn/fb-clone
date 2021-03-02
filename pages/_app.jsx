import React, { useState } from 'react'
import '../styles/globals.css'
import Nav from '../components/Nav'
import Layout from '../components/Layout';
import Head from 'next/head'
import Splash from '../components/Splash';

function MyApp({ Component, pageProps }) {
  const [splash, setSplash] = useState(true)

  setTimeout(() => {
      setSplash(false)
  }, 1500) 

  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
      <title>FB Clone</title>
      </Head>
      {
        splash ? (
          <Splash/>
        ) : (
          <div>
            <Nav />
            <Layout>
                <Component {...pageProps} />
            </Layout>
          </div>
        )
      }
    </div>
  )
  
}

export default MyApp

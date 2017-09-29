import React from 'react'
import Head from 'next/head'
import Reset from '../constants/reset'

export default ({ children }) => (
  <main>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab"
        rel="stylesheet"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
    </Head>
    {children}
    <Reset />
  </main>
)

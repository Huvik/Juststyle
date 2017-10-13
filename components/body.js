import React from 'react'
import Head from 'next/head'
import Reset from '../constants/reset'
import { colors } from '../constants/colors'

export default ({ children, dark }) => (
  <main className={dark ? 'd' : 'w'}>
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
    <style jsx>{`
      .d {
        background-color: ${colors.greyLight};
      }
      .w {
        background-color: ${colors.white};
      }
    `}</style>
  </main>
)

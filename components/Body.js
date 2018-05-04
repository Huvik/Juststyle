import React from 'react'
import Head from 'next/head'
import Reset from '../constants/reset'
import { colors } from '../constants/colors'

export default ({ children, dark }) =>
  <main style={{ backgroundColor: dark ? colors.greyLight : colors.white }}>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab"
        rel="stylesheet"
        lazyload
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
    </Head>
    {children}
    <Reset />
    <style jsx>{`
      @font-face {
        font-family: 'KomuA';
        src: url('/static/fonts/komu_a.eot');
        src: url('/static/fonts/komu_a.eot?#iefix') format('embedded-opentype'),
          url('/static/fonts/komu_a.woff2') format('woff2'),
          url('/static/fonts/komu_a.woff') format('woff'),
          url('/static/fonts/komu_a.ttf') format('truetype'),
          url('komu_a.svg#komua') format('svg');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'Bookmania-Regular';
        src: url('/static/fonts/mania.eot');
        src: url('/static/fonts/mania.eot?#iefix') format('embedded-opentype'),
          url('/static/fonts/mania.woff2') format('woff2'),
          url('/static/fonts/mania.woff') format('woff'),
          url('/static/fonts/mania.ttf') format('truetype');
      }
    `}</style>
  </main>

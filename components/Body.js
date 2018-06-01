import React from 'react'
import Head from 'next/head'
import Reset from '../constants/reset'
import { colors } from '../constants/colors'

export default ({ children, dark }) =>
  <main style={{ backgroundColor: dark ? colors.greyLight : colors.white }}>
    <Head>
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
        href="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
        href="/static/fonts/komu_a.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
        href="/static/fonts/mania.woff2"
      />
    </Head>
    {children}
    <Reset />
    <style jsx>{`
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: local('Roboto'), local('Roboto-Regular'),
          url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2)
            format('woff2');
      }
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

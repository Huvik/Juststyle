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
        crossOrigin="anonymous"
        href="https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufD5qWr4xCCQ_k.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="/static/fonts/komu_a.woff2"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="/static/fonts/mania.woff2"
      />
    </Head>
    {children}
    <Reset />
    <style jsx>{`
      @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'),
          url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufD5qWr4xCCQ_k.woff2)
            format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
          U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      @font-face {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto Slab Regular'), local('RobotoSlab-Regular'),
          url(https://fonts.gstatic.com/s/robotoslab/v7/BngMUXZYTXPIvIBgJJSb6ufN5qWr4xCC.woff2)
            format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
          U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
          U+2212, U+2215, U+FEFF, U+FFFD;
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
        font-display: swap;
      }
      @font-face {
        font-family: 'Bookmania-Regular';
        font-display: swap;
        src: url('/static/fonts/mania.eot');
        src: url('/static/fonts/mania.eot?#iefix') format('embedded-opentype'),
          url('/static/fonts/mania.woff2') format('woff2'),
          url('/static/fonts/mania.woff') format('woff'),
          url('/static/fonts/mania.ttf') format('truetype');
      }
    `}</style>
  </main>

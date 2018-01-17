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
      <style>{`

/**
 * @license
* MyFonts Webfont Build ID 3454339, 2017-09-22T04:20:38-0400
* 
* The fonts listed in this notice are subject to the End User License
* Agreement(s) entered into by the website owner. All other parties are 
* explicitly restricted from using the Licensed Webfonts(s).
* 
* You may obtain a valid license at the URLs below.
* 
* Webfont: KomuA by DizajnDesign
* URL: https://www.myfonts.com/fonts/dizajndesign/komu/a/
* Copyright: Copyright (c) 2007 by Jan Filipek. All rights reserved.
* Licensed pageviews: 10,000
* 
* Webfont: Bookmania-Regular by Mark Simonson
* URL: https://www.myfonts.com/fonts/marksimonson/bookmania/regular/
* Copyright: Copyright (c) Mark Simonson, 2011. All rights reserved.
* Licensed pageviews: 1,000,000
* 
* 
* License: https://www.myfonts.com/viewlicense?type=web&buildid=3454339
* 
* © 2017 MyFonts Inc
*/

/* @import must be at top of file, otherwise CSS will not work */

@import url('//hello.myfonts.net/count/34b583');

@font-face {
  font-family: 'KomuA';
  src: url('/static/fonts/34B583_0_0.eot');
  src: url('/static/fonts/34B583_0_0.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/34B583_0_0.woff2') format('woff2'),
    url('/static/fonts/34B583_0_0.woff') format('woff'),
    url('/static/fonts/34B583_0_0.ttf') format('truetype');
}

@font-face {
  font-family: 'Bookmania-Regular';
  src: url('/static/fonts/34B583_1_0.eot');
  src: url('/static/fonts/34B583_1_0.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/34B583_1_0.woff2') format('woff2'),
    url('/static/fonts/34B583_1_0.woff') format('woff'),
    url('/static/fonts/34B583_1_0.ttf') format('truetype');
}
    `}
      </style>
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

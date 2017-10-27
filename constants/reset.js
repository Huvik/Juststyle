import React from 'react'
import { colors } from './colors'
import { fonts } from './fonts'

export default () => (
  <style jsx global>{`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }

    /* Don't kill focus outline for keyboard users: http://24ways.org/2009/dont-lose-your-focus */
    a:hover,
    a:active {
      outline: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */

    /* Document
     ========================================================================== */

    /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in
   *    IE on Windows Phone and in iOS.
   */

    html {
      font-size: 10px;
      line-height: 1.15; /* 1 */
      -ms-text-size-adjust: 100%; /* 2 */
      -webkit-text-size-adjust: 100%; /* 2 */
    }

    /* Sections
     ========================================================================== */

    /**
   * Remove the margin in all browsers (opinionated).
   */

    body {
      margin: 0;
    }

    /**
   * Add the correct display in IE 9-.
   */

    article,
    aside,
    footer,
    header,
    nav,
    section {
      display: block;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    /* Grouping content
     ========================================================================== */

    /**
   * Add the correct display in IE 9-.
   * 1. Add the correct display in IE.
   */

    figcaption,
    figure,
    main {
      /* 1 */
      display: block;
    }

    /**
   * Add the correct margin in IE 8.
   */

    figure {
      margin: 1em 40px;
    }

    /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }

    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    /* Text-level semantics
     ========================================================================== */

    /**
   * 1. Remove the gray background on active links in IE 10.
   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
   */

    a {
      background-color: transparent; /* 1 */
      -webkit-text-decoration-skip: objects; /* 2 */
    }

    /**
   * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

    abbr[title] {
      border-bottom: none; /* 1 */
      text-decoration: underline; /* 2 */
      text-decoration: underline dotted; /* 2 */
    }

    b,
    strong {
      font-weight: inherit;
    }

    /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

    b,
    strong {
      font-weight: bolder;
    }

    code,
    kbd,
    samp {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    /**
   * Add the correct font style in Android 4.3-.
   */

    dfn {
      font-style: italic;
    }

    /**
   * Add the correct background and color in IE 9-.
   */

    mark {
      background-color: #ff0;
      color: #000;
    }

    /**
   * Add the correct font size in all browsers.
   */

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    /* Embedded content
     ========================================================================== */

    /**
   * Add the correct display in IE 9-.
   */

    audio,
    video {
      display: inline-block;
    }

    /**
   * Add the correct display in iOS 4-7.
   */

    audio:not([controls]) {
      display: none;
      height: 0;
    }

    /**
   * Remove the border on images inside links in IE 10-.
   */

    img {
      border-style: none;
    }

    /**
   * Hide the overflow in IE.
   */

    svg:not(:root) {
      overflow: hidden;
    }

    /* Forms
     ========================================================================== */

    /**
   * 1. Change the font styles in all browsers (opinionated).
   * 2. Remove the margin in Firefox and Safari.
   */

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: sans-serif; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }

    /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

    button,
    input {
      /* 1 */
      overflow: visible;
    }

    /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

    button,
    select {
      /* 1 */
      text-transform: none;
    }

    button,
    html [type='button'],
    /* 1 */ [type='reset'],
    [type='submit'] {
      -webkit-appearance: button; /* 2 */
    }

    /**
   * Remove the inner border and padding in Firefox.
   */

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    /**
   * Restore the focus styles unset by the previous rule.
   */

    button:-moz-focusring,
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring {
      outline: 1px dotted ButtonText;
    }

    /**
   * Correct the padding in Firefox.
   */

    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    legend {
      box-sizing: border-box; /* 1 */
      color: inherit; /* 2 */
      display: table; /* 1 */
      max-width: 100%; /* 1 */
      padding: 0; /* 3 */
      white-space: normal; /* 1 */
    }

    /**
   * 1. Add the correct display in IE 9-.
   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

    progress {
      display: inline-block; /* 1 */
      vertical-align: baseline; /* 2 */
    }

    /**
   * Remove the default vertical scrollbar in IE.
   */

    textarea {
      overflow: auto;
    }

    /**
   * 1. Add the correct box sizing in IE 10-.
   * 2. Remove the padding in IE 10-.
   */

    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
    }

    /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }

    /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

    [type='search'] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }

    /**
   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
   */

    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }

    /* Interactive
     ========================================================================== */

    /*
   * Add the correct display in IE 9-.
   * 1. Add the correct display in Edge, IE, and Firefox.
   */

    details,
    /* 1 */ menu {
      display: block;
    }

    /*
   * Add the correct display in all browsers.
   */

    summary {
      display: list-item;
    }

    /* Scripting
     ========================================================================== */

    /**
   * Add the correct display in IE 9-.
   */

    canvas {
      display: inline-block;
    }

    /**
   * Add the correct display in IE.
   */

    template {
      display: none;
    }

    /* Hidden
     ========================================================================== */

    /**
   * Add the correct display in IE 10-.
   */

    [hidden] {
      display: none;
    }
    body {
      margin: 0;
      font-family: ${fonts.roboto};
      -webkit-font-smoothing: antialiased;
      font-size: 1.6rem;
      line-height: 2.8rem;
    }

    * {
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    blockquote,
    pre,
    dl,
    dd,
    ol,
    ul,
    form,
    fieldset,
    label,
    legend,
    input,
    textarea,
    select,
    option,
    button,
    table,
    th,
    td,
    caption,
    hr {
      margin: 0;
      padding: 0;
    }

    abbr[title],
    dfn[title] {
      cursor: help;
    }

    a,
    u,
    ins {
      text-decoration: none;
    }

    a {
      vertical-align: top;
    }

    ins {
      border-bottom: 1px solid;
    }

    figure {
      > a {
        display: inline-block;
      }

      > img {
        display: block;
      }
    }

    img {
      vertical-align: middle;
      font-style: italic;
    }

    input,
    textarea,
    select,
    option,
    button {
      outline: none;
    }

    fieldset,
    input,
    textarea,
    button {
      border: none;
    }

    textarea {
      resize: none;
    }

    label,
    button,
    select,
    option {
      cursor: pointer;
    }

    .w {
      color: ${colors.white};
    }
    .b {
      color: ${colors.black};
    }
    .p {
      color: ${colors.pink};
    }

    @for $i from 1 through 30 {
      .pt-#{$i} {
        padding-top: $i * 1.4rem;
      }
    }
    
    @for $i from 1 through 30 {
      .pb-#{$i} {
        padding-bottom: $i * 1.4rem;
      }
    }
    
    @for $i from 1 through 30 {
      .mt-#{$i} {
        margin-top: $i * 1.4rem;
      }
    }
    
    @for $i from 1 through 30 {
      .mb-#{$i} {
        margin-bottom: $i * 1.4rem;
      }
    }

  `}</style>
)

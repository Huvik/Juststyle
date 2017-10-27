import React from 'react'
import { fonts } from '../constants/fonts'

export const H1 = ({ children, className }) => (
  <h1 className={className}>
    {children}
    <style jsx>{`
      h1 {
        font-family: ${fonts.komu};
        font-size: 8.2rem;
        line-height: 8.4rem;
        letter-spacing: 0.064rem;
        font-weight: 400;
      }
    `}</style>
  </h1>
)

export const H2 = ({ children, className }) => (
  <h2 className={className}>
    {children}
    <style jsx>{`
      h2 {
        font-family: ${fonts.komu};
        font-size: 5.6rem;
        line-height: 5.6rem;
        font-weight: 400;
      }
      .align-left {
        text-align: left;
        max-width: 35.2rem;
        width: 100%;
      }
    `}</style>
  </h2>
)

export const H3 = ({ children, className }) => (
  <h3 className={className}>
    {children}
    <style jsx>{`
      h3 {
        font-family: ${fonts.komu};
        font-size: 3.5rem;
        line-height: 4.2rem;
        font-weight: 400;
      }
    `}</style>
  </h3>
)

export const H4 = ({ children, className }) => (
  <h4 className={className}>
    {children}
    <style jsx>{`
      h4 {
        font-family: ${fonts.komu};
        font-size: 2.8rem;
        line-height: 3.5rem;
      }
    `}</style>
  </h4>
)

export const Pretext = ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        font-size: 2.1rem;
        line-height: 4.2rem;
        max-width: 73rem;
      }
    `}</style>
  </p>
)

export const OverHeading = ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        font-size: 1.2rem;
        line-height: 1.4rem;
      }
    `}</style>
  </p>
)

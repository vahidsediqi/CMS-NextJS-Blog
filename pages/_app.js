import React, { useEffect, useState } from 'React';
import Layout from '../components/Layout';

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

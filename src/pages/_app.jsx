import Head from "next/head"
import { useRouter } from 'next/router'


import '../../assets/fonts/feather/feather.css'
import '../../assets/libs/bootstrap-icons/font/bootstrap-icons.css'
import '../../assets/libs/mdi/font/css/materialdesignicons.min.css'
import '../../assets/libs/prismjs/themes/prism.css'
import '../../assets/css/app.css'
import '../../assets/css/footer.css'
import '../../assets/css/nprogress.css'
import '../../assets/css/jquery-ui.min.css'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Favicon icon */}
        <link rel="shortcut icon" type="image/x-icon" href="https://www.shuledirect.org/uploads/5e2adbe99a833.png" />
        <title>Peter Kungu Receipt - Generate Peter&apos;s transport receipt</title>
      </Head>
      <Component key={router.asPath} {...pageProps} />
    </>
  )
}

export default MyApp
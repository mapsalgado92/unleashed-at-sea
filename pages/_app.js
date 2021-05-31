import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/dist/materia/bootstrap.min.css'
import '../styles/globals.css'
import Layout from '../comps/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp

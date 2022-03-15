// import { Menu } from 'antd'
import Layout from 'antd/lib/layout/layout'
import HeaderBody from '../src/components/navbar/header'
import '../styles/globals.css'
// import { UserProvider } from '@auth0/nextjs-auth0'
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {

  return (

  <Layout>
  <HeaderBody/>
  <Component {...pageProps} />
  {/* {console.log(pageProps)} */}
      </Layout> 
  )
}
export default MyApp

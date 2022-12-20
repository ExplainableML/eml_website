import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="bg-gray-50" />
}

export default MyApp

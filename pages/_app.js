import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} class="bg-gray-50" />
}

export default MyApp

import '../styles/globals.css'
// Toast es para enviar notificaciones al usuario (alerts estilizados)
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import '@styles/tailwind.css'
import MainLayout from 'Layout/MainLayout.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <MainLayout>
      <Component {...pageProps} />

      </MainLayout>
      </>
  )
};

export default MyApp;

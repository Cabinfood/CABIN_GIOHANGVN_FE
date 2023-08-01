import { wrapper } from "redux/store"
import "../styles/globals.css"
import { AppProps } from "next/app"
import { PersistGate } from "redux-persist/integration/react"
import { Provider, useStore } from "react-redux"
function MyApp({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)

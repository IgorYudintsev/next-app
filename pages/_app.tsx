import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(<Component {...pageProps} />)
}


//---------------------------------
//TODO: так было раньше

// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import NavBar from "@/components/navBar/NavBar";
//
// export default function App({ Component, pageProps }: AppProps) {
//     return(
//         <>
//             <NavBar/>
//             <Component {...pageProps} />
//         </>
//     )
// }


import Head from 'next/head'

export const config = {
  unstable_runtimeJS: false
}

export default function Under() {
  return (
    <div className="app sans-serif">
      <Head>
        <title>Syphon • A privacy centric matrix client</title>
      </Head>
      <div className="splash flex flex-grow flex-col justify-center items-center">
        <div className="flex-col justify-center items-center text-center">
          <div className="flex-row justify-center items-center text-center">
            <img
              className="m-auto"
              style={{ height: 140 }}
              src={'assets/icon_app_white.png'} />
          </div>
          <div className="pt-8">
            <span className="text-4xl">almost here</span>
          </div>
        </div>
      </div>
    </div>
  )
}

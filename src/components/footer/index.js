

import * as assets from '../../global/assets'

export const Footer = () => {
  return (
    <footer className="bg-brand">
      <div className="container mx-auto px-16">
        <div className="flex flex-col justify-center md:flex-row py-6">
          <div className="flex-1 justify-content mb-6">
            <a
              className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex flex-row"
              href="#">
              <img
                src={assets.appLogoWhite.src}
                className="h-10 fill-current inline" />
              <span className="text-white text-sm mb-8 pl-1">®</span>
            </a>
          </div>

          <div className="flex-1">
            <p className="uppercase text-white-500 md:mb-6">Links</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/under"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">faq</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="mailto:contact@syphon.org?subject=Syphon%20App&body"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">contact</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/support"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">support</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white-500 md:mb-6">Legal</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/terms"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">terms</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/privacy"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">privacy</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white-500 md:mb-6">Social</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.instagram.com/syphonapp"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">instagram</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://github.com/syphon-org"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">github</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://twitter.com/syphonapp"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">twitter</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://fosstodon.org/@syphon"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">mastodon</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-white-500 md:mb-6">more</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/about"
                  className="no-underline hover:underline text-white-800 hover:text-orange-500">about us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="credits justify-center flex flex-col items-center"
        style={{ paddingBottom: 16 }}>
        <span className="text-white">Copyright © 2023 Syphon Organization, LLC</span>
        <span className="text-white">Syphon ® is a registered trademark</span>
      </div>
    </footer>
  )
}

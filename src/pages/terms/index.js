import React from 'react'

import Head from 'next/head'

import { Header } from '../../components/header'

export const config = {
  unstable_runtimeJS: false
}

export default function Terms() {
  return (
    <div className="app sans-serif bg-white">
      <Head>
        <title>Syphon • Terms</title>
      </Head>
      <Header />
      <section className="pt-40 pb-24 px-4 bg-white">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
          <section className="container text-black max-w-5xl mx-auto">
            <div className="flex flex-col justify-center">
              <div>
                <h3><strong>Terms &amp; Conditions</strong></h3>
                <br />
                <p>
                  By downloading or using the app, these terms will
                  automatically apply to you – you should make sure therefore
                  that you read them carefully before using the app.
                  The app itself, and all the trade marks, copyright,
                  database rights and other intellectual property rights related
                  to it, still belong to Taylor Ereio.
                </p>
                <br />
                <p>
                  Taylor Ereio and the Syphon Organization are committed to ensuring that the app is
                  as useful and efficient as possible. For that reason, we
                  reserve the right to make changes to the app or to charge for
                  its services, at any time and for any reason. We will never
                  charge you for the app or its services without making it very
                  clear to you exactly what you’re paying for.
                </p>
                <br />
                <p>
                  The Syphon app stores and processes personal data that
                  you have provided to us, in order to provide my
                  Service. It’s your responsibility to keep your phone and
                  access to the app secure. We therefore recommend that you do
                  not jailbreak or root your phone, which is the process of
                  removing software restrictions and limitations imposed by the
                  official operating system of your device. It could make your
                  phone vulnerable to malware/viruses/malicious programs,
                  compromise your phone’s security features and it could mean
                  that the Syphon app won’t work properly or at all.
                </p>
                <br />
                <p>
                  You should be aware that there are certain things that
                  Taylor Ereio and the Syphon Organization will not take responsibility for. Certain
                  functions of the app will require the app to have an active
                  internet connection. The connection can be Wi-Fi, or provided
                  by your mobile network provider, but Taylor Ereio
                  cannot take responsibility for the app not working at full
                  functionality if you don’t have access to Wi-Fi, and you don’t
                  have any of your data allowance left.
                </p>
                <br />
                <p>
                  If you’re using the app outside of an area with Wi-Fi, you
                  should remember that your terms of the agreement with your
                  mobile network provider will still apply. As a result, you may
                  be charged by your mobile provider for the cost of data for
                  the duration of the connection while accessing the app, or
                  other third party charges. In using the app, you’re accepting
                  responsibility for any such charges, including roaming data
                  charges if you use the app outside of your home territory
                  (i.e. region or country) without turning off data roaming. If
                  you are not the bill payer for the device on which you’re
                  using the app, please be aware that we assume that you have
                  received permission from the bill payer for using the app.
                </p>
                <br />
                <p>
                  Along the same lines, Taylor Ereio cannot always take
                  responsibility for the way you use the app i.e. You need to
                  make sure that your device stays charged – if it runs out of
                  battery and you can’t turn it on to avail the Service,
                  Taylor Ereio cannot accept responsibility.
                </p>
                <br />
                <p>
                  With respect to Taylor Ereio’s responsibility for your
                  use of the app, when you’re using the app, it’s important to
                  bear in mind that although we endeavour to ensure that it is
                  updated and correct at all times, we do rely on third parties
                  to provide information to us so that we can make it available
                  to you. Taylor Ereio accepts no liability for any
                  loss, direct or indirect, you experience as a result of
                  relying wholly on this functionality of the app.
                </p>
                <br />
                <p>
                  At some point, we may wish to update the app. The app is
                  currently available on Android &amp; iOS – the requirements for
                  both systems(and for any additional systems we
                  decide to extend the availability of the app to) may change,
                  and you’ll need to download the updates if you want to keep
                  using the app. Taylor Ereio does not promise that it
                  will always update the app so that it is relevant to you
                  and/or works with the Android &amp; iOS version that you have
                  installed on your device. However, you promise to always
                  accept updates to the application when offered to you, We may
                  also wish to stop providing the app, and may terminate use of
                  it at any time without giving notice of termination to you.
                  Unless we tell you otherwise, upon any termination, (a) the
                  rights and licenses granted to you in these terms will end;
                  (b) you must stop using the app, and (if needed) delete it
                  from your device.
                </p>
                <br />
                <p><strong>Changes to This Terms and Conditions</strong></p>
                <br />
                <p>
                  I may update our Terms and Conditions
                  from time to time. Thus, you are advised to review this page
                  periodically for any changes. I will
                  notify you of any changes by posting the new Terms and
                  Conditions on this page.
                </p>
                <br />
                <p>
                  These terms and conditions are effective as of 2020-06-28
                </p>
                <br />
                <p><strong>Contact Us</strong></p>
                <br />
                <p>
                  If you have any questions or suggestions about my
                  Terms and Conditions, do not hesitate to contact us
                  at hello@syphon.org.
                </p>
                <br />
                <p>
                  This Terms and Conditions page was generated by
                  <a
                    href="https://app-privacy-policy-generator.firebaseapp.com/"
                    target="_blank"
                    rel="noopener noreferrer">App Privacy Policy Generator</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NewsletterForm from '@/components/NewsletterForm'

export default function Footer() {
  return (
    <footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-0.5 w-full"
        viewBox="0 0 1367.743 181.155"
      >
        <path
          className="fill-current text-gray-100 dark:text-gray-800"
          id="wave"
          data-name="wave"
          d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
          transform="translate(1.743 66.155)"
        ></path>
      </svg>
      <div className="bg-gradient-to-b from-gray-100 to-transparent pt-1 dark:from-gray-800 dark:to-transparent">
        <div className="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-12 lg:px-20">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:block md:space-y-6 md:border-none md:py-0">
                <img
                  src="/static/images/logo.png"
                  alt="logo moli"
                  width="100"
                  height="42"
                  className="w-32 dark:brightness-200 dark:grayscale"
                />
                <div className="flex gap-6">
                  <Link
                    href="#"
                    target="blank"
                    aria-label="twitter"
                    className="hover:text-cyan-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="mb-4">
                {siteMetadata.newsletter.provider !== '' && (
                  <div className="flex items-center justify-center pt-4">
                    <NewsletterForm />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                <div>
                  <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">Цэс</h6>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link href="/" className="transition hover:text-cyan-600">
                        Нүүр
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/" className="transition hover:text-cyan-600">
                        Мэргэжилүүд
                      </Link>
                    </li>
                    <li>
                      <Link href="/tags/" className="transition hover:text-cyan-600">
                        Категори
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects/" className="transition hover:text-cyan-600">
                        Зөвөлгөө
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/" className="transition hover:text-cyan-600">
                        Бидний тухай
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between border-t border-gray-100 py-4 pb-8 dark:border-gray-800 md:pl-16">
                <div>{siteMetadata.author}</div>
                <div>{` • `}</div>
                <div>{`© ${new Date().getFullYear()}`}</div>
                <div>{` • `}</div>
                <Link href="/">{siteMetadata.title}</Link>
              </div>{' '}
              <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400">
                <Link href="/">мэргэжил сонголтын цогц платформ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // <footer className="">
    //   <div className="mt-16 flex flex-col items-center">
    //     <div className="mb-3 flex space-x-4">
    //       <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
    //       <SocialIcon kind="github" href={siteMetadata.github} size="6" />
    //       <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
    //       <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
    //       {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
    //       <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" /> */}
    //     </div>
    //     <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
    //       <div>{siteMetadata.author}</div>
    //       <div>{` • `}</div>
    //       <div>{`© ${new Date().getFullYear()}`}</div>
    //       <div>{` • `}</div>
    //       <Link href="/">{siteMetadata.title}</Link>
    //     </div>
    //     <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
    //       <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
    //         мэргэжил сонголтын цогц платформ
    //       </Link>
    //     </div>
    //   </div>
    // </footer>
  )
}

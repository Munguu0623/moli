import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NewsletterForm from '@/components/NewsletterForm'
import { useTheme } from 'next-themes'
import Image from 'next/image'
export default function Footer() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

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
                {currentTheme == 'light' ? (
                  <Image
                    src="/static/images/logo.png"
                    alt="logo"
                    width="100px"
                    height="40px"
                    className="dark:hidden"
                  />
                ) : (
                  <Image
                    src="/static/images/logo_light.png"
                    alt="logo"
                    width="100px"
                    height="40px"
                    className="dark:hidden"
                  />
                )}
                <div className="flex gap-6">
                  <Link
                    href="https://www.instagram.com/moliofficial2023/"
                    target="blank"
                    aria-label="twitter"
                    className="hover:text-cyan-600"
                  >
                    <svg
                      width="22px"
                      height="22px"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="bi bi-instagram"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.facebook.com/Moli-116183528065840"
                    target="blank"
                    aria-label="facebook"
                    className="hover:text-cyan-600"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="bi bi-facebook"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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

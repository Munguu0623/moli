import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const LayoutWrapper = ({ children }) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  // const logoSrc = theme === 'dark' ? '/static/images/logo.png' : '/static/images/logo_light.png'
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3 mt-4">
                  {/* <Logo /> */}
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
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <div className="">
          <Footer />
        </div>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

import Image from 'next/image'
export default function OurPartner(second) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center">
        <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
          <div>
            <div className="relative w-full max-w-lg">
              <div className="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

              <div classNameName="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
              <div className="relative">
                <img
                  className="mx-auto rounded-lg object-cover object-center shadow-2xl"
                  src="/static/images/illustration.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-16 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24">
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl">
            Бидэнтэй хамтран ажилдаг байгууллагууд
          </h1>
          <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
            Бид монгол орны ирээдүйн боловсролын салбарт шинэ залуустаа хөрөнгө оруулдаг
          </p>
          <div className="-mx-4 mt-2 flex w-full flex-wrap text-left">
            <div className="mt-4 w-1/4 p-4 sm:w-1/4">
              <img src="/static/images/sdc.jpg" />
            </div>
            <div className="mt-4 w-1/4 p-4 sm:w-1/4">
              <img src="/static/images/zorig_logo.svg" />
            </div>
            <div className="mt-4 w-1/4 p-4 sm:w-1/4">
              <svg
                width="42"
                height="42"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                  fill="#1ABCFE"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                  fill="#0ACF83"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                  fill="#FF7262"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                  fill="#F24E1E"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                  fill="#A259FF"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

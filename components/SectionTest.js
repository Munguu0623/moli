import testData from '@/data/testData'
import Link from 'next/link'
export default function SectionTest(second) {
  return (
    <>
      <div className="py-16">
        <div className="xl:container·md:px-12 m-auto px-6 text-gray-500">
          <div>
            <h2 className="mt-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Ажил мэргэжил тодорхойлох тест
            </h2>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 dark:divide-gray-700 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
              <div className="relative space-y-8 p-8 py-12">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="group-hover:text-primary text-center text-xl font-medium text-gray-700 transition dark:text-white">
                    {testData[0].title}
                  </h5>
                  <p className="text-justify text-sm text-gray-600 dark:text-gray-300">
                    {testData[0].description}
                  </p>
                </div>
                <Link href="/test">
                  <a className="group-hover:text-primary flex items-center justify-between">
                    <span className="text-sm">тест үзэх</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
              <div className="relative space-y-8 p-8 py-12">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="group-hover:text-primary text-xl font-medium text-gray-700 transition dark:text-white">
                    {testData[1].title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Энд бас нэгэн зүйлийг онцгойлон анхааруулахад бид “Эрэлттэй мэргэжил”
                  </p>
                </div>
                <Link href="/test">
                  <a className="group-hover:text-primary flex items-center justify-between">
                    <span className="text-sm">тест үзэх</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
              <div className="relative space-y-8 p-8 py-12">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="group-hover:text-primary text-xl font-medium text-gray-700 transition dark:text-white">
                    {testData[2].title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Энд бас нэгэн зүйлийг онцгойлон анхааруулахад бид “Эрэлттэй мэргэжил”
                  </p>
                </div>
                <Link href="/test">
                  <a className="group-hover:text-primary flex items-center justify-between">
                    <span className="text-sm">тест үзэх</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
              <div className="relative space-y-8 p-8 py-12">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="group-hover:text-primary text-xl font-medium text-gray-700 transition dark:text-white">
                    {testData[3].title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testData[3].description}
                  </p>
                </div>
                <Link href="/test">
                  <a className="group-hover:text-primary flex items-center justify-between">
                    <span className="text-sm">тест үзэх</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

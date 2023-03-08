export default function SectionCard(second) {
  return (
    <>
      <div className="py-16">
        <div className="m-auto space-y-16 px-6 text-gray-500 md:px-12 xl:container">
          <div>
            <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              {/* A technology-first approach to payments <br class="sm:block" hidden />
              and finance */}
              Хүн бүрийн амьдралдаа хийх хамгийн том сонголтуудын нэг бол мэргэжил сонголт.
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3 lg:gap-0 xl:grid-cols-4">
            <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition duration-300 hover:border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent lg:hover:shadow-gray-600/10 dark:lg:bg-transparent">
              <div className="relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341111.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="package-delivery illustration"
                />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition dark:text-white">
                  Надад ямар мэргэжил тохирох вэ?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur
                  fugiat non cum doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition duration-300 hover:border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent lg:hover:shadow-gray-600/10 dark:lg:bg-transparent">
              <div className="relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="package-delivery illustration"
                />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition dark:text-white">
                  Надад ямар ур чадвар хэрэгтэй вэ?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur
                  fugiat non cum doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition duration-300 hover:border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent lg:hover:shadow-gray-600/10 dark:lg:bg-transparent">
              <div className="relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="package-delivery illustration"
                />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition dark:text-white">
                  Би хүссэн салбарт хэрхэн орох вэ?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur
                  fugiat non cum doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition duration-300 hover:border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent lg:hover:shadow-gray-600/10 dark:lg:bg-transparent">
              <div className="relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                  className="w-10"
                  width="512"
                  height="512"
                  alt="package-delivery illustration"
                />
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition dark:text-white">
                  Тэр мэргэжил намайг хаана хүргэх вэ?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur
                  fugiat non cum doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

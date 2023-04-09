export default function Team(second) {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-6 text-center md:px-12">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              <span className="text-blue-500">Moli</span> баг хамт олон
            </h2>
          </div>
          <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="static/images/mungun.png"
                  alt="mungunerdene"
                  loading="lazy"
                  width="640"
                  height="805"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">Б. Мөнгөн-Эрдэнэ</h4>
                  <span className="block text-sm text-gray-500">CEO-Founder</span>
                </div>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="static/images/buyanaa.png"
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">Буяндэлгэр</h4>
                  <span className="block text-sm text-gray-500">Project manager</span>
                </div>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="static/images/bazar.png"
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">Сумъяабазар</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="static/images/zoloo.png"
                  alt="mungunerdene"
                  loading="lazy"
                  width="640"
                  height="805"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">Б. Золцэцэг</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="static/images/sum.png"
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">Б. Сумьяа</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="static/images/solongoo.png"
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">М. Солонгоо</h4>
                  <span className="block text-sm text-gray-500">Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

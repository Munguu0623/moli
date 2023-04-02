export default function Team(second) {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-6 text-center md:px-12">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              <span className="text-blue-500">Moli</span> баг хамт олон
            </h2>
            <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
              Tailus prides itself not only on award-winning technology, but also on the talent of
              its people of some of the brightest minds and most experienced executives in business.
            </p>
          </div>
          <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="static/images/man.jpg"
                  alt="woman"
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
                <a href="#" className="text-primary mx-auto block w-max">
                  View Bio
                </a>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="https://thumbs.dreamstime.com/b/portrait-beautiful-asian-student-studying-thinking-156877260.jpg"
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">Буянхишиг</h4>
                  <span className="block text-sm text-gray-500">Project manager</span>
                </div>
                <a href="#" className="text-primary mx-auto block w-max">
                  View Bio
                </a>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src="https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg"
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">Золжаргал</h4>
                  <span className="block text-sm text-gray-500">Chief Technical Officer</span>
                </div>
                <a href="#" className="text-primary mx-auto block w-max">
                  View Bio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

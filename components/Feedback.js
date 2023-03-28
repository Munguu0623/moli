export default function Feedback(second) {
  return (
    <>
      <div className="  w-full ">
        <div className="justify-between  md:flex">
          <div className=" mb-10 md:mb-0 md:w-5/12">
            <a
              href="#"
              className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="sm:flex sm:justify-between sm:gap-4">
                <div className="mb-3 sm:block sm:shrink-0 md:mb-0">
                  <img
                    alt="Paul Clapton"
                    src="/static/images/huosten.jpeg"
                    className="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
                <div>
                  <h3 className=" text-xs font-bold  sm:text-sm">Улс төрч</h3>

                  <p className="mt-1 text-xs font-medium ">Д. Хьюстон</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  Та зөвхөн мөнгөний төлөө мэргэжлээ бүү сонго. Та хайрын төлөө, эхнэр шиг
                  мэргэжлийг сонгох хэрэгтэй.
                </p>
              </div>
            </a>
          </div>
          <div className=" md:w-5/12">
            <a
              href="#"
              className="relative block  overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="sm:flex sm:justify-between sm:gap-4">
                <div className="mb-3 sm:block sm:shrink-0 md:mb-0">
                  <img
                    alt="Paul Clapton"
                    src="/static/images/oyun.jpeg"
                    className="h-16 w-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
                <div>
                  <h3 className=" text-xs font-bold  sm:text-sm">
                    Улс төрч, ном зохиогч, "Жорлонгоо Өөрчилье" төслийн санаачлагч
                  </h3>

                  <p className="mt-1 text-xs font-medium ">Цэдэвдамба Оюунгэрэл</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-500">
                  Чамд юу ч тааралдсан, юу ч сурсан аль болох чадлынхаа хэрээр тархиныхаа
                  хэмжээгээрээ шүүрч, сайн сурч авах нь маш чухал.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

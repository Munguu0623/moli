export default function SectionApp(second) {
  return (
    <>
      <div className=" py-16">
        <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
          <div className="items-center justify-center gap-16 text-center md:flex md:text-left">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-7/12 lg:w-6/12">
              <h1 className="text-4xl font-bold dark:text-white md:text-5xl">
                Тун удахгүй <span className="text-blue-500 dark:text-blue-500">MOLI</span> app
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Өөрийн чадварт зориулсан мэргэжлээ хэрхэн сонгох талаар мэргэжлийн экспертүүдийн
                зөвлөгөө болон ганцаарчилсан видео уулзалт. Мэргэжлийн чиг баримжаа тогтоох сорил.
                Бүх их дээд сургууль коллежийн мэдээ мэдээлэл болон тухайн мэргэжлийн танилцуулага
                гэх олон зүйлүүд багтана.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start lg:gap-6">
                <a
                  href="#"
                  target="blank"
                  title="For Android"
                  aria-label="google play"
                  className="block overflow-hidden"
                >
                  <img
                    src="static/images/google_play.png"
                    width="153"
                    height="46"
                    alt="google play badge"
                  />
                </a>
                <a
                  href="#"
                  target="blank"
                  title="For iPhone"
                  aria-label="app store"
                  className="block overflow-hidden"
                >
                  <img
                    src="static/images/app-store.png"
                    width="153"
                    height="46"
                    alt="apple store badge"
                  />
                </a>
              </div>
            </div>
            <img
              src="static/images/mobile.webp"
              width="832"
              height="608"
              className="m-auto md:w-5/12"
              loading="lazy"
              alt="mobility_illustration"
            />
          </div>
        </div>
      </div>
    </>
  )
}

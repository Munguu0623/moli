export default function SectionCover(second) {
  return (
    <>
      <section className="overflow-hidden  sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold  md:text-3xl">
              Ирээдүйгээ төлөвлхөд туслах хамгийн шилдэг хөтөч
            </h2>

            <p className="hidden  md:mt-4 md:block">
              Судалгаанаас үзэхэд 65-70 насласан хүн амьдралынхаа бараг 40 жилийг өөрийн сонгосон
              мэргэжилдээ зориулдаг байна. Иймээс мэргэжил сонгох гэдэг нь санамсаргүй зүйл байх
              ёсгүй.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700   "
              >
                санал хүсэлт
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src="https://static.vecteezy.com/system/resources/previews/005/084/403/large_2x/beautiful-asian-woman-university-student-happy-on-yellow-background-free-photo.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        />
      </section>
    </>
  )
}

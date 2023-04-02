export default function SectionCard(second) {
  return (
    <>
      <div className="py-16">
        <div className="xl:container·md:px-12 m-auto space-y-16 px-6 text-gray-500">
          <div>
            <h2 className="mt-4 text-center text-xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Мэргэжлээ сонгоход анхаарах ёстой тулгын гурван зүйл
            </h2>
          </div>

          <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
              <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                <div className="group space-y-6 rounded-3xl border border-gray-100 bg-white px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                  <img
                    className="mx-auto w-24"
                    src="https://cdn-icons-png.flaticon.com/512/3588/3588658.png"
                    alt="illustration"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Сонирхол</h3>
                  <p>
                    Хүн дуртай зүйлдээ цаг хугацаа, сэтгэл зүрхээ зориулахад бэлэн байдаг.
                    Эсрэгээрээ, хүүхдийг дургүй зүйлд нь хүчлэхэд хэцүү. Харин юу ч сонирхохгүй
                    байна гэдэг нь тухайн хүн өөрийгөө “олоогүй” байгаа гэсэн үг.
                  </p>
                </div>
                <div className="group space-y-6 rounded-3xl border border-gray-100 bg-white px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                  <img
                    className="mx-auto w-24"
                    src="https://cdn-icons-png.flaticon.com/512/3852/3852881.png"
                    alt="illustration"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Авьяас</h3>
                  <p>
                    хүүхдийн авьяас, сэтгэц физиологийн онцлог шинж. Жишээ нь, маркетингийн менежер
                    хүн нээлттэй, хөдөлгөөнтэй, сэргэлэн байх ёстой. Нягтлан хүн анхаарлын төвлөрөлт
                    сайн гэх мэтчилэн онцлогууд бий.
                  </p>
                </div>
                <div className="group space-y-6 rounded-3xl border border-gray-100 bg-white px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                  <img
                    className="mx-auto w-24"
                    src="https://cdn-icons-png.flaticon.com/512/8705/8705564.png"
                    alt="illustration"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Зах зээл</h3>
                  <p>
                    Хөдөлмөрийн зах зээл дээр ямар мэргэжил илүүдэлтэй, ямар мэргэжил дутагдалтай
                    байгааг судлсаны үр дүнд сонголтоо хийвэл ирээдүй тань илүү баталгаатай болох
                    юм.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

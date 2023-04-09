import Image from 'next/image'
export default function OurPartner(second) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center">
        <div className="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
          <div>
            <div className="relative w-full max-w-lg">
              <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"></div>

              <div className="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
              <div className="relative">
                <img
                  className="mx-auto rounded-lg object-cover object-center shadow-2xl"
                  src="/static/images/illustration.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24">
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl">
            Бидэнтэй хамтран ажилдаг байгууллагууд
          </h1>
          <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
            Бидэнтэй хамтран ажилладаг байгууллагууд Бид эх орныхоо ирээдүй хойч болсон оюунлаг
            залуусынхаа мэргэжил сонголт хэмээх амьдралын хамгийн чухал сонголтыг зөв байлгахад
            дэмжин ажилладаг.
          </p>
          <div className="-mx-4 mt-2 flex w-full flex-wrap text-left">
            <div className="mt-4 w-1/4 p-4 sm:w-1/4">
              <img src="/static/images/sdc.jpg" />
            </div>
            <div className="mt-4 w-1/4 p-4 sm:w-1/4">
              <img src="/static/images/zorig.png" />
            </div>
            <div className="mt-4 w-1/4 pt-4 sm:w-1/4">
              <img src="/static/images/shine_mongol.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

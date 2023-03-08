export default function OurPartner(second) {
  return (
    <>
      <div className=" py-8 lg:py-2">
        <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          <div className="items-center gap-12 lg:flex">
            <div className="lg:w-2/6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Бидэнтэй хамтран ажилдаг байгууллагууд
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Бид монгол орны ирээдүйн боловсролын салбарт шинэ залуустаа хөрөнгө оруулдаг
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-4/6">
              <div className="-mx-6 flex flex-wrap gap-6 px-6 md:justify-between lg:gap-2">
                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img src="/static/images/zorig_logo.svg" className="w-24 lg:w-28" alt="" />
                </div>

                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img src="/static/images/zorig_logo.svg" className="w-24 lg:w-28" alt="" />
                </div>

                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img src="./images/clients/coty.svg" className="w-28" alt="" />
                </div>

                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img src="./images/clients/tailus.svg" className="w-32" alt="" />
                </div>

                <div className="flex items-center rounded-xl lg:p-4 lg:hover:bg-white">
                  <img src="./images/clients/microsoft.svg" className="w-32" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

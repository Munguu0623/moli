import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

const icons = [
  {
    icon: '/static/icons/architect-male.svg',
  },
  {
    icon: '/static/icons/research-analyst-male.svg',
  },
  {
    icon: '/static/icons/teacher-female.svg',
  },
  {
    icon: '/static/icons/professional-driver-male.svg',
  },
  {
    icon: '/static/icons/sportswoman.svg',
  },
  {
    icon: '/static/icons/web-developer-female.svg',
  },
  {
    icon: '/static/icons/influencer-female.svg',
  },
  {
    icon: '/static/icons/engineer-male.svg',
  },
  {
    icon: '/static/icons/consultant-male.svg',
  },
  {
    icon: '/static/icons/journalist-female.svg',
  },
  {
    icon: '/static/icons/medical-doctor-female.svg',
  },
  {
    icon: '/static/icons/policeman.svg',
  },
  {
    icon: '/static/icons/veterinarian-female.svg',
  },
  {
    icon: '/static/icons/artist-male.svg',
  },
  {
    icon: '/static/icons/hr-specialist-female.svg',
  },
]

export default function Tags({ tags }) {
  // таг датанууд холболт
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  const data = Object.values(icons).map((el) => el.icon)
  const newDatas = sortedTags.map((tag, index) => {
    return {
      tagName: tag,
      icon: data[index],
    }
  })

  console.log(newDatas, 'newDatas')

  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />

      <div className="py-16">
        <div className="m-auto px-6 text-gray-500 md:px-12 xl:container">
          <div>
            <h2 className="mt-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Салбар мэргэжлүүдийн жагсаалт
            </h2>
          </div>

          {Object.keys(tags).length === 0 && 'Мэдээлэл байхгүй байна.'}

          {newDatas.map((el, index) => {
            return (
              <div key={index}>
                <div className="flex   py-3">
                  <Link
                    href={`/tags/${kebabCase(el.tagName)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    <div className="m-auto  px-6 text-gray-500 md:px-12 xl:container ">
                      <div className="mt-3  divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 dark:divide-gray-700 dark:border-gray-700 ">
                        <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                          <div className="relative space-y-8 p-8 py-12">
                            <img
                              src={el.icon}
                              className="w-12"
                              width="512"
                              height="512"
                              alt="burger illustration"
                            />

                            <div className="space-y-2">
                              <h5 className="group-hover:text-primary text-xl font-medium text-gray-700 transition dark:text-white">
                                <div className="flex justify-between">
                                  <Tag text={el.tagName}></Tag>
                                  {/* <div>{`(${el.tagName})`}</div> */}
                                </div>
                              </h5>
                              <p className="text-sm font-light normal-case text-gray-600  dark:text-gray-300">
                                тайзан дээр үзүүлбэр үзүүлэх, зэмсэг тоглох, нийтлэл бичих, телевиз,
                                кино, интернет гэх мэт мэдээллийн хэрэгслээр хүмүүстэй харьцах
                                зэргийг бүгдийг ажил мэргэжил болгон эрхэлж болно. Гэсэн ч тухайн
                                талбар бүр ширүүн өрсөлдөөнтэй тул амжилтад хүрэхэд хүчин чармайлт,
                                хичээл зүтгэл, хатуужил хэрэгтэй.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}

          {/* {sortedTags.map((t) => {
            return (
              <div key={t}>
                <div className="flex   py-3">
                  <Link
                    href={`/tags/${kebabCase(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  >
                    <div className="m-auto  px-6 text-gray-500 md:px-12 xl:container ">
                      <div className="mt-3  divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 dark:divide-gray-700 dark:border-gray-700 ">
                        <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                          <div className="relative space-y-8 p-8 py-12">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/4341/4341111.png"
                              className="w-12"
                              width="512"
                              height="512"
                              alt="burger illustration"
                            />

                            <div className="space-y-2">
                              <h5 className="group-hover:text-primary text-xl font-medium text-gray-700 transition dark:text-white">
                                <div className="flex justify-between">
                                  <Tag text={t}></Tag> <div>{`(${tags[t]})`}</div>
                                </div>
                              </h5>
                              <p className="text-sm font-light normal-case text-gray-600  dark:text-gray-300">
                                тайзан дээр үзүүлбэр үзүүлэх, зэмсэг тоглох, нийтлэл бичих, телевиз,
                                кино, интернет гэх мэт мэдээллийн хэрэгслээр хүмүүстэй харьцах
                                зэргийг бүгдийг ажил мэргэжил болгон эрхэлж болно. Гэсэн ч тухайн
                                талбар бүр ширүүн өрсөлдөөнтэй тул амжилтад хүрэхэд хүчин чармайлт,
                                хичээл зүтгэл, хатуужил хэрэгтэй.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              // <div key={t} className="mt-2 mb-2 mr-5">
              //   <Tag text={t} />
              //   <Link
              //     href={`/tags/${kebabCase(t)}`}
              //     className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
              //   >
              //     {`(${tags[t]})`}
              //   </Link>
              // </div>
            )
          })} */}
        </div>
      </div>
    </>
  )
}

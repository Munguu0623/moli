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
    // шинжлэх ухаан ба судалгаа
    icon: '/static/icons/research-analyst-male.svg',
    subtitle:
      'Шинжлэх ухаан нь шинийг олж мэдэх, нээлт хийх хүсэл сонирхолтой, аливаад дүн шинжилгээ хийж ханддаг бүх хүнд тохирсон олон янзын онцгой шинж чанараас бүрддэг салбар юм. Энэхүү салбарт орсноор чи вакцин боловсруулж, далайн амьдралыг судалж хиймэл дагуулыг ч сансарт хөөргөх боломжтой.      ',
  },
  {
    // Мэдээллийн технологи болон тооцоолол
    icon: '/static/icons/web-developer-female.svg',
    subtitle:
      'Өнөөгийн бизнесийн ертөнц чанартай мэдээлэл авах эсэхээс ихээхэн хамаардаг болжээ. Мэдээллийн технологи(IT), тооцоолол бол үүний гол түлхүүр юм. Компьютерын сүлжээг хөтлөхөөс эхлээд цахим хуудас бүтээх хүртэлх энэ салбар дахь ажил мэргэжлийн цар хүрээ тогтмол өргөжин тэлж байна.',
  },
  {
    // Инженерчлэл ба үйлдвэрлэл
    icon: '/static/icons/engineer-male.svg',
    subtitle:
      'Хэрвээ чи аливаа зүйлс хэрхэн ажилладаг, түүнийг хэрхэн сайжруулах талаар суралцах дуртай бол энэ салбарт чамд тохирох ажлын өргөн сонголт бий. Шинэ төхөөрөмж бүтээх, туршилт хийх эсвэл энэ бүхний ард байгаа шинжлэх ухаанд дүн шинжилгээ хийх гэх мэт аль нь ч байлаа гэсэн чи бүтээлч арга зүйтэй, зохион байгуулах чадвартай байх хэрэгтэй. ',
  },
  {
    // Эрүүл мэнд ба ангаах ухаан
    icon: '/static/icons/medical-doctor-female.svg',
    subtitle:
      'Эрүүл мэндийн салбар бол эмнэлэг болон нийгмийн бүлгүүдэд чиглэсэн олон төрлийн үүрэгт ажил бүхий томоохон салбар юм. Хэрэв чи эрүүл мэнд, эрүүл амьдралын хэв маягийг эрхэмлэдэг, шинжлэх ухаан, технологид авьяастай бол эрүүл мэнд, ангаах ухаан чиний ирээдүй байж болох юм. ',
  },
  {
    //Барилга
    icon: '/static/icons/architect-male.svg',
    subtitle:
      'Олон улсад үйл ажиллагаа явуулах боломжтой, өргөн хүрээг хамардаг барилгын салбарт орон сууц, албан газар хүссэн хэрэглэгчдийн эрэлт хэрэгцээг хангахын тулд өндөр мэргэжлийн ур чадвартай хүний нөөц байнга шаардагддаг. Практик ажилд дуртай бол энэ салбарт чамайг маш олон сонголт хүлээж байна.',
  },

  {
    // нийгмийн халамж ба багш
    icon: '/static/icons/teacher-female.svg',
    subtitle:
      'Энэ салбарт мэргэжлүүд хүмүүст зааж сургах, хөгжүүлэх, дэмжих, халамжлах замаар хувь хүн, гэр бүл, бүлэг, нийгмийн амьдралыг сайжруулахад чиглэдэг. Бусад хүнтэй хамтарч ажиллах дуртай, хүмүүстэй харилцах чадвар сайтай бол чамд ийм ажил тохирно. ',
  },
  {
    // Батлан хамгаалах онцгой байдал
    icon: '/static/icons/policeman.svg',
    subtitle:
      'Чи хүмүүст, нийгэмд туслахад идэвхтэй үүрэг гүйцэтгэхийг хүсэж байгаа бол батлан хамгаалах, онцгой байдалын ажил чамд тохирч магадгүй. Энэ салбарын зарим ажил олон улсад аялах шаардлагатай тулгарахад хүргэдэг. Гэхдээ энэ бүх ажил хүмүүстэй харилцах хүсэл, идэвхтэй хандлага шаардана. ',
  },
  {
    // тээвэр
    icon: '/static/icons/professional-driver-male.svg',
    subtitle:
      'Олон улсын тээвэр, худалдаа өсөн нэмэгдэхтэй холбоотой тээврийн салбар ч мөн хүрээгээ тэлж байна. Зорчигч болон ачаа барааг агаар, авто зам, төмөр зам, усан замаар тээвэрлэх боломж нэмэгдэж байгаа учир экипажийн гишүүн, жолооч, нисгэгч ахмадын ажлын мөн төлөвлөгөөний багийн гишүүний ажлын байр нэмэгдэж байна. ',
  },
  {
    // спорт чөлөөт цаг аялал жуулчлал
    icon: '/static/icons/sportswoman.svg',
    subtitle:
      'Дэлхийн эдийн засаг өсөн нэмэгдсэнээр чөлөөт цагаа зөв өнгөрүүлэх шаардлага ч мөн жил бүр нэмэгдэж байна. Хүсэл тэмүүлэл, харилцааны төгс чадвар, хүмүүст чөлөөт цагаа зугаатай өнгөрүүлэхэд нь туслах чадвар зэрэг нь энэхүү өргөжин тэлж буй салбарт ажиллахад шаардлагатай шалгуур нөхцөл юм. ',
  },

  {
    // Борлуулат маркетинг зар сурталчилгаа
    icon: '/static/icons/influencer-female.svg',
    subtitle:
      'Борлуулалтын мэдрэмж, худалдаа хийх сонирхол, үйлчлүүлэгчдийн талаарх мэдлэг мэдээлэл нь энэхүү хурдацтай хөгжиж буй салбарт амин чухалд тооцогдоно. Зар сурталчилагаа зохиохоос эхлээд хэвлэлийн мэдээ бичих, олон нийтийн эрэлт хэрэгцээг урьдчилан таамаглах зэрэг олон янзын үүрэг хүлээдэг.',
  },

  {
    // Санхүү хууль улс төр
    icon: '/static/icons/consultant-male.svg',
    subtitle:
      'Энэ салбарын ажил мэргэжил нь хурц ухаан, их хэмжээний мэдээлэл боловсруулах, хадгалах чадвар, тооны ухаан, хууль эрх зүй болон бизнесийн ойлголттой байхыг шаарддаг. Тэд бусад мэргэжилтэн болон олон нийттэй хамтарч ажиллах хэрэгтэй болдог учир хувийн ур чадвар маш чухал юм. ',
  },
  {
    // Урлаг уран сайхан хэвлэл мэдээлэл сэтгэл зүй
    icon: '/static/icons/journalist-female.svg',
    subtitle:
      'Тайзан дээр үзүүлбэр үзүүлэх, зэмсэг тоглох, нийтлэл бичих, телевиз, кино, интернэт гэх мэт мэдээллийн хэрэгслээр хүмүүстэй харьцах зэргийг бүгдийг ажил мэргэжил болгон эрхэлж боллно. Гэсэн ч тухайн талбар бүр ширүүн өрсөлдөөнтэй тул амжилтад хүрэхэд хүчин чармайлт, хичээл зүтгэл, хатуужил хэрэгтэй. ',
  },

  {
    // Амьтад газар тариалан ба хүрээлэн
    icon: '/static/icons/veterinarian-female.svg',
    subtitle:
      'Хэрэв чи амьтан, ургамалтай эсвэл газар тариалан дээр ажиллах дуртай бол энэ салбарын ажил мэргэжлийн талаар бодоод үзээрэй. Морь унах, өвчтэй амьтадыг асарч халамжлахаас эхлээд газар  тариалангийн технологийг судлах гэх мэт ажил мэргэжлийн сонголт улам бүр нэмэгдсээр байна. ',
  },
  {
    //Дүрслэх урлаг гар урлал ба дизайн
    icon: '/static/icons/artist-male.svg',
    subtitle:
      'Хэрэв чи загварлаг зүйлсийг олж харж чаддаг, урлагийн авьяастай бол дүрслэх урлаг, гар урлал, дизайны чиглэлийн мэргэжлийг анхааралдаа авч болох юм. Энэ сабарт ажилласнаар шинэ бүтээгдэхүүн зохион бүтээх, сэтгүүлийн зураг, загвар гаргах, гэрийн дотоод засал чимэглэл хийх эсвэл хамгийн сүүлийн үеийн загварын чиг хандлагыг санаачлахад оролцож ч мэднэ. ',
  },
  {
    // Захиргаа ба бизнесийн удирдлага
    icon: '/static/icons/hr-specialist-female.svg',
    subtitle:
      'Шийдвэр гаргах зохион байгуулах чадвар нь захиргаа, бизнесийн удирдлагын чухал үзүүлэлт юм. Энэ чиглэлээр үйл ажиллагаа явуулдаг олон салбар байдаг бөгөөд тулгамдсан асуудлыг шийдвэрлэхээс эхлээд манлайлах, багаар ажиллах хүртэлх олон түвшний ур чадварыг эзэмших шаардлагатай.',
  },
  {
    // test
    icon: 'https://icons.veryicon.com/png/o/miscellaneous/ecological-desktop-icon-library/test-11.png',
    subtitle:
      'Ахлах сургуулийн төгсөх жилдээ сонгосон мэргэжил бүх насаар чинь дагах найз чинь болдог. Тиймээс маш зөв сонголт хийх хэрэгтэй юм. Хувиасаа зөвлөхөд цалин өндөртэй, эрэлт ихтэй байгаа эсвэл гэр бүлийнхний зөвлөсөн мэргэжил гэхээс илүүтэйгээр өөрийн хүслээ дагах нь илүү ашигтай байх болно шүү. Магадгүй дотоод дуу хоолойгоо сонсоод сонгосон мэргэжил чинь чамайг 20, 30 бүр 5, 10 жилийн дараа тэрбумтан болгохыг ч үгүйсгэхгүй. Тэгээд ч дуртай зүйлээ ажил болговол та бүх насаа ажил хийхгүй өнгөрөөнө гээд бод доо? Гоё байгаа биз',
  },
]

export default function Tags({ tags }) {
  // таг датанууд холболт
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  const data = Object.values(icons).map((el) => el)
  const newDatas = sortedTags.map((tag, index) => {
    return {
      tagName: tag,
      icon: data[index].icon,
      subtitle: data[index].subtitle,
    }
  })

  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />

      <div className="py-16">
        <div className="xl:container·md:px-12 m-auto px-6 text-gray-500">
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
                    <div className="xl:container·md:px-12  m-auto px-6 text-gray-500 ">
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
                                {el.subtitle}
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
                    <div className="m-auto  px-6 text-gray-500 xl:container·md:px-12 ">
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

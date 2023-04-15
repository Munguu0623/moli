import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'
import SectionCover from '@/components/SectionCover'
import Feedback from '@/components/Feedback'
import SectionCard from '@/components/SectionCard'
import SectionTest from '@/components/SectionTest'
import SectionApp from '@/components/SectionApp'
import OurPartner from '@/components/OurPartner'
import { useEffect, useState } from 'react'
import { Button, Modal } from 'antd'
import Image from 'next/image'
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal
        title=" MOLI веб сайтанд тавтай морил!"
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        style={{ textAlign: 'center' }}
      >
        <div className="flex h-32 w-full items-center justify-center">
          <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-yellow-400">
            <div className="h-20 w-20 rounded-full bg-blue-500">
              <Image width="245" height="245" src="/static/images/moli_non.png" />
            </div>
          </div>
        </div>

        <p className="text-center">
          {' '}
          <span className="font-bold text-blue-500">MOLI</span> танд мэргэжлээ зөв сонгоход тань
          туслах болно. Манай веб сайтынд таны сонгох гэж байгаа мэргэжлийн талаарх танилцуулга
          байхгүй бол та санал хүсэлтээр сонирхож байгаа мэргэжлээ илгээгээрэй.
        </p>
        <div className="my-10 flex justify-center ">
          <div className=" h-1 w-3/4 rounded-full bg-blue-500"></div>
        </div>
        <div>
          <p className="text-justify text-xl font-medium text-gray-500/30">#MOLI</p>
        </div>
      </Modal>
      <SectionCover />
      <SectionCard />
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            Мэргэжлүүд
          </h1>
          <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'хайлт олдсонгүй.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Read "${title}"`}
                        >
                          дэлгэрэнгүй &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            Бүх нийтлэл &rarr;
          </Link>
        </div>
      )}
      <div className=" my-10">
        <SectionTest />
      </div>
      <div className="  my-10 ">
        <Feedback />
      </div>
      <div className="my-10">
        <OurPartner />
      </div>
      <div className="my-10">
        <SectionApp />
      </div>
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          < />
        </div>
      )} */}
    </>
  )
}

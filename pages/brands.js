import React from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import MainLayout from '@/layouts/MainLayout'

export default function Brands() {
  return (
    <MainLayout>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Brands
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here are our brands
          </p>
        </div>
        <div className="container py-5">
          <div className="-m-4 flex flex-wrap">
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

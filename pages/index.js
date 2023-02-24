import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro/Intro'
import RecentPosts from '@/components/RecentPosts'
import SectionContainer from '@/components/SectionContainer'
import { PageSEO } from '@/components/SEO'
import Works from '@/components/Work/Works'
import siteMetadata from '@/data/siteMetadata'
import HomeLayout from '@/layouts/HomeLayout'


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://thefashionenthusiast.uk/api/index/data')
  const data = await res.json()
  const posts = data.featured;

  // Pass data to the page via props
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.author} description={siteMetadata.description} />
      <SectionContainer>
        <Header />
      </SectionContainer>
      <Hero />
      <Intro />
      <Works />
      <HomeLayout>
        <RecentPosts posts={posts} />
      </HomeLayout>
    </>
  )
}

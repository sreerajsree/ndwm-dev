import Link from 'next/link'
import PostCard from '@/components/PostCard'

const MAX_DISPLAY = 5

export default function RecentPosts({ posts }) {
  const slicedPost = posts.slice(0, MAX_DISPLAY)

  return (
    <>
      <div className="divide-gray-200 dark:divide-gray-700">
        <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 mb-8">
          Recent News from The Fashion Enthusiast
        </h3>
        <PostCard posts={slicedPost}/>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="https://thefashionenthusiast.uk/" legacyBehavior>
            <a
              className="underline-magical cursor-pointer font-bold"
              aria-label="all news"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read All Post &rarr;
            </a>
          </Link>
        </div>
      )}
    </>
  )
}

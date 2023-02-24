import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PostCard({ posts }) {
  return (
    <ul>
      {posts.map(({ slug, title, photo }, index) => (
        <motion.li
          key={slug}
          className="py-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <Link href={`https://thefashionenthusiast.uk/stories/${slug}`} aria-label={`Read "${title}"`} target="_blank" rel="noopener noreferrer" className='flex' >
            <img src={`https://thefashionenthusiast.uk/storage/photos/${photo.year}/${photo.month}/${photo.path}`} width={120} height={60} alt={title} className="mr-5 object-contain" />
            <article className="cursor-pointer gap-3 space-y-2 bg-opacity-20 py-5 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div className="space-y-3 xl:col-span-4">
                <span className="text-md md:text-xl lg:text-2xl font-bold tracking-tight">
                  <a className="text-primary-500 duration-300 hover:text-primary-400">
                    {title}
                  </a>
                </span>
              </div>
            </article>
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}

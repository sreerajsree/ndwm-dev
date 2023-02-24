import dynamic from 'next/dynamic'

const PostCardComponent = dynamic(
  () => {
    return import('./PostCard')
  },
  { ssr: false }
)

const PostCard = ({ posts }) => {
  return (
    <div>
      <PostCardComponent posts={posts} />
    </div>
  )
}

export default PostCard

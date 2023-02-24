import dynamic from 'next/dynamic'

const PostCardComponent = dynamic(
  () => {
    return import('./PostCard')
  },
  { ssr: false }
)

const PostCard = ({ posts }) => {
  return (
    <div id="comment">
      <PostCardComponent posts={posts} />
    </div>
  )
}

export default PostCard

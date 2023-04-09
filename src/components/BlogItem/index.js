// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <Link className="link-item" to={`/blogs/${id}`}>
      <li className="blog-list-item">
        <div className="list-item-container">
          <img src={imageUrl} alt={imageUrl} className="list-image" />
          <div className="details-container">
            <h1 className="heading">{topic}</h1>
            <h1 className="content">{title}</h1>
            <div className="list-author-container">
              <img src={avatarUrl} alt={avatarUrl} className="list-avatar" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem

// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogsDataList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsDataList()
  }

  getBlogsDataList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedDataList = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      content: eachItem.content,
      topic: eachItem.topic,
    }))
    this.setState({
      blogsDataList: updatedDataList,
      isLoading: false,
    })
  }

  render() {
    const {blogsDataList, isLoading} = this.state
    return (
      <div>
        <ul className="blogs-list-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            blogsDataList.map(eachItem => (
              <BlogItem blogDetails={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList

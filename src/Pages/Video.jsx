
import { Save, ShareOutlined, ThumbDown, ThumbUp } from "@material-ui/icons"
import Header from "../Components/Header"
import { useLocation } from "react-router-dom"
// import Data from "../assets/Data"
import { useEffect, useState } from "react"
// import random from '../assets/Images/Techno Gamerz .jpg'
import { API_KEY } from '../DataKey'
import { value_converter } from '../DataKey'
import moment from 'moment'
import Category from '../Components/Category'
import page from '../assets/Images/Crazy XYZ Shorts.jpg'

const Video = () => {
  const search = useLocation().search;
  const queryId = new URLSearchParams(search).get('id');
  const categoryId = new URLSearchParams(search).get('categoryId');
  // const [data, setData] = useState(Data);
  // console.log(queryId);
  // console.log(categoryId);
  // const [apiData, setApiData] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
// const [cData, setCData] = useState(null);

  // console.log(channelData);

  // console.log(filteredData.snippet || 'hello')

  //   const {videoId, categoryId} = useParams();




  //   useEffect(()=>{
  //     const filterdData = data.filter(item => item.id === queryId);
  //     setFilteredData(filterdData);
  //    }, [data, queryId]);

  //fetching commentData

  const fetchCommentsData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=40&videoId=${queryId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(response => response.json()).then(data => setCommentData(data.items))

  }
  useEffect(() => {
    fetchCommentsData();
  }, [])

  //fetching channel Data

  let channelId = filteredData?.snippet?.channelId;
  // console.log(API_KEY);

  const fetchOtherData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(response => response.json()).then(data => setChannelData(data.items))

  }
  useEffect(() => {
    fetchOtherData();
  }, [filteredData])




  //fetching video data

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(videoList_url).then(response => response.json()).then(data => setApiData(data.items))
    await fetch(videoList_url).then(response => response.json()).then(data => setCategoryData(data.items.slice(0, 10)))
  }

  useEffect(() => {
    fetchData();
  }, [categoryId])

  useEffect(() => {
    if (queryId) {
      const filteredData = apiData.filter(items => items.id === queryId);
      setFilteredData(filteredData[0]);
    }
  }, [queryId, apiData]);
  let title = filteredData?.snippet?.title;
  let channelTitle = filteredData?.snippet?.channelTitle;
  let views = filteredData?.statistics?.viewCount;
  let time = filteredData?.snippet?.publishedAt;
  let likes = filteredData?.statistics?.likeCount;
  let description = filteredData?.snippet?.description?.slice(0, 150);
  let comments = filteredData?.statistics?.commentCount;
  // let channleThumbnail = channelData[0]?.snippet?.thumbnails?.default?.url;
  // console.log(channleThumbnail);
  // let subscribe = channelData.statistics?.subscriberCount;

  return (
    <>
      <div className="video-page">
        <Header />
        <div className="video-container">
          <div className="video">
            {/* <img src={item.thumbnail} alt="random" width='100%' height='400px' /> */}
            <iframe src={`https://www.youtube.com/embed/${queryId}`} title='new' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " frameborder="0"></iframe>
            <h3 style={{padding: '5px'}}>{title}</h3>
            <div className="play-video-info">
              <p>{value_converter(views)} &bull; {moment(time).fromNow()}</p>
              <div className="link-dislike-share">
                <span><ThumbUp /> {value_converter(likes)}</span>
                <span><ThumbDown /> </span>
                <span><ShareOutlined /> Share</span>
                <span><Save /> Save</span>
              </div>
            </div>
            <hr />
            <div className="publisher">
              <img src={page} alt="random" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
              <div>
                <p>{channelTitle}</p>
                <span>Subscribers</span>
              </div>
              <button>Subscribe</button>
            </div>
            <div className="video-description">
              <p>{description}</p>
              <hr />
              <h4 style={{display: 'block'}}>{value_converter(comments)} Comments</h4>
              <div className="comments-section">
              {
                commentData.map((item) => (
                  <>
                    <div className="comments">
                      <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" width="30px" height="30px" style={{ borderRadius: "50%", marginRight: '10px' }} />
                      <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                          <ThumbUp /><span style={{ marginRight: '10px' }}>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                          <ThumbDown />
                        </div>
                      </div>
                    </div>
                  </>
                ))
              }
              </div>

            </div>
          </div>
          <div className="suggested-video-container">
            <Category categoryData={categoryData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
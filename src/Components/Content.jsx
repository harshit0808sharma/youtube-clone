import { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";
import { CheckCircle } from '@material-ui/icons';
import Data from "../assets/Data";
// import { API_KEY } from '../DataKey';
import { API_KEY, value_converter } from '../DataKey';
// import img from '../assets/Images/Pubg Thumbnails.jpg'
import moment from 'moment';

export const Content = ({ searchData, category = 0, isOpen }) => {
    // const [searchText, setSearchText] = useState(searchData);
    const [data, setData] = useState(Data);
    // const [newData, setNewData] = useState([]);
    // const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();
    // console.log(searchData)
    // console.log(data);
    //   console.log(isOpen);

    

    // useEffect(()=>{
    //     // const lowerCaseSearch = searchData.toLowerCase();
    //     const filteredData = data.filter(item => item.title.toLowerCase() === searchData);
    //     setData(filteredData);
    // }, [searchData, data]);

    // console.log(category);
    const [apiData, setApiData] = useState([]);

    const fetchData = async () =>{
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response=>response.json()).then(data=> setApiData(data.items))
    }

    useEffect(()=>{
        fetchData();
    }, [category])

    // console.log(apiData[0]);

    // const redirectToVideo = (id) =>{
    //     navigate(`/video?id=${id}`);
    //   }
    // onClick={() => redirectToVideo(items?.id)}

  return (
    <>
        <div className={`contents ${isOpen? 'contents-shrink': 'contents-sprade'}`}>
            {
                apiData.map((items)=>(
                    <>
                        <NavLink to={`/video?id=${items.id}&categoryId=${items.snippet.categoryId}`}>
                            <div className="video-sequence" >
                                <div className={`video-contents ${isOpen? 'video-contents-shrink': 'video-contents-sprade'}`}>
                                    <img src={items.snippet.thumbnails.medium.url} alt="thumbnail"/>
                                    <div className="title-name" style={{padding: '4px'}}>
                                        <p style={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '16px'}}>{items.snippet.title}</p> 
                                        <p style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '16px'}}>{items.snippet.channelTitle} <CheckCircle style={{width: '14px'}}/></p> 
                                        <p style={{fontSize: '14px'}}>{value_converter(items.statistics.viewCount)} &bull; {moment(items.snippet.publishedAt).fromNow()}</p> 
                                    </div>
                                </div>

                            </div>
                        </NavLink>
                    </>
                ))
            }
        </div>
    </>
  )
}


// import img from '../assets/Images/MR_BEAST THUMBNAIL.jpg'
import { CheckCircle } from '@material-ui/icons';
import { value_converter } from '../DataKey';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const Category = ({categoryData}) => {
    // console.log(categoryData);
    // const search = useLocation().search;
    // const queryId = new URLSearchParams(search).get('id');
    // const categoryId = new URLSearchParams(search).get('categoryId');
  return (
    <>
        <div className="category">
            {
                categoryData.map((items)=> (
                    <>
                    <NavLink to={`/video?id=${items.id}&categoryId=${items.snippet.categoryId}`}>
                        <div className="category-video-sequence" >
                            <div className="video-contents">
                                <img src={items.snippet.thumbnails.medium.url} alt="thumbnail" width="400px" height='180px'/>
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
            {/* <div className="video-sequence" >
                <div className="video-contents">
                    <img src={img} alt="thumbnail" width="400px" height='180px'/>
                    <div className="title-name" style={{padding: '4px'}}>
                        <p style={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '16px'}}>title</p> 
                        <p style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '16px'}}>Title <CheckCircle style={{width: '14px'}}/></p> 
                        <p style={{fontSize: '14px'}}>120K views &bull; 12 days ago</p> 
                    </div>
                </div>
            </div>
            <div className="video-sequence" >
                <div className="video-contents">
                    <img src={img} alt="thumbnail" width="400px" height='180px'/>
                    <div className="title-name" style={{padding: '4px'}}>
                        <p style={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '16px'}}>title</p> 
                        <p style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '16px'}}>Title <CheckCircle style={{width: '14px'}}/></p> 
                        <p style={{fontSize: '14px'}}>120K views &bull; 12 days ago</p> 
                    </div>
                </div>
            </div>
            <div className="video-sequence" >
                <div className="video-contents">
                    <img src={img} alt="thumbnail" width="400px" height='180px'/>
                    <div className="title-name" style={{padding: '4px'}}>
                        <p style={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', fontSize: '16px'}}>title</p> 
                        <p style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '16px'}}>Title <CheckCircle style={{width: '14px'}}/></p> 
                        <p style={{fontSize: '14px'}}>120K views &bull; 12 days ago</p> 
                    </div>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Category;
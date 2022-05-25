import {useEffect} from "react"
import {Link} from 'react-router-dom';


function NotFound(){
  useEffect(() => {
    document.title = "404";
  })
  return <div className='notfound'>
  <h1>404 - Không tìm thấy trang yêu cầu!</h1>
  <Link to="/">Quay lại trang chủ</Link>
 </div>
};

export default NotFound;
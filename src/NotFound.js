import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='notfound'>
    <h1>404 - Không tìm thấy trang yêu cầu!</h1>
    <Link to="/">Quay lại trang chủ</Link>
  </div>
);

export default NotFound;
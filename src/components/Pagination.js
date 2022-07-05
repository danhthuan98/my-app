import React from 'react';
import { Pagination as Paginate } from 'antd';
import 'antd/dist/antd.min.css';

/**
* @author
* @function Pagination
**/

const Pagination = ({ limit, total, current, onChange }) => {

    const onchange = (page) => {
        onChange(page);
    }

    return (
        <Paginate current={current} total={total} onChange={onchange} pageSizeOptions={[5, 10, 15]} defaultPageSize={5} responsive />
    )
}

export default Pagination;
import React from 'react'
import _ from 'lodash'
import propTypes from 'prop-types'

const Pagination = (props) => {
    const { itemsCount, pageSize , onPageChange, currentPage} =props;
    const pageCount = Math.ceil(itemsCount/pageSize);
    const pages = _.range(1, pageCount+1);
     if(pageCount === 1) return null;

    return (
         <ul className="pagination justify-content-center my-5">
         {pages.map(page=>( <li className={page === currentPage? "page-item mx-1 active" :"page-item mx-1" }key={page}>
             <a className="page-link" href="#" onClick={() => onPageChange(page)}>{page}</a>
         </li>))}
           
        </ul>
         
    )
}
Pagination.propTypes = {
    itemsCount:propTypes.number.isRequired,
    pageSize:propTypes.number.isRequired , 
    onPageChange:propTypes.func.isRequired, 
    currentPage:propTypes.number.isRequired
}
export default Pagination;

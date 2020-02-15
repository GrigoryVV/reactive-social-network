import React, { useState } from 'react';
import css from './Paginator.module.css';

function Paginator({
    totalItemsCount,
    pageSize,
    portionSize=10,
    currentPage,
    setCurrentPage
}) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    let [currentPortion, setPortion] = useState(1);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={css.pages + " block"}>
            {currentPortion > 1 &&
                <span onClick={() => {setPortion(currentPortion - 1)}}>
                    {'<'}
                </span>
            }
            {pages
            .filter(page => {
                return (page <= currentPortion * portionSize 
                    && page > currentPortion * portionSize - portionSize);
            })
            .map(page => {
                return (
                    <span key={page} 
                        className={
                            currentPage === page ? css.selectedPage : ''
                        }
                        onClick={() => { setCurrentPage(page) }}
                    >
                        {page}
                    </span>
                );
            })
            }
            {currentPortion < Math.ceil(pagesCount / portionSize) &&
                <span onClick={() => {setPortion(currentPortion + 1)}}>
                    {'>'}
                </span>
            }
        </div>
    );
}

export default Paginator;
import React from 'react'
import SearchBer from '../searchBer/searchBer';
import Categories from '../categories/categories';



function SearchBerCategories() {
    return (
        <div className='bg-primary-light py-5'>
            <div className='container lg:flex flex-1 items-center gap-8'>
                <div>
                    <Categories />
                </div>
                <div>
                    <SearchBer />
                </div>
            </div>
        </div>
    )
}

export default SearchBerCategories
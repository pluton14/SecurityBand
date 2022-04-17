import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';
function PostFilter({filter, setFilter}){
    return(
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value.toLowerCase()})}
                placeholder='Введите название' 
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По названию' },
                    //{value:'price', name: 'По цене'}
                ]} 
            />
        </div>
    )
    
}
export default PostFilter;
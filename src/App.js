import React, {useState, useMemo} from 'react';
import useSWR from 'swr'; 
import Post from "./components/Post";
import PostFilter from './components/PostFilter';
import './styles/App.css';

const fetcher = (...args) => fetch(...args).then(res => res.json())
function App(){
    const {data: posts = []}= useSWR(['url писать сюда', { method: 'POST'}] , fetcher)
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if(filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const SearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])
    return(
            <div className='App'>
                <h1 align='center'>Заказы</h1>
                <hr style={{margin: '15px 0'}}/>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {SearchedPosts.map(post =>
                    <Post post={post} key={post.id}/>
                )}
            </div>
    )
}
export default App;
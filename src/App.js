import React, {useState, useMemo} from 'react';
import Post from "./components/Post";
import PostFilter from './components/PostFilter';
import './styles/App.css';
function App(){
    const [posts, setPosts] = useState([
        {id: 1, title: 'Пластиковый стакан', body: 'ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ КУЛЬТУРЫ ГОРОДА МОСКВЫ «КУЛЬТУРНЫЙ ЦЕНТР «АВАНГАРД»', price: 9000},
        {id: 2, title: 'Сейф', body: 'ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ КУЛЬТУРЫ ГОРОДА МОСКВЫ «КУЛЬТУРНЫЙ ЦЕНТР «АВАНГАРД»', price: 480000},
        {id: 3, title: 'Обслуживание кондиционеров', body: 'ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ КУЛЬТУРЫ ГОРОДА МОСКВЫ «КУЛЬТУРНЫЙ ЦЕНТР «АВАНГАРД»', price: 54000},
        {id: 4, title: 'Кофемашина', body: 'ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ КУЛЬТУРЫ ГОРОДА МОСКВЫ «КУЛЬТУРНЫЙ ЦЕНТР «АВАНГАРД»', price: 12500},
    ])
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
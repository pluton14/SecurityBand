import React, {useState, useMemo} from 'react';
import Post from "./components/Post";
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';
function App(){
    const [posts, setPosts] = useState([
        {id: 1, title: 'Пластиковый стакан', body: 'Описание', price: 9000},
        {id: 2, title: 'Сейф', body: 'Описание', price: 480000},
        {id: 3, title: 'Дубинка', body: 'Описание', price: 54000},
        {id: 4, title: 'ГДЗ по физике Пёрышкин', body: 'Повествование', price: 12500},
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        if(selectedSort){
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const SearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }
    return(
        <div className='App'>
            <h1 align='center'>Заказы</h1>
            <hr style={{margin: '15px 0'}}/>
            <MyInput
                value={searchQuery}
                onChange = {e => setSearchQuery(e.target.value.toLowerCase())}
                placeholder='Введите название'
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Сортировка'
                options={[
                        {value:'title', name: 'По названию'},
                        {value:'body', name: 'По описанию'}
                        ]}
            />
            {SearchedPosts.map(post =>
                <Post post={post} key={post.id}/>
            )}
        </div>
    )
}
export default App;
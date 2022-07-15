import { useState } from 'react';
import './App.css';
import FilteredAndSearch from './components/FilteredAndSearch';
import FormList from './components/FormList';
import TableList from './components/TableList';
import MyModal from './components/UI/modal/MyModal';
import {usePosts} from './components/hooks/UseCreatePosts'


function App() {
  const  [posts, setPosts,] = useState([
    {id:1, title: 'Javascript', stack:'Mern-Stack '},
    {id:2, title: 'Nodejs', stack:'Full-Stack '},
    {id:3, title: 'C#', stack:'Cyber '},
    {id:4, title: 'C++', stack:'Backend '},
  ])
  
  const [filter,  setFilter] = useState({sort: '', query: ''})
  const[modal, setModal] = useState(false)  
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(s=> s.id !==post.id))
  }

  return (
    <div className='app w-50 mx-auto '>
      <btn 
      className='btn btn-primary w-100'
      onClick={() => setModal (true)}
      >Add Post</btn>
     <MyModal modal={modal} setModal={setModal}>
      <FormList createPost={createPost}/>
     </MyModal>
      <FilteredAndSearch filter={filter} setFilter={setFilter}/>
      <TableList remove={removePost} posts={sortedAndSearchPosts}  title='Programming Language'/>
    </div>
  );
}

export default App;

// import {useState} from 'react'
// import axios from 'axios';

import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewPage';

// import {useState, useCallback} from 'react';
// import Categories from "./components/Categories";
// import NewsList from "./components/NewsList";




export const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try{
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=13b9460a36c14f56ae5b1905c9c91006',
  //     );
  //       setData(response.data);
  //  } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (

  <Routes>
  <Route path="/" element={<NewsPage />} />
  <Route path="/:category" element={<NewsPage />} />
</Routes>
    )

  // (
  // <>
  //   <Categories category={category} onSelect={onSelect}/>
  //   <NewsList category={category}/>
  // </>
    // );

  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //       {data && <textarea rows={7} value={JSON.stringify(data,null,2)}/>}
  //   </div>
  // );
};

export default App;
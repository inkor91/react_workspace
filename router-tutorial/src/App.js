import { Link, Route, Router, Routes } from 'react-router-dom';
import About from './About';
import Article from './Article';
import Articles from './Articles';
import Home from './Home';
import Layout from './Layout';
import Login from './Login';
import MyPage from './MyPage';
import NotFound from './NotFound';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <Routes>
      <Route element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/profile/:username" element={<Profile/>}/>
        </Route>
          <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

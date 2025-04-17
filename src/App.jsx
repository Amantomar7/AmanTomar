import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard.jsx';
import Home from './Pages/Home.jsx';
import PostsList from './Pages/PostsList.jsx';
import PostDetail from './Pages/PostDetail.jsx';
import Categories from './Pages/Categories.jsx';
import CategoriesList from './Pages/CategoriesList.jsx';

function App() {
  return (
    <Router>
      <Dashboard />
      <Routes>
        <Route path="/AmanTomar" element={<Home />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<CategoriesList />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

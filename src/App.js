import logo from './logo.svg';
import './App.css';
import React , { useState, useEffect } from 'react';


import ArticleList from './components/articleslist';

function App() {

    const [articles, setArticles] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {

        const axios = require('axios');
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>{
            setArticles(data.data);
            setLoaded(true);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);
  return (
    <div className="App">
      {
        loaded ?
            <div>
                <ArticleList articles={articles} />
            </div>
        :
        <div>
            Loading
        </div>
      }
      

    </div>
  );
}

export default App;

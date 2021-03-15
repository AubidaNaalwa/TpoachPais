import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { API_PATH } from '../../Constants';
import axios from 'axios';
import NewForLargeScreen from './NewForLargeScreen';


export default function NewsForLargeScreen() {
    const [news, setNews] = useState([]);


    useEffect(() => {
        async function fetchEvents() {
            let tpaisNews = await axios.get(`${API_PATH}/news`);
            setNews(tpaisNews.data.sortedNews);
        }
        fetchEvents();
    }, []);


    return (
        <div >
            {news.map(n => <NewForLargeScreen new={n} key={n._id} />)}
        </div>
    );
}
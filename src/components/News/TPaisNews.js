import React, { useEffect, useState } from 'react';
import TPaisNew from './TPaisNew';
import { API_PATH } from '../../Constants';
import axios from 'axios';
import FBContainer from '../FBContainer';
import Grid from '@material-ui/core/Grid';

export default function TPaisNews() {
    const [news, setNews] = useState([]);


    useEffect(() => {
        async function fetchEvents() {
            let tpaisNews = await axios.get(`${API_PATH}/news`);
            setNews(tpaisNews.data.sortedNews);
            console.log(news)
        }
        fetchEvents();
    }, []);

    const [pageSize, setPageSize] = useState(null);

    useEffect(() => {
        function handleResize() {
            setPageSize({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>

            {
                pageSize && (pageSize.width < 1844 || pageSize.height < 738) && (pageSize.width > 601) &&
                <>
                    <h1 className="tpaisHeader"> اخبار المركز</h1>

                    <Grid container direction="row" justify="space-evenly" spacing={3}>
                        {pageSize.width > pageSize.height ?

                            <Grid item style={{ width: '50%' }} >

                                {news.map(n => <TPaisNew new={n} key={n._id} pageSize={pageSize} />)}

                            </Grid> : <Grid item >

                                {news.map(n => <TPaisNew new={n} key={n._id} pageSize={pageSize} />)}

                            </Grid>}

                        <Grid item style={{ marginTop: '3%' }} >
                            <FBContainer />
                        </Grid>
                    </Grid>

                </>
            }

            {
                pageSize && (pageSize.width < 640 || pageSize.height < 568) &&
                <>
                    <h1 className="tpaisHeader"> اخبار المركز</h1>
                    {news.map(n => <TPaisNew new={n} key={n._id} pageSize={pageSize} />)}
                    <center style={{ marginTop: '5%' }}>
                        <FBContainer />
                    </center>


                </>
            }


        </div>
    );
}
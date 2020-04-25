import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API_TV_SHOWS_URI_BASE } from '../common/Constants';
import { Spinner } from 'react-bootstrap';

import Search from '../components/Search';
import TvShowCard from '../components/TvShowCard';

const Home = () => {

    const [shows, setShows] = useState([]);
    const [loadingShows, setLoadingShows] = useState(false);

    useEffect(() => {
        
        searchTvShows('girls');

    }, []);

    const showSample = () => 
        shows.map(show => (<TvShowCard key={show.show.id} show={show.show} />));

    const searchTvShows = text => {

        setShows([]);

        const fetchTvShows = async () => {
            setLoadingShows(true);
            const res = await axios.get(`${API_TV_SHOWS_URI_BASE}/search/shows?q=${text}`);

            if(res.status === 200){
                setShows(res.data);
            }
            setLoadingShows(false);
        }
        fetchTvShows();

    }


    return (

        <div className='container mt-4'>
            <div className='d-flex justify-content-center'>
                <Search searchTvShows={searchTvShows}/>
            </div>
            <div className='mt-2'>
                {
                    !loadingShows ?  
                        <div className='d-flex flex-wrap justify-content-center'>
                            {showSample()}
                        </div>
                    : 
                        <div className='text-center'>
                            <Spinner animation='border' />
                        </div>
                }
            </div>
        </div>

    );
};


export default Home;
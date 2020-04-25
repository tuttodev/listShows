import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_TV_SHOWS_URI_BASE } from '../common/Constants';
import {Spinner} from 'react-bootstrap';
import TemplateTvShowDetail from '../components/TemplateTvShowDetail';

const ShowDetail = () => {
    const idTvShow = useParams().id;
    const [show, setShow] = useState({});
    const [loadingShow, setLoadingShow] = useState(true);

    useEffect(() => {

        const fecthTvShow = async () => {
            setLoadingShow(true);
            const res = await axios.get(`${API_TV_SHOWS_URI_BASE}shows/${idTvShow}?embed=episodes`);
            console.log(res.data);
            
            if(res.status === 200){
                setShow(res.data);
            }

            setLoadingShow(false);
        }
        fecthTvShow();

    }, [idTvShow]);


    return (
        <div className='container mt-3'>
            {
                loadingShow ? 
                    <div className='text-center'>
                        <Spinner animation='border'/>
                    </div>
                : <TemplateTvShowDetail show={show} />
            }
        </div>
    )
}

export default ShowDetail;
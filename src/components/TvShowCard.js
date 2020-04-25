import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const TvShowCard = ({show: {id, image, name, language, genres}}) => (
    <div className='m-1'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image !== null ? image.medium : 'https://x.kinja-static.com/assets/images/logos/placeholders/default.png'} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <span className='d-block text-muted'>Idioma: {language}</span>
                    <span className='d-block text-muted'>Generos: {genres.join()}</span>
                </Card.Text>
                <Button variant="primary">
                    <Link to={`/show-detail/${id}`} className='text-white'>Ver más</Link>
                </Button>
            </Card.Body>
        </Card>
    </div>
)

export default TvShowCard;
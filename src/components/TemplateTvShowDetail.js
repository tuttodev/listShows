import React from 'react';
import {Image, Col, Row} from 'react-bootstrap';
import { Parser } from 'html-to-react';
import Episode from './Episode';

const parser = new Parser();

const TemplateTvShowDetail = ({show : {image, name, summary, _embedded: {episodes}}}) => {
    return (
        <div>
            <Row>
                <Col md={3} className='text-center'>
                    <Image 
                        src={image.medium}
                        className='img-fluid'
                        rounded/>
                </Col>
                <Col>
                    <span className='d-block'><span className='font-weight-bold'>Nombre:</span> {name}</span>
                    <span className='d-block font-weight-bold mt-3'>Descripción: </span>
                    <span className='d-block'>{parser.parse(summary)}</span>
                </Col>
            </Row>

            <h3 className='d-block mt-3 font-weight-bold mb-4'>Episodios: </h3>
            
            {
                episodes.map((episode, index) => 
                    <Episode 
                        key={index} 
                        episode={episode} 
                    />
                )
            }
        </div>
    )
}

export default TemplateTvShowDetail;
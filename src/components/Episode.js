import React from 'react';
import {Image, Media} from 'react-bootstrap';
import { Parser } from 'html-to-react';
const parser = new Parser();

const Episode = ({episode: {image, name, summary}}) => (
    <div className='mb-3 border p-2'>
        <Media>
            <Image
                width={70}
                height={70}
                className="mr-3"
                src={image !== null ? image.medium : 'https://www.randschemicals.com/wp-content/themes/randschemical/images/di.png'}
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5 className='font-weight-bold'>{name}</h5>
                <span>
                {parser.parse(summary)}
                </span>
            </Media.Body>
        </Media>
    </div>
)

export default Episode;
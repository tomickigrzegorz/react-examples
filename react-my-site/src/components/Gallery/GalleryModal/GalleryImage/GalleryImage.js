// <img src="small.jpg" srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320w" sizes="100vw" alt="A rad wolf" />
import React, { Fragment, Component } from 'react';
import Spinner from '../../../UI/Spinner/Spinner';

class GalleryImage extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500);
    }

    render() {
        if (this.state.loading) {
            return <Spinner />
        }
        let images = '';
        const jsonFile = require(`../../../../data/gallery/${this.props.folderName}.json`);

        images = jsonFile.map((image, index) => {
            const imageNameAndFolder = `${this.props.folderName}/${image.img}`;
            let srcImage = `images/gallery/1000/${imageNameAndFolder}`;
            let srcSetImage = `
                images/gallery/1000/${imageNameAndFolder} 1000w, 
                images/gallery/800/${imageNameAndFolder} 800w, 
                images/gallery/600/${imageNameAndFolder} 600w, 
                images/gallery/550/${imageNameAndFolder} 550w, 
                images/gallery/440/${imageNameAndFolder} 440w, 
                images/gallery/300/${imageNameAndFolder} 300w
            `;
            return (
                <figure key={index}>
                    <img
                        src={srcImage}
                        srcSet={srcSetImage}
                        sizes="100vw"
                        alt={image.img} />
                </figure>
            )
        });

        return (
            <Fragment>
                {images}
            </Fragment>
        )
    };
};

export default GalleryImage;
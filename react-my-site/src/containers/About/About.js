import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TopImage from 'Components/TopImage/TopImage';
import Context from 'Components/Context/Context';

import text from 'Data/textDescription';

const ActiveClassName = {
    maxWidth: '900px',
    margin: 'auto'
};

class AboutPage extends Component {

    componentDidMount() {
        document.title = "Kontakt - 'fotograf Warszawa, Lublin, Chełm', zdjęcia ślubne, reportaż, przygotowania, wesele, zdjęcia rodzinne, dziecięce";
    }

    render() {
        return (
            <Fragment>
                <TopImage paralax='IMG_0661.jpg' />
                <Context>{text.about.a}</Context>
                <div className="center" style={ActiveClassName} dangerouslySetInnerHTML={{ __html: text.about.b }} />  
            </Fragment>
        );
    }
}

AboutPage.propTypes = {
    description: PropTypes.string
};

export default AboutPage;
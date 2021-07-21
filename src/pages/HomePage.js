import React, { Component } from 'react';
import Header from './HomePage/components/Header/Header';
import Footer from './HomePage/components/Footer/Footer';
import LocationContainer from './HomePage/components/LocationContainer/LocationContainer';
class HomePage extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <LocationContainer />
                <Footer />
            </React.Fragment>
        )
    }
}

export default HomePage;

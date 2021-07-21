import { Component } from 'react';
import Header from './HomePage/components/Header/Header';
class HomePage extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header />
        )
    }
}

export default HomePage;
import React, {Component} from 'react';
import Header from './HomePage/components/Header/Header';
import Footer from './HomePage/components/Footer/Footer';

import SearchBox from './HomePage/components/SearchBox/SearchBox';

class HomePage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;

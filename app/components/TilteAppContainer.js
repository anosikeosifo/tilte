import { Provider, connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import Welcome from './Welcome';
import Footer from './Footer';
import UserActionCreators from '../actions/UserActionCreators';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  viewConfig: {
  },
  feedData: [],
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(UserActionCreators.getCurrentUser())
});

class TilteAppContainer extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    //conditionally render the landing or welcome page, dpending on if the user is logged in.
    return (
      <section className='container__wrap'>
        <Welcome user={ this.props.currentUser } viewConfig={ this.props.viewConfig } feedItems = { this.props.feedData } />
        <Footer/>
      </section>
    );
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TilteAppContainer);

TilteAppContainer.propTypes = {
  currentUser: PropTypes.object,
}

export default AppContainer;

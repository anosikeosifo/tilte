import { Provider, connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import { fetchConfigData } from '../actions/ConfigActionCreators';

const mapStateToProps = (state) => ({
  appData: state.appData
});

const mapDispatchToProps = (dispatch) => ({
  getAppData: () => dispatch(fetchConfigData())
});


class TilteAppContainer extends Component {
  componentDidMount() {
    this.props.getAppData();
  }

  render() {
    let appData = this.props.children && React.cloneElement(this.props.children, {
      appData: this.props.appData,
    });

    return appData;
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TilteAppContainer);

TilteAppContainer.propTypes = {
  currentUser: PropTypes.object,
}

export default AppContainer;

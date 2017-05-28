import { Provider, connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import { fetchConfigData, setActiveModal } from '../core/CoreActionCreators';
import { checkLoggedInStatus } from '../authentication/AuthActionCreators';
import ModalConductor from '../core/components/ModalConductor';
import classNames from 'classnames';

const mapStateToProps = (state) => ({
  configData: state.configData,
});

const mapDispatchToProps = (dispatch) => ({
  getLoggedInStatus: () => dispatch(checkLoggedInStatus()),
  getConfigData: () => dispatch(fetchConfigData()),
  setCurrentModal: (modalName) => dispatch(setActiveModal(modalName))
});


class TilteAppContainer extends Component {
  componentWillMount() {
    this.props.getLoggedInStatus();
    this.props.getConfigData();
  }

  componentDidUpdate() {
    document.body.style = this.props.configData.currentModal ? 'overflow:hidden' : ''
  }

  render() {
    let configData = this.props.children && React.cloneElement(this.props.children, {
      configData: this.props.configData,
      setCurrentModal: this.props.setCurrentModal,
    });

    let layoutClass = classNames({
      'app__root': true,
      'active__modal': this.props.configData.currentModal,
    });

    return(
      <div className={ layoutClass }>
        <ModalConductor currentModal={ this.props.configData ? this.props.configData.currentModal : null } />
        { configData }
      </div>
    );
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(TilteAppContainer);

TilteAppContainer.propTypes = {
  currentUser: PropTypes.object,
}

export default AppContainer;

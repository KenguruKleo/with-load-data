import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// send actionLoadData, and render component only if checkDataLoading return true
const withLoadData = ({ actionLoadData, checkIsDataLoaded }) => WrappedComponent => {
    class HOCComponent extends Component {
        componentDidMount() {
            this.props.actionLoadData({ componentProps: this.props });
        }

        render() {
            if (this.props.isDataLoaded) {
                return <WrappedComponent {...this.props} />;
            }
            return null;
        }
    }

    HOCComponent.propTypes = {
        actionLoadData: PropTypes.func.isRequired,
        isDataLoaded: PropTypes.bool.isRequired,
    };

    const mapStateToProps = state => ({
        isDataLoaded: checkIsDataLoaded(state)
    });

    return connect(mapStateToProps, { actionLoadData })(HOCComponent);
};

export default withLoadData;

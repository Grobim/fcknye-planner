import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Events from 'components/Events';

import { fetchEvents } from 'actions/events';

const mapStateToProps = ({ plannerApp: { events: { data } } }) => ({
  isLoading: !data,
  events: data
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => {
    dispatch(fetchEvents());
  },
  onFabClick: () => {
    console.log('onFabClick');
  }
});

class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return <Events {...this.props} />;
  }
}

EventsContainer.propTypes = {
  fetchEvents: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);

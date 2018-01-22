/**
 * This module provides react components to be used
 * severside to render montages.
 * @module metis-backend/utils/react-components
 */


import React, {Component} from 'react';/* eslint no-unused-vars : 0 */
import PropTypes from 'prop-types';

export class TranslationsProvider extends Component {

  static childContextTypes = {
    t: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  getChildContext = () => ({
    t: this.t
  })

  /**
   * @todo this is a hook for a translation provider for server-side rendering
   */
  t = key => key;


  render() {
    const {children} = this.props;
    return (
      <section className="translations-provider">
        {children}
      </section>
    );
  }
}

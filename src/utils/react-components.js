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
   * @todo hook translation provider key to server-side translations
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

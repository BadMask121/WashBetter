import React, {Component} from 'react';
import BookWasher from '@src/components/screens/BookWasher';
export default class extends Component {
  render() {
    return <BookWasher {...this.props} />;
  }
}

import React, { Component } from 'react';
import {connect} from 'react-redux';

class Page extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Page Title
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pages: state.page,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

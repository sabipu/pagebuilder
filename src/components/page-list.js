import React, {Component} from 'react';
import { connect } from 'react-redux';

class PageList extends Component {
  render() {
    const {pages} = this.props

    const pageTitles = pages.map((page, index) => {
      return (
        <li key={index}>{page.title}</li>
      )
    })

    return (
      <div className={'page-list'}>
        <h1>All Pages:</h1>
        <ul>
          {pageTitles}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pages: state.page
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageList);

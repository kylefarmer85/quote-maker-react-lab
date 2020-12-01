import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { downvoteQuote, upvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => {
    return this.props.quotes.map(quote => {
      return <QuoteCard quote={quote} key={quote.id} downvoteQuote={this.props.downvoteQuote} upvoteQuote={this.props.upvoteQuote} removeQuote={this.props.removeQuote} />
    })
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {
                this.renderQuotes()
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {downvoteQuote, upvoteQuote, removeQuote})(Quotes);

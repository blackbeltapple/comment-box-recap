import React from 'react';
//import {render} from 'react-dom';

const CommentForm = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      body: ''
    };
  },
  handleName: function (event) {
    this.setState({
      name: event.target.value
    })
  },
  handleBody: function (event) {
    this.setState({
      body: event.target.value
    })
  },
  handleSubmit: function (event) {
    event.preventDefault();
    console.log('handlesubmit', this.state.name, this.state.body);
    this.props.addComment({
      name: this.state.name,
      body: this.state.body
    });
  },
  render: function () {

    return (
      <div className='box' >
        <form onSubmit={this.handleSubmit}>
          <label className="label">Name</label>
        <p className="control">
          <input className="input"
            type="text" placeholder=""
            value={this.state.name}
            onChange={this.handleName}
          />
        </p>
        <label className="label">Message</label>
        <p className="control">
          <textarea
            className="textarea"
            onChange={this.handleBody}>
          </textarea>
        </p>
          <button type="submit" className="button is-primary" >Submit</button>
        </form>
      </div>
    );
  }
});

export default CommentForm;

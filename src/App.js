import React, { Component } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
let marked = require('marked');

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editorValue: "## testing state value _markdown_\n\nhi Or... wait for it... **_both!_**"
    }
  }
  handleChange(e) {
    this.setState({
      editorValue: e.target.value
    });
  }
  handleMarkup(value) {
    let handleMarkup = marked(this.state.editorValue);
    return { __html: handleMarkup };
  }
  render() {
    const campIcon = <FontAwesomeIcon icon={faCampground} size="xs"/>
    return (
      <div className="App">
        <div style={{height: '2em'}}></div>
        <div className="editor-container">
          <header className="editor-header">
            <span className="camp-icon">
              {campIcon}
            </span>
          <h4 className="header-text">Editor</h4>
        </header>
        <textarea
          id="textarea"
          value={this.state.editorValue}
          onChange={this.handleChange.bind(this)}>
        </textarea>
        </div>
        <div className="previewer-container">
          <header className="previewer-header">
            <span className="camp-icon">
              {campIcon}
            </span>
          <h4 className="header-text">Previewer</h4>
        </header>
        <div id="preview">
          <span dangerouslySetInnerHTML={this.handleMarkup()}></span>
        </div>
        </div>
      </div>
    );
  }
}

export default App;

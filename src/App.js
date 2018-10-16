import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
let marked = require('marked');


marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: true,
  smartLists: true
})

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      editorValue: placeholder
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
        <div className="editor-container">
          <header className="editor-header">
        <span className=" camp-icon">{campIcon}</span>
        <h4 className="header-text">Editor</h4>
        </header>
          <textarea
            id="editor"
            value={this.state.editorValue}
            onChange={this.handleChange.bind(this)} >
          </textarea>
        </div>

        <div className="previewer-container">
          <header className="previewer-header">
            <span className="camp-icon">{campIcon}</span>
            <h4 className="header-text">Previewer</h4>
          </header>
          <div id="preview-container">
            <span id="preview" dangerouslySetInnerHTML={this.handleMarkup()}></span>
          </div>
        </div>
      </div>
    );
  }
};
const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`



//
// ReactDOM.render(<App />, document.getElementById('app'));

export default App;

import React from "react";
import "./App.css";

import marked from "marked";

const options = {
  gfm: true,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(event) {
    this.setState((state) => ({
      input: event.target.value,
      output: marked(event.target.value, options),
    }));
  }

  render() {
    return (
      <div id="app-wraper">
        <div id="page-title">
          <h1 id="title">MarkDown Previewer</h1>
          <h6 id="author">coded by cody</h6>
        </div>
        <div id="editor-preview-container">
          <textarea
            id="editor"
            onChange={this.handleEditorChange}
            value={this.state.input}
          ></textarea>
          <div id="preview">{this.state.output}</div>
        </div>
      </div>
    );
  }
}

export default App;

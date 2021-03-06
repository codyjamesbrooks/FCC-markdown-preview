import React from "react";
import "./App.css";
// marked function
import marked from "marked";

// import the default textarea text
import defaultText from "./defaultText";

// define variable to hold function for the dangerouslySetInnerHTML.
let createMarkup;

// options object will be used to set the return from marked JS function.
const options = {
  baseUrl: null,
  breaks: true,
  gfm: true,
  headerIds: false,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  walkTokens: null,
  xhtml: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultText,
      output: marked(defaultText, options),
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(event) {
    // When the text area changes, update the input to reflect the change. Also
    // update the state.output variable with the output from the marked function
    this.setState({
      input: event.target.value,
      output: marked(event.target.value, options),
    });
  }

  render() {
    // process the html markup in this.state.output (which has already been converted to
    // html using marked function
    createMarkup = () => {
      return { __html: this.state.output };
    };
    return (
      <div id="app-wraper">
        <div id="page-title">
          <h1 id="title">Markdown Previewer</h1>
          <h6 id="author">coded by cody</h6>
        </div>
        <div id="editor-preview-container">
          <textarea
            id="editor"
            onChange={this.handleEditorChange}
            value={this.state.input}
          ></textarea>
          <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    );
  }
}

export default App;

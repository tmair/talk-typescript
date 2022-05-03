import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";
import Highlight from "reveal.js/plugin/highlight/highlight.esm";
import SpeakerNotes from "reveal.js/plugin/notes/notes.esm";

import "reveal.js/dist/reveal.css";
import "./theme/theme.css";

import "highlight.js/styles/hybrid.css";

Reveal.initialize({
  controls: true,
  // Push each slide change to the browser history
  history: true,
  center: false,
  plugins: [
    // Interpret Markdown in <section> elements
    Markdown,
    // Syntax highlight for <code> elements
    Highlight,
    // Speaker notes
    SpeakerNotes,
  ],
});

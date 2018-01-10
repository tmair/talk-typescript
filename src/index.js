import * as head from 'headjs';
import * as Reveal from 'reveal.js';

import 'reveal.js/css/reveal.css';
import './theme/theme.css';

import 'highlight.js/styles/hybrid.css';

var link = document.createElement( 'link' );
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
	document.getElementsByTagName( 'head' )[0].appendChild( link );

Reveal.initialize({
    // Push each slide change to the browser history
    controls: true,
	history: true,
    center: false,
    dependencies: [
         // Interpret Markdown in <section> elements 
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
 
        // Syntax highlight for <code> elements 
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

        // Speaker notes
		{ src: 'plugin/notes/notes.js', async: true }
    ]
});
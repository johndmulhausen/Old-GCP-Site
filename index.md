---
layout: cloud
title: Tech Demo for GH-Pages + Markdown + Jekyll + DevSite theme
toc: main
---

Testing Markdown + Includes + Submoduled templates

## Included Markdown content

{% include _testinclude.md %}

## CSS Tests 

[Grey Button](http://www.google.com){: class="button"}
[Red Button](http://www.google.com){: class="button button-red"}
[Blue Button](http://www.google.com){: class="button button-blue"}
[Green Button](http://www.google.com){: class="button button-green"}

Important: This is important.

### <pre>-using codeblock

<pre class="prettyprint lang-yaml">toc:
- title: "Testing"
  path: "/docs/test"
</pre>

### Indent-using codeblock
    var s = "JavaScript syntax highlighting";
    alert(s);
{: class="prettyprint lang-javascript" }

### Fenced codeblock
```
s = "Python syntax highlighting"
print s
```
{: class="prettyprint lang-python"}

### Asides

This is a note.
{: class="note"}

This is a warning
{: class="warning" }

This is special.
{: class="special" }

## Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## Last Build

[![Build Status](https://travis-ci.org/GoogleDevDocs/googledevdocs.github.io.svg?branch=master)](https://travis-ci.org/GoogleDevDocs/googledevdocs.github.io)

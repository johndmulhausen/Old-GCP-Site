---
layout: cloud
title: Tech Demo for GH-Pages + Markdown + Jekyll + DevSite theme
toc: main
---
{% assign bigvid="ytT2-kL9v2o" %}
{% assign videoid1="22n06z0rq4c" %}
{% assign videoid2="9rlMOb93HDE" %}
{% assign topicurl1="https://developers.google.com/appengine/articles/deferred" %}
{% assign topictitle1="Background work with the deferred library" %}
{% assign topicurl2="http://www.google.com/events/io/2010/sessions/high-throughput-data-pipelines-appengine.html" %}
{% assign topictitle2="Building high-throughput data pipelines with Google App Engine" %}
{% assign topicurl3="https://code.google.com/p/appengine-pipeline/" %}
{% assign topictitle3="Google App Engine Pipeline API" %}
{% assign sampleurl3="https://github.com/GoogleCloudPlatform/appengine-last-across-the-finish-line-python" %}
{% assign sampletitle3="Last Across the Finish Line (Python)" %}
{% assign sotag1="google-app-engine" %}
{% assign sotag2="task-queue" %}
{% include sidebar.html %}

{% include jswidgets.html %}
{{pagetoc}}

## Included Markdown content

Testing Markdown & Includes & Submoduled templates...

{% include _testinclude.md %}

Test 1

## CSS Tests 

### Buttons

[Grey Button](http://www.google.com){: class="button"}
[Red Button](http://www.google.com){: class="button button-red"}
[Blue Button](http://www.google.com){: class="button button-blue"}
[Green Button](http://www.google.com){: class="button button-green"}

### Asides

This is a note.
{: class="note"}

This is a warning
{: class="warning" }

This is special.
{: class="special" }

This warrants caution.
{: class="caution" }

## Code snippets

### pre-using codeblock

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

### Git sample

{% assign gitAccount = "GoogleCloudPlatform" %}
{% assign gitRepo = "appengine-guestbook-python" %}
{% assign gitFile = "guestbook.py" %}
{% assign regionTag = "region" %}
{% assign gitCommit = "c9f4e90b07f13e3bda886c20cb824e1fa3cf7d0f" %}
{% assign lang="python" %}
{% include gitsnippet.html %}

## Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Last Build

[![Build Status](https://travis-ci.org/GoogleDevDocs/googledevdocs.github.io.svg?branch=master)](https://travis-ci.org/GoogleDevDocs/googledevdocs.github.io)

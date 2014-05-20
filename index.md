---
layout: cloud
title: Tech Demo for GH-Pages + Markdown + Jekyll + DevSite theme
toc: main
---

Testing Markdown + Includes + Submoduled templates

{% include _testinclude.md %}

[Button](http://www.google.com){: class="button"}
[Red Button](http://www.google.com){: class="button button-red"}
[Blue Button](http://www.google.com){: class="button button-blue"}

Important: This is important.

{% highlight YAML %}
toc:
- title: "Testing"
  path: /docs/test
{% endhighlight %}

This is a note.
{: class="note"}

This is a warning
{: class="warning" }

This is special.
{: class="special" }

#### Last Build

[![Build Status](https://magnum.travis-ci.com/GoogleCloudPlatform/docs.svg?token=9opyxGM94DZFoFqawuGn&branch=gh-pages)](https://magnum.travis-ci.com/GoogleCloudPlatform/docs)

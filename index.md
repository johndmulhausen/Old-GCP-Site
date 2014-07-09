---
layout: cloud
title: Tech Demo for GH-Pages + Markdown + Jekyll + DevSite theme
toc: book
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

Testing Markdown, Includes, and Submoduled templates.

{% include _testinclude.md %}

Testing Travis building into "build" branch & GCE replication.

Test message #9

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

## Tabs

### HTML 

      <section class="kd-tabbed-horz" id="osTabBar" style="visibility: hidden;">
        <article id="linMacTab">
          <header>Linux/Mac OS X</header>
          <ol>
            <li>
              <p>Download and install Google Cloud SDK by running the following command in your shell or Terminal:</p>
              <pre>curl # | bash</pre>
              <p style="margin-top: 5px;"><small>(Or, you can download <a href="#">#</a> or <a href="#">#</a>, unpack it, and launch the <code>./google-cloud-sdk/install.sh</code> script.)</small></p>
            </li>
            <li>
              <p>Restart your shell or Terminal.</p>
            </li>
            <li>
              <p>Authenticate to Google Cloud Platform by running <code>gcloud auth login</code>.</p>
            </li>
          </ol>
        </article>
        <article id="winTab">
          <header>Windows</header>
   
          <a href="#"><p class="button-blue button"
          style="font-size: 115%; padding: 10px 15px;">Download the Google Cloud
          SDK installer for Windows</p></a>

          <ol>
            <li>
              <p>
                Launch the downloaded <code>#</code> installer
                and follow the prompts.
              </p>
            </li>
            <li>
              <p>
                When the installation finishes, open a command prompt (<code>cmd.exe</code>)
                or the <span class="uitext">Google Cloud SDK Shell</span> from Desktop or
                Start Menu.
              </p>
              
              <aside class="caution">If you're planning to use <code>gcutil ssh</code>
                functionality, create the directory <code>%HOMEPATH%\.ssh</code> if it
                doesn't exist. For example, you can use the command 
                <code>mkdir %HOMEPATH%\.ssh</code> to create it.
              </aside>
            </li>
            <li>
              <p>
                Authenticate to Google Cloud Platform by running
                <code>gcloud auth login</code>.
              </p>
            </li>
          </ol>
        </article>
        <article id="alternativeTab">
          <header>Alternative methods</header>
          <p>
            Here are the alternative methods for installing Google Cloud SDK.
          </p>
          <ul>
            <li><a href="#install-cygwin">Installation on Windows using Cygwin</a></li>
            <li><a href="#install-archive">Installation from an archive (.zip)
            on Windows</a></li>
            <li><a href="#install-docker">Installation from a base Docker image</a></li>
          </ul>
          
          <h2 id="install-cygwin">Installation on Windows using Cygwin</h2>
          <ol>
            <li>
              <p>Download and install a <a href="http://cygwin.com/setup-x86.exe"
              target="_blank">32-bit version of Cygwin</a>, following
              <a href="http://cygwin.com/install.html" target="_blank">Cygwin's
              installation instructions</a>. While installing Cygwin, be sure to select
              <code>openssh</code>, <code>curl</code> and the latest 2.7.x version of
              <code>python</code> from the package selection screen.</p>

              <aside class="caution">Warning: 64-bit version of Cygwin is unsupported
              due to a <a href="http://stackoverflow.com/questions/18947163/uuid-python-import-fails-on-cygwin-64bits" target="_blank">
              bug</a> in Python 2.7.</aside>
            </li>
            <li>
              <p>Launch Cygwin from Start &rarr; All Programs &rarr; Cygwin &rarr; Cygwin
                Terminal.</p>
            </li>
            <li>
              <p>Download and install Google Cloud SDK by running the following command
              in your Cygwin Terminal:</p>
              <pre>curl # | bash</pre>
              <p style="margin-top: 5px;"><small>
                (Or, you can download
                <a href="#">#</a> or
                <a href="#">#</a>, unpack
                it, and launch the <code>./google-cloud-sdk/install.sh</code> script.)
              </small></p>
            </li>
            <li>
              <p>
                Restart Cygwin Terminal, and authenticate to Google Cloud Platform
                by running
                <code>gcloud auth login</code>.
              </p>
            </li>
          </ol>

          <h2 id="install-archive">Installation from an archive (.zip) on Windows</h2>
          <ol>
            <li>
              <p>
                Download
                <a href="#">#</a>
                and extract the contents (right-click the file and choose "Extract
                All...").
              </p>
            </li>
            <li>
              <p>
                Launch the <code>google-cloud-sdk\install.bat</code> script and follow
                the installation prompts.
              </p>
            </li>
            <li>
              <p>
                When the installation finishes, restart the command prompt (
                <code>cmd.exe</code>) and authenticate to Google Cloud Platform by running
                <code>gcloud auth login</code>.
              </p>
            </li>
          </ol>

          <h2 id="install-docker">Installation from a base Docker image</h2>
          <ol>
            <li>
              <p>
                Get the Google Cloud SDK
                <a href="https://registry.hub.docker.com/u/google/cloud-sdk/" target="_blank">Docker image</a>:
                <pre>$ docker pull google/cloud-sdk</pre>
              </p>
            </li>
            <li>
              <p>
                Authenticate to Google Cloud Platform and save the OAuth 2.0
                credentials in <code>gcloud-config</code> volume.
                <pre>$ docker run -t -i --name gcloud-config google/cloud-sdk gcloud auth login

Go to the following link in your browser: ...
Enter verification code: ...</pre>
              </p>
            </li>
            <li>
              <p>
                Re-use the credentials from <code>gcloud-config</code> volume when running
                <code>gcloud</code> commands.
                <pre>$ docker run -t -i --volumes-from gcloud-config google/cloud-sdk gcloud compute instances list</pre>
              </p>
            </li>
          </ol>
          <p>
            For more information see
            <a href="https://registry.hub.docker.com/u/google/cloud-sdk/" target="_blank">
            "google/cloud-sdk" Docker image documentation</a>.
          </p>
        </article>
       </section>

### Markdown

* Node.js tab test
    * Testing tabs 1
* PYTHON tab test
    * Testing tabs 2
{: class="tabs" }

## Last Build

[![Build Status](https://travis-ci.org/GoogleDevDocs/googledevdocs.github.io.svg?branch=master)](https://travis-ci.org/GoogleDevDocs/googledevdocs.github.io)

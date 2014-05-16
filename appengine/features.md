---
layout: cloud
title: Overview of App Engine Features
toc: test
---
{% comment %}
Set the CSS rules for Feature, Description, and Supported Languages table cells, respectively.
{% endcomment %}
{% capture rtcss %} style="vertical-align: middle; width:10%; line-height: 17px;"{% endcapture %}
{% capture featurenamecss %} style="vertical-align: middle; width:20%; line-height: 17px;"{% endcapture %}
{% capture descriptioncss %} style="height:35px; width: 60%; line-height: 17px;"{% endcapture %}
{% capture langlinkcss %} style="vertical-align: middle;text-align: center; width: 5%; line-height: 17px;"{% endcapture %}
{% capture downloadlinkcss %} style="vertical-align: middle;text-align: center; line-height: 17px;"{% endcapture %}
{% capture plaincss %} style="vertical-align: middle; text-align: center;"{% endcapture %}

This page summarizes the various features of App Engine. A particular feature
may be available in all runtime languages, or only in a subset of languages.
While the functionality of a feature is usually constant across all runtimes
that offer it, there can be exceptions. In the tables that follow, each
feature is described in general terms, followed by links that will take you to
the language-specific pages that will cover the details.

<h2 id="Langs_And_Runtimes">Languages and runtimes</h2>

You can write an App Engine application in the following languages. Each language has its own runtime and SDK that contains tools for deploying your app, and for developing and testing it locally.

<table>
<thead>
<tr>
<th>Language</th>
<th colspan="4">Runtime</th>
</tr>
</thead>
<tbody>
<tr{{plaincss}}>
<td{{rtcss}} id="java">Java</td>
<td{{descriptioncss}}>The Java runtime executes your code in a Java 7 environment.</td>
<td{{downloadlinkcss}}><a href="http://code.google.com/p/googleappengine/wiki/SdkForJavaReleaseNotes">Release Notes</a></td>
<td{{downloadlinkcss}}><a href="/appengine/docs/java/gettingstarted/introduction">Documentation</a></td>
<td{{downloadlinkcss}}><a href="/appengine/downloads#Google_App_Engine_SDK_for_Java">SDK</a></td>
</tr>
<tr{{plaincss}}>
<td{{rtcss}} id="python">Python</td>
<td{{descriptioncss}}>The Python runtime executes your code in a Python 2.7 environment.</td>
<td{{downloadlinkcss}}><a href="https://code.google.com/p/googleappengine/wiki/SdkReleaseNotes">Release Notes</a></td>
<td{{downloadlinkcss}}><a href="/appengine/docs/python/gettingstartedpython27/introduction">Documentation</a></td>
<td{{downloadlinkcss}}><a href="/appengine/downloads#Google_App_Engine_SDK_for_Python">SDK</a></td>
</tr>
<tr{{plaincss}}>
<td{{rtcss}} id="php">PHP<br><sup>Preview</sup></td>
<td{{descriptioncss}}>The PHP runtime executes your code in a PHP 5.4 environment. This runtime is in Preview.</td>
<td{{downloadlinkcss}}><a href="https://code.google.com/p/googleappengine/wiki/SdkReleaseNotes">Release Notes</a></td>
<td{{downloadlinkcss}}><a href="/appengine/docs/php/gettingstarted/introduction">Documentation</a></td>
<td{{downloadlinkcss}}><a href="/appengine/downloads#Google_App_Engine_SDK_for_PHP">SDK</a></td>
</tr>
<tr{{plaincss}}>
<td{{rtcss}} id="go">Go<br><sup>Experimental</sup></td>
<td{{descriptioncss}}>The Go runtime executes your code in a Go 1.2 environment. This runtime is Experimental.</td>
<td{{downloadlinkcss}}><a href="http://code.google.com/p/googleappengine/wiki/SdkForGoReleaseNotes">Release Notes</a></td>
<td{{downloadlinkcss}}><a href="/appengine/docs/go/gettingstarted/introduction">Documentation</a></td>
<td{{downloadlinkcss}}><a href="/appengine/downloads#Google_App_Engine_SDK_for_Go">SDK</a></td>
</tr>
</tbody>
</table>


## Generally available (GA) features

GA features are publicly available and are covered by App Engine's SLA and deprecation policy. The implementation of a GA feature is stable; any changes made to it will be backwards-compatible. The tables below group GA features by the general functions they serve.

### Data storage, retrieval, and search

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th colspan="4">Supported Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td{{featurenamecss}} id="cloudsql">Google Cloud SQL</td>
<td{{descriptioncss}}>A fully-managed web service that allows you to create, configure, and use relational databases that live in Google's cloud.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/cloud-sql/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/cloud-sql/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/cloud-sql/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/cloud-sql/">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="datastore">Datastore</td>
<td{{descriptioncss}}>A schemaless object datastore providing robust, scalable storage for your web application, a rich data modeling API, and a SQL-like query language called GQL.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/ndb">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/datastore">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/datastore">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="blobstore">Blobstore</td>
<td{{descriptioncss}}>Allows your application to serve large data objects, such as video or image files, that are too large for storage in the Datastore service.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/blobstore/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/blobstore/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/blobstore/">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="search">Search</td>
<td{{descriptioncss}}>Allows your application to perform Google-like searches over structured data such as: plain text, HTML, atom, numbers, dates, and geographic locations.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/search/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/search/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/search/">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="memcache">Memcache</td>
<td{{descriptioncss}}>A distributed, in-memory data cache that can be used to greatly improve application performance.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/memcache/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/memcache/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/memcache/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/memcache/">Go</a></td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="dedicatedmemcache">Dedicated Memcache</td>
<td{{descriptioncss}}>Provides a fixed cache capacity assigned exclusively to your application.</td>
<td{{langlinkcss}}><a href="https://developers.google.com/appengine/docs/adminconsole/memcache">PHP</a></td>
<td{{langlinkcss}}><a href="https://developers.google.com/appengine/docs/adminconsole/memcache">Python</a></td>
<td{{langlinkcss}}><a href="https://developers.google.com/appengine/docs/adminconsole/memcache">Java</a></td>
<td{{langlinkcss}}><a href="https://developers.google.com/appengine/docs/adminconsole/memcache">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="logs">Logs</td>
<td{{descriptioncss}}>Provides programmatic access to application and request logs from within your application.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/logs/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/logs/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/logs/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/logs/">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="migrationtool">HRD Migration Tool</td>
<td{{descriptioncss}}>Migrates application data stored in the Blobstore or the deprecated Master/Slave Datastore into the new <a href="#datastore">Datastore</a>.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/migration#Using_the_Migration_Tool">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/migration#Using_the_Migration_Tool">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/migration#Using_the_Migration_Tool">Go</a></td>
</tr>
</tbody>
</table>

### Communications

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th colspan="4">Supported Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td{{featurenamecss}} id="channel">Channel</td>
<td{{descriptioncss}}>Creates a persistent connection between your application and Google servers, so you can send messages to JavaScript clients in real time without "polling."</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/channel">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/channel">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/channel/">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="Endpoints">Google Cloud Endpoints</td>
<td{{descriptioncss}}>Enables automatic generation of APIs, making it easier to create a web backend for web clients and mobile clients such as Android or Apple's iOS.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/endpoints">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/endpoints">Java</a></td>
<td{{langlinkcss}}>---</td>
</tr>
<tr>
<td{{featurenamecss}} id="mail">Mail</td>
<td{{descriptioncss}}>Sends email messages on behalf of administrators and users with Google Accounts, and receives mail at various addresses.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/mail/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/mail/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/mail/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/mail/">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="urlfetch">URL Fetch</td>
<td{{descriptioncss}}>Uses Google's networking infrastructure to efficiently issue HTTP and HTTPS requests to URLs on the web.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/urlfetch/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/urlfetch/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/urlfetch/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/urlfetch/">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="xmpp">XMPP</td>
<td{{descriptioncss}}>Enables an application to send and receive chat messages to and from any XMPP-compatible chat messaging service.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/xmpp">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/xmpp">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/xmpp">Go</a></td>
</tr>
</tbody>
</table>

### Process management

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th colspan="4">Supported Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td{{featurenamecss}} id="taskqueue">Task Queue</td>
<td{{descriptioncss}}>Allows applications to perform work outside of a user request, and organize that work into small, discrete units, called "tasks," to be executed later.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/taskqueue">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/taskqueue">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/taskqueue">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/taskqueue">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="backends">Scheduled Tasks</td>
<td{{descriptioncss}}>Allows applications to configure regularly scheduled tasks that operate at defined times or regular intervals.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/config/cron">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/config/cron">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/config/cron">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/config/cron">Go</a></td>
</tr>
</tbody>
</table>

### Computation

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th colspan="4">Supported Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td{{featurenamecss}} id="images">Images</td>
<td{{descriptioncss}}>Manipulates, combines, and enhances images, converts images between formats, and queries image metadata such as height and frequency of colors.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/images/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/images/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/images/">Go</a></td>
</tr>
</tbody>
</table>

### App configuration and management

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th colspan="4">Supported Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td{{featurenamecss}} id="appidentity">App Identity</td>
<td{{descriptioncss}}>Gives code access to the application identity; provides framework to assert this identity over OAuth.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/appidentity">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/appidentity">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/appidentity">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/reference">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="capabilities">Capabilities</td>
<td{{descriptioncss}}>Provides detection of outages and scheduled maintenance for specific APIs and services, so that your application may bypass them or inform your users.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/capabilities/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/capabilities/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/capabilities/">Go</a></td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="modules">Modules</td>
<td{{descriptioncss}}>Lets developers factor large applications into logical components that can share stateful services and communicate in a secure fashion.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/modules">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/modules">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/modules">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/modules">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="multitenancy">Multitenancy</td>
<td{{descriptioncss}}>Makes it easy to compartmentalize your data to serve many client organizations from a single instance of your application.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/multitenancy/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/multitenancy/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/multitenancy/">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="remote">Remote</td>
<td{{descriptioncss}}>Lets external applications transparently access App Engine services. For example, you can use Remote API to access a production datastore from an app running on your local machine.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/tools/remoteapi">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/tools/remoteapi">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/tools/uploadingdata">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="ssl">SSL for Custom Domains</td>
<td{{descriptioncss}}>Allows applications to be served via both HTTPS and HTTP via a custom domain instead of an appspot.com address.</td>
<td{{langlinkcss}}><a href="https://support.google.com/a/topic/2644333">PHP</a></td>
<td{{langlinkcss}}><a href="https://support.google.com/a/topic/2644333">Python</a></td>
<td{{langlinkcss}}><a href="https://support.google.com/a/topic/2644333">Java</a></td>
<td{{langlinkcss}}><a href="https://support.google.com/a/topic/2644333">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="trafficsplitting">Traffic Splitting</td>
<td{{descriptioncss}}>Allows you to roll out features for your app slowly over a period of time, and do A/B Testing. Traffic Splitting works by splitting incoming requests to different versions of your app.</td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/trafficsplitting">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/trafficsplitting">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/trafficsplitting">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/trafficsplitting">Go</a></td>
</tr>
<tr>
<td{{featurenamecss}} id="users">Users</td>
<td{{descriptioncss}}>Allows applications to sign in users with Google Accounts or OpenID, and address these users with unique identifiers.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/users/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/users/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/users/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/users/">Go</a></td>
</tr>
</tbody>
</table>

### Preview features

Features in preview are guaranteed to eventually become GA features in some future App Engine release, but while they are in preview their implementation may change in backward-incompatible ways. If a feature here is listed in *limited preview* it is not publicly available; access to a limited preview feature is by request only.

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th colspan="4">Supported Languages</th>
</tr>
</thead>
<tbody>
<tr{{plaincss}}>
<td{{featurenamecss}} id="gcslibrary">Google Cloud Storage Client Library</td>
<td{{descriptioncss}}>Lets your application read files from and write files to buckets in Google Cloud Storage, with with internal error handling and retry logic.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/googlestorage/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/googlecloudstorageclient/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/googlecloudstorageclient/">Java</a></td>
<td{{langlinkcss}}>Go&nbsp;(*)</td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="mapreduce">MapReduce</td>
<td{{descriptioncss}}>An optimized adaptation of the MapReduce computing model for efficient distributed computing over large data sets.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/java/dataprocessing/">Java</a></td>
<td{{langlinkcss}}>---</td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="sockets">Sockets</td>
<td{{descriptioncss}}>Enables support for outbound sockets using the language-specific, built-in libraries.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/sockets/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/sockets/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/sockets/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/sockets/">Go</a></td>
</tr>
</tbody>
</table>

(*) This feature is available but no documentation exists for it in this runtime.

## Experimental features

Experimental features may or may not become GA features in some future App Engine release, and their implementation may change in backward-incompatible ways. Experimental features are usually publicly available. However, if an experimental feature here is listed as *trusted tester* it is only available to a closed group of users, who are required to sign up to use it.

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th colspan="4">Supported Languages</th>
</tr>
</thead>
<tbody>
<tr{{plaincss}}>
<td{{featurenamecss}} id="sendgrid">Datastore Admin/Backup/Restore</td>
<td{{descriptioncss}}>Allows you to export or import data to or from your application's Datastore in the Admin Console.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/datastoreadmin">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/datastoreadmin">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/datastoreadmin">Go</a></td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="mapreduce-python">MapReduce</td>
<td{{descriptioncss}}>An optimized adaptation of the MapReduce computing model for efficient distributed computing over large data sets.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/dataprocessing">Python</a></td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}>---</td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="oauth">OAuth</td>
<td{{descriptioncss}}>Using Google Accounts and the OAuth API, any App Engine application can be an OAuth consumer.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/oauth/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/oauth/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/users/#Go_OAuth_in_Go">Go</a></td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="openid">OpenID</td>
<td{{descriptioncss}}>An open technology used for authenticating users across various web services. </td>
<td{{langlinkcss}}><a href="/appengine/docs/php/users/#PHP_Authentication_options">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/users/#Python_Authentication_options">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/users/#Java_Authentication_options">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/users/#Go_Authentication_options">Go</a></td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="pagespeed">PageSpeed</td>
<td{{descriptioncss}}>A family of tools that automatically optimizes the performance of your application.</td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/performancesettings#pagespeed">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/performancesettings#pagespeed">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/performancesettings#pagespeed">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/adminconsole/performancesettings#pagespeed">Go</a></td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="prospectivesearch">Prospective Search</td>
<td{{descriptioncss}}>A querying service that allows your application to match search queries against real-time data streams.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/prospectivesearch/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/prospectivesearch/">Java</a></td>
<td{{langlinkcss}}>---</td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="taskqueuerest">Task Queue REST API</td>
<td{{descriptioncss}}>Enables the use of an App Engine task queue over REST.</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/taskqueue/rest/">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/taskqueue/rest/">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/taskqueue/rest/">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/taskqueue/rest/">Go</a></td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="taskqueuetagging">Task Queue Tagging</td>
<td{{descriptioncss}}>Leases up to a specified number of tasks with the same tag from the queue for a specified period of time.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="/appengine/docs/python/taskqueue/queues#Queue_lease_tasks_by_tag">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/taskqueue/overview-pull#Java_Leasing_tasks">Java</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/go/taskqueue/reference#LeaseByTag">Go</a></td>
</tr>
<tr{{plaincss}}>
<td{{featurenamecss}} id="appstats">Appstats Analytics<br><sup>Trusted Tester</sup></td>
<td{{descriptioncss}}>Enables visualization and other analytics of data pertaining to the utilizaiton of your application.</td>
<td{{langlinkcss}}>---</td>
<td{{langlinkcss}}><a href="https://docs.google.com/a/google.com/spreadsheet/viewform?formkey=dDVZLWRvdlVzdDJyVndMZXRmaWwySkE6MQ#gid=0">Python</a></td>
<td{{langlinkcss}}><a href="https://docs.google.com/a/google.com/spreadsheet/viewform?formkey=dDVZLWRvdlVzdDJyVndMZXRmaWwySkE6MQ#gid=0">Java</a></td>
<td{{langlinkcss}}><a href="https://docs.google.com/a/google.com/spreadsheet/viewform?formkey=dDVZLWRvdlVzdDJyVndMZXRmaWwySkE6MQ#gid=0">Go</a></td>
</tr>
</tbody>
</table>

## Third-party services

Google partners with other companies to extend the capabilities of the App
Engine platform by offering helper libraries and documentation that make it easy
for your app to do things that Google did not build into the core
App Engine product. In addition to the helper libraries, these partners
sometimes include special offers for App Engine customers.

<table>
<thead>
<tr>
<th>Feature</th>
<th>Description</th>
<th colspan="4">Supported Languages</th>
</tr>
</thead>
<tbody>
<tr>
<td{{featurenamecss}} id="sendgrid">SendGrid (Email)</td>
<td{{descriptioncss}}>Use SendGrid's library to send emails from your app and you can see statistics on opens, clicks, unsubscribes, spam reports and more.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/mail/sendgrid">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/mail/sendgrid">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/mail/sendgrid">Java</a></td>
<td{{langlinkcss}}>---</td>
</tr>
<tr>
<td{{featurenamecss}} id="twilio">Twilio (SMS/Voice)</td>
<td{{descriptioncss}}>Enables your application to make and receive phone calls, send and receive text messages, and make VoIP calls from any phone, tablet, or browser.</td>
<td{{langlinkcss}}><a href="/appengine/docs/php/sms/twilio">PHP</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/python/sms/twilio">Python</a></td>
<td{{langlinkcss}}><a href="/appengine/docs/java/sms/twilio">Java</a></td>
<td{{langlinkcss}}>---</td>
</tr>
</tbody>
</table>

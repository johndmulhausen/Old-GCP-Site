---
layout: cloud
title: Redirect tester
---

<script type="text/javascript" src="../js/yaml.js"></script>
<script language="javascript">
$( document ).ready(function() {
  YAML.fromURL("../redirects.yaml",function(string){
    var errors = YAML.getErrors();
    if(errors.length == 0)
      document.getElementById("out").innerHTML = "Done! Took " + YAML.getProcessingTime() + " miliseconds.";
    else {
      document.getElementById("out").innerHTML = errors.join("<br>");
    }
  });
}
</script>

<pre id="out"></pre>

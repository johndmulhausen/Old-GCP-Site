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
      console.log("Done! Took " + YAML.getProcessingTime() + " miliseconds.");
      console.log(string);
    } else {
      console.log(document.getElementById("out").innerHTML = errors.join("<br>"));
    }
  });
});
</script>

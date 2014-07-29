---
layout: cloud
title: Redirect tester
---

<script type="text/javascript" src="../js/yaml.js"></script>
<script language="javascript">
$( document ).ready(function() {
  YAML.fromURL("../redirects.yaml",function(data){
    var errors = YAML.getErrors();
    if (errors.length == 0) {
      console.log("Done! Took " + YAML.getProcessingTime() + " miliseconds.");
      console.log(data);
      for(i=0;i<data.redirects.length;i++)
      {
        document.write(data.redirects[i].from + "=" data.redirects[i].to)
      }
    } else {
      console.log(document.getElementById("out").innerHTML = errors.join("<br>"));
    }
  });
});
</script>

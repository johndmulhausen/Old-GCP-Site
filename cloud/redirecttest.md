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
      console.log("Done! Took " + YAML.getProcessingTime() + " miliseconds. data.redirects.length=" + data.redirects.length );
      console.log(data);
      for(i=0;i<data.redirects.length)
      {
        if(data.redirects[i].from && data.redirects[i].to) {
          console.log("data.redirects[i].from=" + data.redirects[i].from + ", data.redirects[i].to=" + data.redirects[i].to);
        } else {
          console.log(data.redirects[i].toString())
        }
        //document.write(redirect.from + "=" redirect.to)
      }
    } else {
      console.log(document.getElementById("out").innerHTML = errors.join("<br>"));
    }
  });
});
</script>

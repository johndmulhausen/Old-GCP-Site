---
layout: cloud
title: Redirect tester
---
Testing 1, 2

<script type="text/javascript" src="../js/yaml.js"></script>
<script language="javascript">
$( document ).ready(function() {
  YAML.fromURL("../redirects.yaml",function(string){
    document.write(string);
  });
}
</script>

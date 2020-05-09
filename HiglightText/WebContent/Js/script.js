function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "Email.json", true);
    rawFile.onreadystatechange = function() 
    {
      if (rawFile.readyState === 4) 
      {
        var allText = rawFile.responseText;
        document.getElementById("searchtext").innerHTML = allText;
      }
    }
    rawFile.send();
  }
 function highlightSearch() 
 {
    var text = document.getElementById("query").value;
    var query = new RegExp("(\\b" + text + "\\b)", "gi");
 var e = document.getElementById("searchtext").innerHTML;
    var enew = e.replace(/(<span>|<\/span>)/igm, "");
//    document.getElementById("searchtext").innerHTML = enew;
//    var newe = enew.replace(query, "<span>$1</span>");
    document.getElementById("searchtext").innerHTML = query;
 }

 
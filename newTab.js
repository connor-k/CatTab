function getFact() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var resp = JSON.parse(xhr.responseText);
      if (resp !== undefined && resp !== null && resp["success"] == "true") {
        document.getElementById("factText").innerText = resp["facts"][0];
      }
    }
  }
  xhr.open("GET", "https://catfacts-api.appspot.com/api/facts", true);
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  getFact();
});

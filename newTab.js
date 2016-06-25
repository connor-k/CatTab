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

function getImage() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      resp = xhr.responseXML;
      document.body.style.backgroundImage = "url('" + resp.getElementsByTagName("url")[0].innerHTML + "')";
      document.getElementById("catImageAttribution").href = resp.getElementsByTagName("source_url")[0].innerHTML;
    }
  }
  xhr.open("GET", "https://thecatapi.com/api/images/get?format=xml&results_per_page=1", true);
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  getFact();
  getImage();
});

data = {}

function load() {
  readTextFile("SOLO")
}

function readTextFile(file) {
  var rawFile = new XMLHttpRequest()
  rawFile.open("GET", file, false)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText
        var match = allText.match(/distance":(.*?),/)

        // replace scientific notation with number so this can be json parsed
        allText.replace(match[1], Number(match[1]))
        data[file] = JSON.parse(allText)
      }
    }
  }
  rawFile.send(null)
}

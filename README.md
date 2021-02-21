## this doesn't work

`esa_data.js` will fetch remote json defined in `crontab.bash`

however the response body fails to `JSON.parse()` because it contains scientific notation without quotes around it

### todo

keep it simple at \<some hosting>, fetch the remote and host it as-is.

can use this regex to replace it with number on frontend:

```
var allText = rawFile.responseText
var match = allText.match(/distance":(.*?),/)
allText.replace(match[1], Number(match[1]))
```

## To add a new ESA probe:

todo

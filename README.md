## this doesn't work

`esa_data.js` will fetch remote json defined in `crontab.bash`

however the response body will not `JSON.parse()` because it contains scientific notation without quotes around it

### todo

at \<some hosting>, fetch the remote every 30 minutes, host the copy. 

fetch the file from frontend as raw text and convert to json (see `esa_data.js`)

## To add a new ESA probe:

todo

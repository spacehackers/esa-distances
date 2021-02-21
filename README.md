## To add a new ESA probe:

1. add probe feed to cronjob.bash

2. add probe name to .gitignore

3. add a `readTextFile(<probe_name>)` to `load()` method in `esa_data.js`

4. edit website code to use this data (#todo)

## Issues

esa feeds contain scientific notation for the `distance` field and so needs some munging to get it to be json parsable.

I don't have node on my web hosting or python 3 on my local, so for now this is a hack that puts the json data into an html page as body text. Other side will have to parse that response. (this might not work 😅 see todo)

Other side is still #todo

implementing cron job is still #todo this is not hosted yet

### todo

• fix my bluehost login, can't shell in currently
• move that regex shit to python and do it before saving file locally
• handle cache control headers with .htaccess instead of html

or alternatively:

keep it simple just fetch the file and save as is on bluehost side, move that regex shit to website frontend and sort it out there

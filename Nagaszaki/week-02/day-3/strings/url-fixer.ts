'use strict';
export{};

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let splitter: string[] = url.split("/");
splitter[splitter.indexOf("nevertellmethebots")] = "nevertellmetheodds";
splitter[splitter.indexOf("https")] = "https:";
console.log(splitter);
url = splitter.join("/");
console.log(url);

export=url;
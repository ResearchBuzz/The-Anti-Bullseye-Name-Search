# The-Anti-Bullseye-Name-Search

Google's search engine is not quite as uncluttered as it used to be. Nowadays searches for famous people can be a mess of results from Amazon, eBay, Pinterest, social networks, or news outlets. You can eliminate some of that by getting more specific with your search, but what if you don't know anything about the person? How do you start? 

You use The Anti-Bullseye Name Search. 

TABNS starts with the hypothesis that most name references on the Web are going to be in the format FIRSTNAME LASTNAME. Further, if that's the case, then eliminating that format will remove a lot of clutter from your search results. Therefore, TABNS takes a first and last name you specific and specifically excludes results of "FIRSTNAME LASTNAME" from your search, searching instead for "LASTNAME FIRSTNAME". 

In addition, TABNS also eliminates certain domains and outlets that are famous for showing up heavily in search results pages, including Amazon, eBay, Pinterest, LinkedIn, and Facebook. You can edit this line to add your own exclusions, if there are any domains that are the bane of your search life. You can also add keywords, if you need your search results weighted to certain types of content. 

Once TABNS has all your data it builds a Google search query and opens it in a new window. 

All you need for this to work is the HTML file and the JavaScript file in the same directory. The JavaScript doesn't do anything but format the query and toss it to Google. 



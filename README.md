# Simple statistic module

To save and monitor events. Based on Node, Angular and Chartjs.

Work in progress.

## Getting started

Edit and adapt "configuration.js".

Server side:

    $ git clone "..."
    $ cd web-stats
    $ npm install
    $ cd public
    $ bower install
    
    $ cd server
    $ node server.js
   
    
On client where you want to grab statistics:
    
    <script src="../public/bower_components/jquery/dist/jquery.js"></script>
    <script src="../public/bower_components/jquery-ui/jquery-ui.js"></script>
    <script src="../public/dist/Stats-embed.js"></script>
    
    stats.addEvent("document.loaded", {});
    stats.addEvent("instant-messaging.new-video-call", {});
    stats.addEvent("instant-messaging.error", {message: 'Error: ...'});
    
    // performed automatically every n milliseconds
    stat.sendDataBuffer();
    
Visualize datas and charts on:

    http://.../visualization/

         
## Screenshots


[[https://github.com/remipassmoilesel/web-stats/blob/master/images/screenshot_1.png|alt=Screenshot 1]]


[[https://github.com/remipassmoilesel/web-stats/blob/master/images/screenshot_2.png|alt=Screenshot 2]]
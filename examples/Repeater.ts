/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * This script can be very useful to understand how to listen to general chat
  * and how to get what is being said.
  *
  * Also note how to access inner composite object fields.
  *
  * Be Careful When listening to channel you are listening to everything
  * included what is said by the script itself. In the original version of this
  * script I used say() instead of error() and I got caught in a kind of endless
  * loop.
  *
  * Salahzar™
  * 
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/Repeater
  */

function httpresp(data) {
    if (data.err) {
        error('Error calling API: ' + data.err);
    } else {
        say('Server IP is ' + data.http_response);
    }
}

function onClick() {
    httpRequest({
        url: 'http://api.exip.org/?call=ip',
        callback: 'httpresp'
    });
}

handlerCreate({
    name: 'onClick',
    channel: 'direct',
    message: 'clickStart'
});
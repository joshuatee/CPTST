/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * Prerequisites.
 * -------------------------------------------
 * Add the example script to a prefab that is present in-world.
 *
 * Expected Result.
 * -------------------------------------------
 * Clicking on the prefab with this script will make an external API call
 * over HTTP and display the result.
 *
 * Source.
 * -------------------------------------------
 * https://wiki.cloudparty.com/wiki/Script_Examples/HTTP_Request
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
/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * Object which moves up, down, or pauses when you click on it.
 *
 * Source.
 * -------------------------------------------
 * - https://wiki.cloudparty.com/wiki/Script_Examples/HTTP_Request
 */

var state = 0;

function click() {
    state += 1;
    var v = state % 4;
    if ( v ) {
        v = -1 * ( v - 2 );
    }
    setVelLinear( { vel: [0, 0, v] });
}

handlerCreate( {
    name: 'click',
    channel: 'direct',
    message: 'clickStart'
});
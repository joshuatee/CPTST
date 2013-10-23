/// <reference no-default-lib="true"/>
/// <reference path="../../CloudParty.d.ts" />

/**
  * Autopilot and Boarder
  * -------------------------------------------
  * This is a pair of scripts that work together. The first is an autopilot that
  * flies an object up into the air and then makes it circle around at a fixed
  * height.
  *
  * Boarder
  * -------------------------------------------
  * This script would be placed on an object on the ground. When the object is
  * clicked, the clicker is teleported to the position of the 'Landing' marker
  * on the vessel.
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/Autopilot_and_Boarder
  */

// Teleport time

var airship;
var offset;

var airship_pos;
var airship_rot;

setVelAngular( { vel: [15, 30, 45] });

broadcastMessage( { channel: 'EAPAirship', message: 'reset', data: { ent: getSelfEnt() }, radius: 350 });

// Teleport them to where it was last time we looked
//
// Should work as it's big and slow moving.

function doTeleport() {
    if ( airship_pos !== undefined ) {
        var pos = vecDup( airship_pos );
        vecAdd( pos, offset );

        teleport( { ent: getMessageEnt(), pos: pos, yaw: airship_rot[2] });

        broadcastMessage( { channel: 'EAPAirship', message: 'passanger', data: { ent: getMessageEnt() }, radius: 350 });
    }
}

handlerCreate( {
    name: 'doTeleport',
    channel: 'direct',
    message: 'clickStart',
    script: 'doTeleport'
});

function logAirship( data ) {
    airship = data.ent;
    offset = data.offset;
    offset[3] += 1;
}

handlerCreate( {
    name: 'logAirship',
    channel: 'EAPAirship',
    message: 'identify',
    script: 'logAirship'
});

timerCreate( { name: 'trackAirship', script: 'trackAirship', period: 0.25 });

function trackAirship() {
    if ( airship !== undefined ) {
        getEntFields( { ent: airship, fields: ['pos', 'rot'], callback: 'recordAirship' });
    }
}

function recordAirship( ent_fields ) {
    airship_pos = ent_fields.pos;
    airship_rot = ent_fields.rot;
}
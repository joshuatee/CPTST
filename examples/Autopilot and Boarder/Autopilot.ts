/// <reference no-default-lib="true"/>
/// <reference path="../../CloudParty.d.ts" />

/**
  * Autopilot and Boarder
  * -------------------------------------------
  * This is a pair of scripts that work together. The first is an autopilot that
  * flies an object up into the air and then makes it circle around at a fixed
  * height.
  *
  * Autopilot
  * -------------------------------------------
  * This script would be placed aboard a vessel that is to be 'flown' be
  * the auto pilot. You can adapt the movement instructions to change how it
  * moves.
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/Autopilot_and_Boarder
  */

// Simple autopilot

var state = 0;

var height = 100;

var radius = 25;

var cycle = 240;

timerCreate( { name: 'Pilot', script: 'pilot', period: 0.25 });

function pilot() {
    var pos = getPos();
    var rot = getRot();

    switch ( state ) {
        case 0:  // Spawned - fly up

            var dist = radius - pos[1];

            var climb = height - pos[2];

            setVelLinear( { vel: [-1 * ( pos[0] / 60 ), dist / 60, climb / 60] });

            state = 1;

            broadcastMessage( {
                channel: 'EAPAirship',
                message: 'identify',
                data: {
                    ent: getSelfEnt(),
                    offset: getMarkerPos( 'Landing' )
                },
                radius: 350
            });

            break;

        case 1:  // Climbing

            if ( pos[2] >= height ) {
                setVelLinear( { vel: [0, 0, 0] });
                setVelAngular( { vel: [0, 0, 3] });
                state = 2;
            }

            break;

        case 2: // turning

            if ( rot[2] >= 90 ) {
                setVelLinear( { vel: [0, ( 2 * radius * 3.14 ) / cycle, 0] });
                setVelAngular( { vel: [0, 0, 360 / cycle] });
                state = 3;
            }

            break;

        case 3: // Orbiting

            setVelLinear( { vel: [0, ( 2 * radius * 3.14 ) / cycle, 0] });
            break;
    }
}

function resendId( data ) {
    directMessage( {
        channel: 'EAPAirship',
        message: 'identify',
        ent: data.ent,
        data: {
            ent: getSelfEnt(),
            offset: getMarkerPos( 'Landing' )
        }
    });
}

handlerCreate( {
    name: 'resendId',
    channel: 'EAPAirship',
    message: 'reset',
    script: 'resendId'
});

var playing = false;

function playSound() {
    if ( playing === false ) {
        playing = true;

        soundStart( {
            sound: 'Sound',
            handle: 'Sound',
            details: {
                loop: false,
                min_distance: 10,
                max_distance: 15,
                gain: 0.2,
                pan: false
            }
        });

        timerCreate( { name: 'finish', script: 'finish', delay: 60 });
    }
}

function finish() {
    playing = false;
}

handlerCreate( {
    name: 'resendId',
    channel: 'EAPAirship',
    message: 'passanger',
    script: 'resendId'
});
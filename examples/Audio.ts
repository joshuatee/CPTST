/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * Add this to an object to make it start playing sound on being clicked and
 * stop playing sound on being clicked again.
 *
 * In the script 'mySoundFileName' is a script Parameter. Use the script editor
 * to set it's value to the name of the sound file to be played.
 *
 * Source.
 * -------------------------------------------
 * - https://wiki.cloudparty.com/wiki/Script_Examples/Audio
 */

var isSoundOn = "no";

function soundOnOff() {
    if (isSoundOn == "yes") {
        soundStop('mySoundHandle');
        isSoundOn = "no";
    } else {
        soundStart({
            sound: 'mySoundFileName',
            details: {
                ref_distance: 3,
                pan: false
            },
            handle: 'mySoundHandle'
        });
        isSoundOn = "yes";
    }
}

handlerCreate({
    name: 'clickHandler',
    channel: 'direct',
    message: 'clickStart',
    script: 'soundOnOff'
});
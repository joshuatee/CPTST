/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * Description
  * -------------------------------------------
  * Example of how to implement a StopWatch
  * To use
  * - add the script to an object.
  * - click the object to start the StopWatch.
  * - click the object again to stop the StopWatch and display the time elapsed
  *
  * By making the following changes, the StopWatch can be adapted to start and
  * stop on collision (useful for, say on race track).
  * - at the bottom of the script, comment out the handler for "clickStart" and
  * uncomment the handler for "collisionStart"
  * - create an object and add collision shape to it. (Optionally under Physics
  * select "isVolume". This will allow other objects or avatars to walk through
  * it)
  * - add the script to this object.
  * - collide with or walk through the object to start the StopWatch
  * - collide with or walk through the object again to stop the StopWatch and
  * display the time elapsed
  *
  * Note: The script uses the tell() function instead of the say() function to
  * display messages. This is because say() is throttled. If the two clicks are
  * made in quick succession, it is possible that the say() could be skipped.
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/StopWatch
  */

var isStopWatchOff = true;
var startTime;
var stopTime;
var timeElapsed;
var whoStarted;

function pressStopWatch() {
    var whoPressed = getMessageEnt();
    if (isStopWatchOff) {
        isStopWatchOff = false;
        whoStarted = whoPressed;
        startTime = now();
        tellIt("watch started");
    } else {
        //only the person who started this can stop this
        if (whoStarted != whoPressed) {
            return;
        }
        isStopWatchOff = true;
        stopTime = now();
        timeElapsed = (stopTime - startTime) / 1000;
        tellIt("watch stopped");
        tellIt(timeElapsed + " seconds");
    }
}
function tellIt(msg) {
    tell({ ent: whoStarted, message: msg });
}
handlerCreate({ name: 'pressStopWatch', channel: 'direct', message: 'clickStart' });
/* to start and stop using collision, comment out the previous line and uncomment the following line */
//handlerCreate({name: 'pressStopWatch', channel: 'physics',  message: 'collisionStart'});
/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * Object which can be clicked to reset all dynamic entities within 100 units,
  * and occasionally says "Click me to reset!".
  * 
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/Reset
  */

function resetByJimb() {
    resetNear( 100 );
}

handlerCreate( {
    name: 'resetByJimb',
    channel: 'direct',
    message: 'clickStart'
});

function talk() {
    say( 'Click me to reset!' );
}

timerCreate( {
    name: 'talk',
    period: 60,
    jitter: 30
});
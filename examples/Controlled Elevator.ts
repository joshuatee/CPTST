/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * Prerequisites.
  * -------------------------------------------
  * - Add the example script to a prefab that is present in-world.
  * - Set the prefab Physics to Type: Movable (via script)
  *
  * Expected Result.
  * -------------------------------------------
  * - Object that creates a controller when a player clicks on it, which
  * the player can then use to control it.
  * - The controller includes a status message and several buttons. The status
  * simply reports the current behavior of the elevator. The Up and Down buttons
  * cause the elevator to move up and down (and multiple clicks will make it
  * move faster). The Stop button will cause the elevator to stop moving, while
  * the Reset button will cause the elevator to return to its start position.
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/Controlled_Elevator
  */

function created() {
    // Set the start location (used for reset), as well as init velocity and status
    set( 'start', getPos() );
    set( 'vel', 0 );
    set( 'status', 'Home sweet home!' );
}

created();

function click() {
    // Creates a controller on the message entity.  The status message is just
    //  whatever the 'status' value is in storage, which can be updated by a 'status'
    //  message being sent on the default controller channel.  The buttons just send
    //  back the same message as the text they display on the default controller channel.
    controllerCreate( {
        ent: getMessageEnt(),
        title: 'Elevator Controls',
        texts: [
            {
                message: 'status', 
                text: get( 'status' ),
                tooltip: 'Status'
            }
        ],
        buttons: [{ message: 'Up' }, { message: 'Down' }, { message: 'Stop' }, { message: 'Reset' }]
    });
}

handlerCreate( {
    name: 'click',
    channel: 'direct',
    message: 'clickStart'
});

function update() {
    // Utility script to set velocity to the current velocity and broadcast
    //  the current status to anyone with a controller
    setVelLinear( { vel: [0, 0, get( 'vel' )] });
    controllerMessage( { message: 'status', text: get( 'status' ) });
}

function up() {
    // Updates the velocity and status and calls the 'update' script
    var v = get( 'vel' );
    if ( v < 0 ) { v = 0; }
    v++;
    set( 'vel', v );
    set( 'status', v === 1 ? 'Going up!' : 'I\'m a rocket!' );
    update();
}

handlerCreate( {
    name: 'up',
    channel: 'controller',
    message: 'Up'
});

function down() {
    var v = get( 'vel' );
    if ( v > 0 ) { v = 0; }
    v--;
    set( 'vel', v );
    set( 'status', v === -1 ? 'Going down!' : 'I\'m falling!' );
    update();
}

handlerCreate( {
    name: 'down',
    channel: 'controller',
    message: 'Down'
});

function stop() {
    // Stops movement
    set( 'vel', 0 );
    set( 'status', 'We\'re there!' );
    update();
}

handlerCreate( {
    name: 'stop',
    channel: 'controller',
    message: 'Stop'
});

function resetByJimb2() {
    // Stops moving and sets position to the place we recorded when created
    set( 'vel', 0 );
    set( 'status', 'Home sweet home!' );
    update();
    setPos( get( 'start' ) );
}

handlerCreate( {
    name: 'resetByJim2',
    channel: 'controller',
    message: 'Reset'
});
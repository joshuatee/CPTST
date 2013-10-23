/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * Prerequisites.
  * -------------------------------------------
  * - Add the example script to a prefab that is present in-world.
  * - Set the prefab Physics to Type: Simulated, Material: Cardboard
  * Note: Impulse is sensitive to the mass of the object. The impulse magnitude
  * in this example is based on a small box with the physics material set to
  * 'Cardboard'.
  *
  * Expected Result.
  * -------------------------------------------
  * Object that chases the last person that clicked on it by using impulse.
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/Follower
  */

var target;

function love( ent_fields ) {
    say( 'I\'ve got a crush on ' + ent_fields.display_name + '!' );
}

function hate( ent_fields ) {
    say( ent_fields.display_name + ' doesn\'t like me, guess I\'ll go eat worms!' );
}

function click() {
    var clicker = getMessageEnt();
    if ( clicker === target ) {
        target = undefined;
        getEntFields( { ent: clicker, fields: ['display_name'], callback: 'hate' });
    } else {
        target = clicker;
        getEntFields( { ent: clicker, fields: ['display_name'], callback: 'love' });
    }
}

handlerCreate( {
    name: 'click',
    channel: 'direct',
    message: 'clickStart'
});

function move( ent_fields ) {
    var a = ent_fields.pos, b = getPos();
    if ( a && b && vecDistance( a, b ) > 5 ) {
        vecSub( a, b );
        vecMulScalar( a, 4 );
        applyImpulse( a );
    }
}

function gettargetpos() {
    if ( target ) {
        getEntFields( { ent: target, fields: ['pos'], callback: 'move' });
    }
}

timerCreate( {
    name: 'gettargetpos',
    period: 0.25
});

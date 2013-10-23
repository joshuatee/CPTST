/// <reference no-default-lib="true"/>
/// <reference path="../../CloudParty.d.ts" />

/**
  * Description
  * -------------------------------------------
  * This example demonstrates the use of Direct Messaging to communicate data
  * between two different prefabs.
  *
  * Prerequisites.
  * -------------------------------------------
  * - Prefab #1: Messenger Parent
  * - Prefab #2: Messenger Spawn
  *
  *  Messenger Parent.
  * -------------------------------------------
  * Script Parameters:
  * - Name: Spawn Prefab
  * - Type: Prefab
  * - Value: Messenger Spawn
  *
  * Expected Result.
  * -------------------------------------------
  * The prefabs will say the following:
  * - Messenger Spawn: Got direct message from parent
  * - Messenger Spawn: Parent favorite color is red
  * - Messenger Spawn: Parent favorite number is 7
  * - Messenger Spawn: Parent favorite number is 7
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/Parent_and_Spawn_Messaging
  */

// Channel to communicate on
// To avoid directly using the global context.data,
// the channel to listen on when spawned is explicitly defined
var listenChannel = 'mychannel';

// Handler for direct messages from parent
function helloHandler( data ) {
    listenChannel = data.channel;

    say( 'CHILD: Got direct message from parent' );
    say( 'CHILD: Parent favorite color is ' + data.color );
    say( 'CHILD: Parent favorite number is ' + data.number );

    // Let's talk back to the parent now that I've spawned
    directMessage( {
        ent: getCreatorEnt(),
        channel: data.channel,
        message: 'hello'
    });
}

// Handler for direct messages from parent
handlerCreate( {
    name: 'helloHandler',
    channel: listenChannel,
    message: 'hello',
    ents: [getCreatorEnt()]
});
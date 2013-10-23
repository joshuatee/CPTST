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
  * Messenger Parent.
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
var listenChannel = 'mychannel';

// Custom data to be sent to child
var favoriteColor = 'red';
var favoriteNumber = 7;

// Handler for direct messages from child spawn
function helloHandler() {
    say( 'PARENT: Got direct message from child' );
}

// Handler once child has spawned
function spawnCreated( data ) {
    // Handler for direct messages from child
    handlerCreate( {
        name: 'helloHandler',
        channel: listenChannel,
        message: 'hello',
        ents: [data.ent]
    });

    // Let's talk back to the child
    directMessage( {
        ent: data.ent,
        channel: listenChannel,
        message: 'hello',
        data: {
            channel: listenChannel,
            color: favoriteColor,
            number: favoriteNumber
        }
    });
}

// Remove any previous instance of child spawn before spawning new child
resetSpawned();

// Spawn our child
spawn( {
    prefab: 'childName',
    pos: [1, 0, 0],
    created_data: {
        favColor: favoriteColor,
        favNumber: favoriteNumber
    },
    callback: 'spawnCreated'
});
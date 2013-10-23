/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * Prerequisites.
 * -------------------------------------------
 * - This example script must have a prefab parameter named myPrefabParam that
 * has been set to a prefab in your library. The soccer ball from the default
 * library works well.
 * - Add the example script to a different prefab that is present in-world.
 *
 * Expected Result.
 * -------------------------------------------
 * A new prefab specified by myPrefabParam should be spawned in a random
 * position, 2m above, when the prefab containing this example script is
 * clicked.
 *
 * Source.
 * -------------------------------------------
 * https://wiki.cloudparty.com/wiki/Script_Examples/Simple_Spawn
 */

function spawnPrefab() {
    var randomX = randomRange( -5, 5 );
    var randomY = randomRange( -5, 5 );
    var randomVector = [randomX, randomY, 2];

    // Remove any existing spawned item.
    resetSpawned();
    // Spawn the prefab in a random location, 2 meters above.
    spawn( { prefab: 'myPrefabParam', pos: randomVector });
}

handlerCreate( {
    name: 'spawnPrefab',
    channel: 'direct',
    message: 'clickStart'
});
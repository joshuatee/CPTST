/// <reference no-default-lib="true"/>
/// <reference path="../../CloudParty.d.ts" />

/**
  * The Scene Register Script needs to be attached to every object that is going
  * to play an active role in the scene. As this makes it a dynamic object, it
  * is best to plan you scene in advance and to try and make each object do as
  * much as it can. For example, the Ghost Boat on Edgar Allan Poe does its own
  * movement, the director calls to move the player on and off of the boat and
  * the sound track. Thus the scene works with only two objects - the controller
  * and the boat. Of those, only the boat needs a Scene Register script on it as
  * it is the only one that drives any other Scene Scripts.
  *
  * Paramters and Customizers
  * -------------------------------------------
  * Draft Key (Key)
  * - The Draft Key is simply a key that you have created in the builder. Give
  * it a name that reflects the scene. It will be used to manage the cast in the
  * Draft version of your build.
  * - All objects in the scene must specify the same Draft key value on the
  * Registration calls.
  * 
  * Published Key (Key)
  * - The Published Key is simply a key that you have created in the builder.
  * Give it a name that reflects the scene. It will be used to manage the cast
  * in the Published version of your build.
  * - All objects in the scene must specify the same Published key value on the
  * Registration calls.
  *
  * Role (String)
  * - This is the name that the object will join the scene as.
  * - Complex scenes can involve actions where one object needs to find another
  * one. By going to the cast global and looking for a particular Role, the
  * object is able to retrieve the entID of the object that is currently
  * fulfilling that role within the scene.
  *
  * Execution
  * -------------------------------------------
  * - When the object initilaizes it will get the current cast object and add
  * itself to it using the supplied Role.
  * - It is worth noting that it uses a check and retry mechanism when it makes
  * this update as it is highly likely that, if the area has been reset, other
  * objects in the scene are also trying to register at the same time. The check
  * and retry mechanism enables them to avoid over writing each others updates.
  * The Scene Key is used to identify the global data space where the scene list
  * is kept.
  * - Note also the use of clone() to duplicate the cast object to produce the
  * comparison base_cast object. If you simply said 'base_cast = cast' then any
  * changes to cast would also be made to base_cast (because they would both be
  * pointing to the same object).
  *
  * Notes
  * -------------------------------------------
  * - There are no broadcast messages and no distance limits in this
  * implementation of a registration mechanism. The registration happens through
  * a shared global data pool - and will actually work cross island. The objects
  * can then use directMessage to communicate with each other.
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/Scene_Scripts/Register
  */

// Where are we?

var retry;

getBuildFields( {
    build: getBuild(),
    callback: 'buildInfo',
    fields: ['display_name', 'description', 'published']
});

function buildInfo( buildData ) {

    // Register an object with the Scene Controller...

    if ( buildData.published == 1 ) {
        setStateKeyDefault( 'Published Key' );
    } else {
        setStateKeyDefault( 'Draft Key' );
    }

    // Register...

    retry = false;

    register( {});
}

// Registration..

function register( data ) {

    if ( retry !== true || data.err !== undefined ) {
        getGlobalState( {
            keys: ['cast'],
            callback: 'joinCast'
        });
    }
}

function joinCast( data ) {

    var cast = data.cast;

    var base_cast = clone( cast );

    if ( cast === undefined ) {
        cast = {};
    }

    var my_name = getParam( 'Role' );

    cast[my_name] = getSelfEnt();

    retry = true;

    setGlobalState( {
        data: { cast: cast },
        check: { cast: base_cast },
        callback: 'register'
    });
}
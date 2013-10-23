/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * Source.
 * -------------------------------------------
 * - https://wiki.cloudparty.com/wiki/Script_Examples/Click
 */

function click(clickdata) {
    var data = getHandlerData(); // to get data portion of handler
    // var clickdata=getMessageData(); // also var clickdata=context.data;
    say("You clicked me");

    // this will say what specified in the data: section of handler create
    say("static data: " + data);

    // this will tell click positions and other metadata of current click
    tell({
        ent: getMessageEnt(),
        message: "click data: " + stringify(clickdata)
    });
};

handlerCreate({
    name: 'click',
    channel: 'direct',
    data: 'message data to be sent statically',
    message: 'clickStart'
});
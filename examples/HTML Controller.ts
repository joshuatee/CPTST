/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * Prerequisites.
  * -------------------------------------------
  * - Add the example script to a prefab that is present in-world.
  *
  * Expected Result.
  * -------------------------------------------
  * - Clicking on the prefab with this script should present a HTML controller
  * with button and clickable span..
  *
  * Source.
  * -------------------------------------------
  * - https://wiki.cloudparty.com/wiki/Script_Examples/HTML_Controller
  */

function dialog() {
    controllerHTMLCreate( {
        ent: getMessageEnt(),
        title: 'HTML Controller Example',
        html: 'This is an example of an <b><i><font color="red">HTML controller</font></i></b>.<br>' +
        '<button id="button">You can click me!</button><br>' +
        '<span id="response"></span>',
        listeners: [{ id: 'response' }],
        messagers: [{ id: 'button' }, { id: 'response' }, { id: 'close', message: 'closed', close: true }]
    });
}

function buttonClick() {
    say( 'You clicked the button!' );
    controllerMessage( { ent: getMessageEnt(), message: 'response', text: 'You can also click this span!' });
}

handlerCreate( {
    name: 'buttonClick',
    channel: 'controller',
    message: 'button'
});

function responseClick() {
    controllerMessage( { ent: getMessageEnt(), message: 'response', text: 'Success!' });
}

function closeClick() {
    say( 'Close clicked' );
}

handlerCreate( {
    name: 'responseClick',
    channel: 'controller',
    message: 'response'
});

handlerCreate( {
    name: 'dialog',
    channel: 'direct',
    message: 'clickStart'
});

handlerCreate( {
    name: 'closeClick',
    channel: 'controller',
    message: 'closed'
});
/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * Description.
  * -------------------------------------------
  * Add the example script to a prefab that is present in-world.
  *
  * GetMessage() content.
  * -------------------------------------------
  * Here is a sample of getMessage() received, showing various form fields.
  *
  *     {
  *       event: {
  *         offsetX: 22,
  *         offsetY: 11,
  *         target: {
  *           offsetWidth: 55,
  *           offsetHeight: 20
  *         }
  *       },
  *       form: {
  *         a: "a",
  *         b: "b",
  *         c: "c",
  *         g: "0",
  *         h: [],
  *         i: ""
  *       },
  *       state_path: {
  *         root: true,
  *         idx: 0
  *       },
  *       time: 1369432143045,
  *       from: "6c0fb8d814402fb4",
  *       from_ent: "P00A4EC",
  *       from_display: "Salahzar Stenvaag",
  *       click_handler: true
  *     }
  * 
  *
  * Salahzar™
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/HTML_Form
  */

function clickStart() {
    controllerHTMLCreate( {
        ent: getMessageEnt(),
        title: 'HTML Form Example',
        html: '<form name="testForm">' +
        'a:<input type="TEXT" name="a"><br>' +
        'b:<input type="password" name="b"><br>' +
        '<input type="hidden" name="c" value="c">' +
        'd:<input type="checkbox" name="d" value="d"><br>' +
        'e:<input type="checkbox" name="e" value="e"><br>' +
        'f0:<input type="radio" name="f" value="0"><br>' +
        'f1:<input type="radio" name="f" value="1"><br>' +
        'f2:<input type="radio" name="f" value="2"><br>' +
        'g:<select size="1" name="g"><option value="0">0</option><option value="1">1</option></select><br>' +
        'h:<select size="2" name="h" multiple="MULTIPLE"><option value="0">0</option><option value="1">1</option></select><br>' +
        'i:<textarea id="textarea" name="i"></textarea><br>' +
        '<button id="submit" value="Submit">Submit</button></form>',
        listeners: [{ id: 'textarea' }],
        messagers: [{ id: 'submit' }],
        width: 300,
        height: 400,
        padding: 15
    });
}

handlerCreate( {
    name: 'clickStart',
    channel: 'direct',
    message: 'clickStart'
});

function submitClick() {
    var msg = getMessageData();
    error( msg );
    //error( "Value of a: " + msg.form.a );
    controllerMessage( { ent: getMessageEnt(), message: 'textarea', text: stringify( msg ) });
}

handlerCreate( {
    name: 'submitClick',
    channel: 'controller',
    message: 'submit'
});
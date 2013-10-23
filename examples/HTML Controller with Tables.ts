/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * Prerequisites.
  * -------------------------------------------
  * - Add the example script to a prefab that is present in-world.
  *
  * Expected Result.
  * -------------------------------------------
  * Clicking on the prefab with this script should present a HTML controller
  * with 2 tables. The upper table has dynamic values controlled by clicking in
  * the lower table.
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/HTML_Controller_with_Tables
  */

function init() {
    set( 'value1', 0 );
    set( 'value2', 50 );
    set( 'value3', 100 );

    handlerCreate( {
        name: 'changeValue1',
        channel: 'controller',
        message: 'changeValue1'
    });

    handlerCreate( {
        name: 'changeValue2',
        channel: 'controller',
        message: 'changeValue2'
    });

    handlerCreate( {
        name: 'changeValue3',
        channel: 'controller',
        message: 'changeValue3'
    });

    handlerCreate( {
        name: 'menu',
        channel: 'direct',
        message: 'clickStart'
    });
}

function menu() {
    var text = '<table align="center">\
      <tr align="center">\
        <td width="100"><b>Value 1: <span id="V1">' + get( 'value1' ) + '</span></b></td>\
        <td width="100"><b>Value 2: <span id="V2">' + get( 'value2' ) + '</span></b></td>\
        <td width="100"><b>Value 3: <span id="V3">' + get( 'value3' ) + '</span></b></td>\
      </tr>\
    </table>\
    <table align="center" border="1" cellspacing="0" cellpadding="3">\
      <tr align="center">\
        <td id="A1" width="100"><font color=orange><b>Value 1 +</b></font></td>\
        <td id="A2" width="100"><font color=orange><b>Value 2 +</b></font></td>\
        <td id="A3" width="100"><font color=orange><b>Value 3 +</b></font></td>\
      </tr>\
      <tr align="center">\
        <td id="B1" width="100"><font color=orange><b>Value 1 -</b></font></td>\
        <td id="B2" width="100"><font color=orange><b>Value 2 -</b></font></td>\
        <td id="B3" width="100"><font color=orange><b>Value 3 -</b></font></td>\
      </tr>\
    </table>';

    controllerHTMLCreate( {
        ent: getMessageEnt(),
        title: 'My interactive HTML Controller',
        html: text,
        listeners: [
            { id: 'V1' },
            { id: 'V2' },
            { id: 'V3' }
        ],
        messagers: [
            { id: 'A1', message: 'changeValue1', data: /*{ amount: 1 }*/ 1 },
            { id: 'B1', message: 'changeValue1', data: /*{ amount: -1 }*/ -1 },
            { id: 'A2', message: 'changeValue2', data: /*{ amount: 1 }*/ 1 },
            { id: 'B2', message: 'changeValue2', data: /*{ amount: -1 }*/ -1 },
            { id: 'A3', message: 'changeValue3', data: /*{ amount: 1 }*/ 1 },
            { id: 'B3', message: 'changeValue3', data: /*{ amount: -1 }*/ -1 }
        ]
    });
}

function changeValue1() {
    var v = get( 'value1' ) + context.message.data/*.amount*/;
    set( 'value1', v );
    controllerMessage( { ent: getMessageEnt(), message: 'V1', text: "" + v });
}

function changeValue2() {
    var v = get( 'value2' ) + context.message.data/*.amount*/;
    set( 'value2', v );
    controllerMessage( { ent: getMessageEnt(), message: 'V2', text: "" + v });
}

function changeValue3() {
    var v = get( 'value3' ) + context.message.data/*.amount*/;
    set( 'value3', v );
    controllerMessage( { ent: getMessageEnt(), message: 'V3', text: "" + v });
}

init();
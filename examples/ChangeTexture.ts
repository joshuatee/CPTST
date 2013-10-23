/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * A "simple" script that toggles between two texture each time you click on
 * the object
 *
 * See Script_Customizer_Tutorial for more info on the technique used
 *
 * If you have difficulty in preparing the Customized texture where to apply
 * this script you can get a free basis here
 * https://a.cloudparty.com/market/mwjhgrzamz7gx
 * 
 * Object Preparation
 * -------------------------------------------
 * As many scripts in CP they work only if you have prepared the object and the
 * script with proper Customizers. The very first thing you need a generic
 * material able to be customized in the Diffuse Texture:
 *
 * https://wiki.cloudparty.com/mediawiki/images/f/f7/Scriptexample-genericmaterialcustomized.png
 *
 * Then you need to specify at the end of object properties a customizer setup
 * named say 'texture' linked to the customizable diffuse texture we inserted
 * before
 * 
 * https://wiki.cloudparty.com/mediawiki/images/d/d2/Script-customizersetup.png
 * 
 * Lastly you must set up a set of possible textures you want to change in the
 * script's window with names matching those referred internally (in this example p1 and p2
 * 
 * https://wiki.cloudparty.com/mediawiki/images/8/85/Script-customizerparameters.png
 *
 *
 * Source.
 * -------------------------------------------
 * https://wiki.cloudparty.com/wiki/Script_Examples/ChangeTexture
 */

var toggle = false;
function click() {
    var name;
    toggle = !toggle;

    if ( toggle )
        name = "p1";
    else
        name = "p2";
    customizerSet( { name: 'texture', param: name });
}

handlerCreate( {
    name: 'click',
    channel: 'direct',
    message: 'clickStart'
});
/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * You can find this script in marketplace here:
 * https://a.cloudparty.com/market/mfnu3at7nmqhq.
 * 
 * Script needs as many parameters you need for your textures named '1' ... 'N',
 *  a parameter for the count of slide named 'count' and 'onlyowner' boolean
 * which is limiting access only to owner.
 *
 * You also need to specify at least three markers named 'left' 'right' 'reset'
 * for handling the three options.
 * 
 * For details on how to use GetParam and Customizers you can refer here:
 * https://wiki.cloudparty.com/wiki/Script_Examples/SimpleSlideShow
 * 
 * Salahzar™
 *
 * Source.
 * -------------------------------------------
 * https://wiki.cloudparty.com/wiki/Script_Examples/SimpleSlideShow
 */

var n = 0;

function showImage() {


    var av = getMessageUser();
    var msg = getMessage();
    if ( getParam( 'onlyowner' ) && av !== getOwnerUser() ) {
        tell( { ent: getMessageEnt(), message: "Only owners can use this slideshow" });
        return;
    }
    var status = "(public) "; if ( getParam( 'onlyowner' ) ) status = "(owner) ";
    var count = getParam( 'count' ); var s = "";
    switch ( msg.data.marker_id ) {
        case "left": n--; if ( n < 0 ) n = count; s = "done previous: "; break;
        case "right": n++; if ( n > count ) n = 1; s = "done next: "; break;
        case "reset": n = 1; s = "done reset: "; break;
    }
    customizerSet( { name: 'texture', param: n.toString() });
    say( status + s + "showing " + n + "/" + count );

}

handlerCreate( {
    name: 'showImage',
    channel: 'direct',
    message: 'clickStart'
});
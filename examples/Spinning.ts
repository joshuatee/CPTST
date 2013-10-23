/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * Add this to an object to make it start spinning around a proper x,y,z axis,
 * in respect to boolean "Ignore Scale" parm and "Global" parm. This script
 * comes from the free MarketPlace item from Roy Curtis in the package provided
 * to recreate Aurora Borealis in North Luxor
 * 
 * Note: Global param means that rotation happens around local object axis
 * instead of World axis
 *
 * Note: Ignore Scale if true the object gets exactly this rotation whichever
 * size it is, otherwise rotation depends on the scale, i.e. bigger objects do
 * move slower
 * 
 * For details on how to use GetParam and Customizers you can refer here:
 * https://wiki.cloudparty.com/wiki/Script_Examples/SimpleSlideShow
 * 
 * Salahzar™
 *
 * Source.
 * -------------------------------------------
 * https://wiki.cloudparty.com/wiki/Script_Examples/Spinning
 */

var rot;
var X = getParam( 'X spin' );
var Y = getParam( 'Y spin' );
var Z = getParam( 'Z spin' );

if ( getParam( 'Ignore scale' ) )

    rot = [X, Y, Z];

else {

    var scale = getScale();
    rot = [
        X / scale[0],
        Y / scale[1],
        Z / scale[2]
    ];

}

setVelAngular( { vel: rot, world: getParam( 'Global' ) });
/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/*
 * This is an advanced click example showing you how to understand which marker
 * on the object is being clicked (and a minimal usage of a function and
 * private IM.
 *
 * If you need the very basic sample see Script_Examples/Click
 *
 * To make it work you should create some markers on the object see:
 * Object_Hosted_Animation.
 *
 * Usage of markers together with click function has been proposed to have
 * a single script serve multiple tasks, such as mapping a geographical map and
 * having different information depending on where avatar touches, having one
 * object able to sell different things, or making a multiple submesh object
 * understand which submesh is being touched
 *
 * Source.
 * -------------------------------------------
 * https://wiki.cloudparty.com/wiki/Script_Examples/ClickMarkers
 */

var av;

function click() {
  var msg=getMessage();
  av=getMessageEnt();
  write(msg);
  if(msg.data.marker_id=="first marker") write("You pressed the first marker");
  else if(msg.data.marker_id=="second marker") write("You pressed the second marker");
  else write("No marker pressed");
}
function write(msg)
{
  tell({ ent: av, message: msg});
}

handlerCreate({
  name: 'click',
  channel: 'direct',
  message: 'clickStart'
});
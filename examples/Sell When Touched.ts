/// <reference no-default-lib="true"/>
/// <reference path="../CloudParty.d.ts" />

/**
  * Simplest script able to sell an Object. You MUST associate the "Object" parameter to a MarketPlace listing and/or set a customizer to help in placing the script.
  * 
  * Note that this script is not really needed if you just want to sell an Item: every non dynamic object can automatically sell from marketplace putting proper parameters in edit form
  *
  * I put here for learning purposes to show marketSellToUser usage. This can be useful as a basis for complex scripts which can do some logic, for instance setting special prices to special people, or just offering different things depending on something specific, for instance in a Scavenger Hunt..
  * 
  * Salahzar™
  *
  * Source.
  * -------------------------------------------
  * https://wiki.cloudparty.com/wiki/Script_Examples/SellWhenTouched
  */

function buy() {
    marketSellToUser( {
        market_listing: 'Object',
        price_override: 0,
        message: 'Take this!',
        user_ent: getMessageEnt()
    });
}

handlerCreate( {
    name: 'buy',
    channel: 'direct',
    message: 'clickStart'
});
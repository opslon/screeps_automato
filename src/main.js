module.exports.loop = function () {
    // This is the main game loop. The code inside of these curly brackets will run once per tick.

    // if our creep doesn't exist, create it from our spawn
    Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE,MOVE], "My First Creep");

    // get a reference to our creep
    var mycreep = Game.creeps["My First Creep"];

    // if creep has no energy, go to the energy source and harvest some
    if (mycreep.store[RESOURCE_ENERGY] == 0) {
        // make an easy reference to the energy source
        var source = Game.getObjectById('16c3f93dd468ca9f065fd27c');
        // move my creep to the energy source and harvest energy
        mycreep.moveTo(source);
        mycreep.harvest(source);
    } else {
        // but if our creep does have energy, bring it to the controller and upgrade it

        // make an easy reference to the room's controller
        var controller = mycreep.room.controller;
        // move my creep to the controller and upgrade it
        mycreep.moveTo(controller);
        mycreep.upgradeController(controller);
    }

}
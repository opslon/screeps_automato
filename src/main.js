var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
//var roleTower = require('tower.atk');
var creepSpawner = require('creep.spawner');


module.exports.loop = function () {


//Roda os creeps
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }

    }

//Roda o Spawner
    for(var name in Game.spawns) {
        var spawns = Game.spawns[name];
        if(spawns.name = 'Spawn1') {
            creepSpawner.run(spawns)
        }
    }
//Roda o memory cleaner
for(var name in Memory.creeps) {
    if(!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
    }
}

//Criar defesa de torre

}
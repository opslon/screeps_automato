var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
//var roleTower = require('tower.atk');
var spawnerHarvesterLVL1 = require('spawner.harvester.lvl1');

//Cada turno (Tick) roda o que tiver dentro deste loop
module.exports.loop = function () {


//Roda os creeps -> Procura pelo endereço de cada creeper e verifica a "role" de cada um
//dependendo da "role" ele roda um script diferente
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

//Roda o Spawner -> Lê o endereço da estrutura "SPAWN" e se o nome for 'Spawn1' roda função
    for(var name in Game.spawns) {
        var spawns = Game.spawns[name];
        if(spawns.name = 'Spawn1') {
            creepSpawner.run(spawns)
        }
    }


//Criar defesa de torre

}
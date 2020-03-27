var roleHarvester = require('./roles/role.harvester');
var roleUpgrader = require('./roles/role.upgrader');
var roleBuilder = require('./roles/role.builder');
//var roleTower = require('tower.atk');
var spawnerHarvesterLVL1 = require('./spawners/spawner.harvester.lvl1');
var spawnerbuilderLVL1 = require('./spawners/spawner.builder.lvl1');
var spawnerupgraderLVL1 = require('./spawners/spawner.upgrader.lvl1');


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
            spawnerHarvesterLVL1.run(spawns)
            spawnerbuilderLVL1.run(spawns)
            spawnerupgraderLVL1.run(spawns)
        }
    }


//Criar defesa de torre

}
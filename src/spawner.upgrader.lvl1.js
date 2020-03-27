var spawnerupgraderLVL1 = {

    run: function(spawns) {

        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        //console.log('upgraders: ' + upgraders.length);


        if(upgraders.length < 2) {
            var newName = 'upgrader' + Game.time;
            console.log('Spawning new upgrader: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'upgrader'}});
        }

       if(Game.spawns['Spawn1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1,
                Game.spawns['Spawn1'].pos.y,
                {align: 'left', opacity: 0.8});
        }
    }
};

module.exports = spawnerupgraderLVL1;
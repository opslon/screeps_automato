var spawnerbuilderLVL1 = {

    run: function(spawns) {

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        //console.log('builders: ' + builders.length);


        if(builders.length < 2) {
            var newName = 'builder' + Game.time;
            console.log('Spawning new builder: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'builder'}});
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

module.exports = spawnerbuilderLVL1;
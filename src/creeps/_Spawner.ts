interface Spawner {
  // spawnCost(parts: BodyPartConstant[]): number
  // canSpawnCreep(): boolean
  spawnCreep(
    parts: BodyPartConstant[],
    memory: CreepMemory,
    spawn: StructureSpawn
  ): void
}

export class CreepSpawner implements Spawner {
  // takes partArray and returns Energy Cost
  private spawnCost(parts: BodyPartConstant[]): number {
    let cost: number = 0

    for (let part in parts) {
      switch (part) {
        case WORK:
          cost = cost + 100
          break

        case MOVE:
          cost = cost + 50
          break

        case CARRY:
          cost = cost + 50
          break

        case ATTACK:
          cost = cost + 80
          break

        case RANGED_ATTACK:
          cost = cost + 150
          break

        case HEAL:
          cost = cost + 250
          break

        case TOUGH:
          cost = cost + 10
          break

        case CLAIM:
          cost = cost + 600
          break

        default:
          break
      }
    }

    return cost
  }

  private canSpawnCreep(cost: number): boolean {
    // check for cost
    // check if spawn is busy
    return true
  }

  // takes parts, memory (for role and assigned tasks)
  // aswell as the spawn (defaulted to S1)
  public spawnCreep(
    parts: BodyPartConstant[],
    memory: CreepMemory,
    spawn: StructureSpawn
  ): void {
    // If unable to spawn, return
    let partsCost = this.spawnCost(parts)
    if (!this.canSpawnCreep(partsCost)) {
      return
    }

    // Defaulting Spawn to 1 if none passed
    if (!spawn) {
      spawn = Game.spawns.S1
    }

    // Setting Role
    if (memory === undefined) {
      memory = { room: spawn.room.name, role: 'Ronny P.', working: false }
    }
    let role: string = memory.role

    // Getting a Name for the Creep
    // Role + Count
    let nameCount = 0
    let name = null
    while (name === null) {
      nameCount = nameCount + 1
      let tempName = role + ' #' + nameCount
      if (Game.creeps[tempName] === undefined) {
        name = tempName
      }
    }

    if (spawn.spawnCreep(parts, name, { memory, dryRun: true }) === OK) {
      console.log('Spawning ' + name + '...')
      spawn.spawnCreep(parts, name, { memory })
    }
  }
}

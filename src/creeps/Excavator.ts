//
import { Classes } from '../utils/config'

const spawn = Game.spawns['S1']
const energy = RESOURCE_ENERGY

export class Excavator extends Creep {
  public work() {
    let source: Source | null = this.pos.findClosestByPath(FIND_SOURCES)
    if (source) {
      if (this.store.getFreeCapacity() > 0) {
        if (this.harvest(source) === ERR_NOT_IN_RANGE) {
          this.moveTo(source, {
            visualizePathStyle: {
              stroke: Classes.Excavator.color,
              opacity: 0.5,
            },
          })
        }
      } else {
        if (this.transfer(spawn, energy) === ERR_NOT_IN_RANGE) {
          this.moveTo(source, {
            visualizePathStyle: { stroke: '#00ff45', opacity: 0.5 },
          })
        }
      }
    }
  }
}

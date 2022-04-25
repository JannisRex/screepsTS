// -- Classes --
// EXCAVATOR (WORK, CARRY, MOVE) -> Farm and return Energy (only used in the very beginning)
// MINER (WORK, WORK, MOVE) -> Farm and drop Energy
// HAULER (MOVE, CARRY) -> PickUp and Return Energy
// BUILDER (WORK, WORK, MOVE, CARRY) -> Build Structures
// UPGRADER (WORK, WORK, MOVE, CARRY) -> Upgrade Structures

const buildOrder = [
  'Excavator',
  'Excavator',
  'Miner',
  'Hauler',
  'Builder',
  'Miner',
  'Hauler',
  'Upgrader',
]

const Classes = {
  Excavator: {
    name: 'Excavator',
    icon: '👷‍♂️',
    parts: [WORK, CARRY, MOVE],
    color: '#ff4500',
  },
  Miner: {
    name: 'Miner',
    icon: '⛏',
    parts: [WORK, WORK, MOVE],
    color: '#ff003b',
  },
  Hauler: {
    name: 'Hauler',
    icon: '🚚',
    parts: [CARRY, MOVE],
    color: '#ffc500',
  },
  Builder: {
    name: 'Builder',
    icon: '🔨',
    parts: [WORK, WORK, CARRY, MOVE],
    color: '#003bff',
  },
  Upgrader: {
    name: 'Upgrader',
    icon: '🔧',
    parts: [WORK, WORK, CARRY, MOVE],
    color: '#00ffc5',
  },
}

export { buildOrder, Classes }

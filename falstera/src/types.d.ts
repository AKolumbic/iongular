declare namespace Falstera {
  interface Character {
    name: string;
    level: number;
    race: Race;
    class: CharacterClass;
  }

  type Race =
  | "Dwarf"
  | "Elf"
  | "Genasi"
  | "Gnome"
  | "Goblin"
  | "Half-Elf"
  | "Halfling"
  | "Human"
  | "Orc"
  | "Tortle"

  type CharacterClass =
  | "Artificer"
  | "Barbarian"
  | "Bard"
  | "Cleric"
  | "Druid"
  | "Fighter"
  | "Monk"
  | "Paladin"
  | "Ranger"
  | "Rogue"
  | "Sorcerer"
  | "Warlock"
  | "Wizard"

  interface Location {
    name: string
    description: string
    population: Race[]
  }
}

export = Falstera
export as namespace Falstera

declare namespace Falstera {
  interface Character {
    name: string;
    level: number;
    race: PlayableRace;
    class: CharacterClass;
  }

  interface Race {
    name: Humanoid;
    description: string;
    nativeRealm: Realm | Realm[];
    traits?: string[];
  }

  type Realm = "Falstera" | "Faerûn" | "Eberron" | "Ravnica" | "Ravenloft";

  type Humanoid =
    | PlayableRace
    | "Dragonborn"
    | "Duregar"
    | "Tiefling"
    | "Orc"
    | "Leonin"
    | "Satyr"
    | "Aasimiar"
    | "Firbolg"
    | "Hobgoblin"
    | "Kobold"
    | "Lizardfolk"
    | "Tabaxi"
    | "Triton"
    | "Centaur"
    | "Loxodon"
    | "Minotaur"
    | "Vedalken"
    | "Changling"
    | "Shifter"
    | "Gith"
    | "Vampire"
    | "Illithid";

  type PlayableRace =
    | "Dwarf"
    | "Elf"
    | "Genasi"
    | "Gnome"
    | "Goblin"
    | "Goliath"
    | "Half-Elf"
    | "Halfling"
    | "Human"
    | "Tortle";

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
    | "Wizard";

  interface NPC {
    name: string;
    type: "npc" | "monster";
    race: Humanoid;
    combatRating?: "1/8" | "1/4" | "1/2" | number;
    monsterType?: string;
    nativeRealm?: Realm | Realm[];
  }

  interface Location {
    name: string;
    type: "City" | "Town" | "Region" | "Landmark";
    inhabitants: Humanoid[];
    description?: string;
    dmNotes?: string;
  }
}

export = Falstera;
export as namespace Falstera;

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
}

export interface SpeciesData {
  flavor_text_entries: FlavorTextEntry[];
}

export interface Stat {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
}

export interface Type {
  type: {
    name: string;
    url: string;
  };
}
export interface Sprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
    home: {
      front_default: string;
    };
  };
}

export interface GalleryProps {
  currentPokemon: {
    sprites: {
      front_default?: string;
      front_shiny?: string;
      back_default?: string;
      back_shiny?: string;
      other?: {
        dream_world?: { front_default: string };
        home?: { front_default: string };
      };
    };
  };
}



export interface Pokemon {
  id: number;
  name: string;
  abilities: Ability[];
  base_experience: number;
  species_url?: string;
  description?: string;
  stats?: Stat[];
  moves?: Move[];
  types?: Type[];
  sprites: Sprites;
}




export interface UseFetchPokemonsResult {
  pokemons: Pokemon[];
  loading: boolean;
  totalPokemons: number;
}
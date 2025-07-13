export interface Gift {
  id: string;
  name: string;
  rarity: 'common' | 'rare';
  emoji: string;
  description?: string;
}

export interface GameState {
  openedBoxes: number;
  revealedGifts: Gift[];
  isGameComplete: boolean;
  currentlyOpening: boolean;
}

export interface Gift {
  id: string;
  name: string;
  rarity: 'common' | 'rare';
  emoji: string;
  description?: string;
}

export interface RevealedGift {
  boxIndex: number;
  gift: Gift;
}

export interface GameState {
  openedBoxes: number;
  revealedGifts: RevealedGift[];
  isGameComplete: boolean;
  currentlyOpeningBoxIndex: number | null
}
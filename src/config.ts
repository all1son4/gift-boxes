import { Gift } from './types';

export const GIFTS: Gift[] = [
  // Common Gifts (70% chance)
  {
    id: 'dinner',
    name: 'Dinner at a Restaurant',
    rarity: 'common',
    emoji: '🍽️',
    description: 'A romantic dinner at your favorite restaurant'
  },
  {
    id: 'movie',
    name: 'A Movie Evening',
    rarity: 'common',
    emoji: '🎬',
    description: 'Cozy movie evening with snacks and cuddles'
  },
  {
    id: 'massage',
    name: 'A Massage',
    rarity: 'common',
    emoji: '💆‍♀️',
    description: 'Relaxing massage to melt your stress away'
  },
  {
    id: 'birthday-upgrade',
    name: 'Birthday Present Upgrade',
    rarity: 'common',
    emoji: '🎁',
    description: 'An extra special upgrade to your upcoming birthday gift'
  },
  {
    id: 'thermo-mug',
    name: 'Cozy Thermo Mug',
    rarity: 'common',
    emoji: '☕',
    description: 'A warm and stylish thermo mug to keep your favorite drinks just right — wherever you are.'
  },
  // Rare Gifts (30% chance)
  {
    id: 'crocs',
    name: 'A Pair of Crocs',
    rarity: 'rare',
    emoji: '👡',
    description: 'Stylish and comfortable Crocs just for you'
  },
  {
    id: 'hair-curler',
    name: 'A Hair Curler',
    rarity: 'rare',
    emoji: '💇‍♀️',
    description: 'Professional hair curler for perfect styling'
  },
  {
    id: 'blender',
    name: 'A Kitchen Blender',
    rarity: 'rare',
    emoji: '🥤',
    description: 'High-quality kitchen blender for smoothies and more (for both of us!)'
  },
  {
    id: 'rituals',
    name: 'Visit to Rituals Store',
    rarity: 'rare',
    emoji: '🛍️',
    description: 'Shopping spree at Rituals for luxury self-care'
  }
];

export const PROBABILITIES = {
  common: 0.7,
  rare: 0.3
};

export const RESTART_USED_KEY = 'gift_game_restart_used';
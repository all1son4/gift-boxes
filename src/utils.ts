import { Gift, GIFTS, PROBABILITIES } from './config';

export const selectRandomGift = (excludeIds: string[]): Gift => {
  const availableGifts = GIFTS.filter(gift => !excludeIds.includes(gift.id));
  
  if (availableGifts.length === 0) {
    throw new Error('No more gifts available');
  }
  
  // Separate by rarity
  const commonGifts = availableGifts.filter(gift => gift.rarity === 'common');
  const rareGifts = availableGifts.filter(gift => gift.rarity === 'rare');
  
  // Determine rarity based on probability
  const random = Math.random();
  const isRare = random < PROBABILITIES.rare;
  
  // Select from appropriate rarity pool
  if (isRare && rareGifts.length > 0) {
    const randomIndex = Math.floor(Math.random() * rareGifts.length);
    return rareGifts[randomIndex];
  } else if (commonGifts.length > 0) {
    const randomIndex = Math.floor(Math.random() * commonGifts.length);
    return commonGifts[randomIndex];
  } else if (rareGifts.length > 0) {
    // Fallback to rare if no common gifts available
    const randomIndex = Math.floor(Math.random() * rareGifts.length);
    return rareGifts[randomIndex];
  }
  
  // This should never happen due to the initial check
  throw new Error('No gifts available');
};
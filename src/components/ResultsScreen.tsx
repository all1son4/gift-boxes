import React from 'react';
import { Gift } from '../types';

interface ResultsScreenProps {
  gifts: Gift[];
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ gifts, onRestart }) => {
  const rareCount = gifts.filter(gift => gift.rarity === 'rare').length;

  return (
    <div className="text-center space-y-4 md:space-y-8">
      <div className="space-y-2 md:space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
          Your Beautiful Gifts! 🎁
        </h2>
        <p className="text-base md:text-xl text-pink-200 px-4">
          You received {rareCount} rare gift{rareCount !== 1 ? 's' : ''} and {3 - rareCount} common gift{3 - rareCount !== 1 ? 's' : ''}!
        </p>
      </div>

      <div className="grid gap-3 md:gap-6 max-w-4xl mx-auto">
        {gifts.map((gift, index) => (
          <div
            key={gift.id}
            className={`p-3 md:p-6 rounded-xl transform transition-all duration-500 ${
              gift.rarity === 'rare'
                ? 'bg-gradient-to-r from-yellow-900/30 to-yellow-700/30 border-2 border-yellow-400/50'
                : 'bg-gradient-to-r from-pink-900/30 to-purple-700/30 border-2 border-pink-400/50'
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
              boxShadow: gift.rarity === 'rare' 
                ? '0 8px 32px rgba(255, 215, 0, 0.2)' 
                : '0 8px 32px rgba(255, 105, 180, 0.2)'
            }}
          >
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className={`text-3xl md:text-4xl ${gift.rarity === 'rare' ? 'animate-pulse' : ''}`}>
                {gift.emoji}
              </div>
              <div className="flex-1 text-left">
                <h3 className={`text-sm md:text-xl font-semibold leading-tight ${
                  gift.rarity === 'rare' ? 'text-yellow-300' : 'text-pink-200'
                }`}>
                  {gift.name}
                  {gift.rarity === 'rare' && (
                    <span className="ml-1 md:ml-2 text-xs md:text-sm bg-yellow-400/20 text-yellow-300 px-1 md:px-2 py-1 rounded-full">
                      ✨ Rare
                    </span>
                  )}
                </h3>
                {gift.description && (
                  <p className="text-xs md:text-base text-gray-300 mt-1 leading-tight">{gift.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 md:space-y-4">
        <p className="text-sm md:text-lg text-pink-200 px-4">
          🌟 These special gifts are waiting for you! 🌟
        </p>
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
        >
          Open New Boxes ✨
        </button>
      </div>
    </div>
  );
};
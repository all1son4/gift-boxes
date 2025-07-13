import React, { useState } from 'react';
import { Gift } from '../types';

interface GiftBoxProps {
  isOpened: boolean;
  onOpen: () => void;
  gift?: Gift;
  isRevealing: boolean;
}

export const GiftBox: React.FC<GiftBoxProps> = ({ isOpened, onOpen, gift, isRevealing }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`relative w-24 h-24 md:w-32 md:h-32 cursor-pointer transform transition-all duration-500 ${
          isHovered && !isOpened ? 'scale-110' : 'scale-100'
        } ${isRevealing ? 'animate-pulse' : ''} md:w-32 md:h-32 w-14 h-14`}
        onClick={!isOpened && !isRevealing ? onOpen : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gift Box */}
        <div
          className={`w-full h-full rounded-lg transition-all duration-700 ${
            isOpened ? 'opacity-0 transform rotate-12 scale-75' : 'opacity-100'
          }`}
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF69B4 100%)',
            boxShadow: isHovered && !isOpened 
              ? '0 8px 32px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 105, 180, 0.4)'
              : '0 4px 16px rgba(255, 215, 0, 0.3)',
          }}
        >
          {/* Ribbon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-pink-500"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-gradient-to-r from-pink-300 to-pink-500"></div>
          
          {/* Bow */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-4 bg-pink-400 rounded-full"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-300 rounded-full"></div>
          </div>
        </div>

        {/* Revealed Gift */}
        {isOpened && gift && (
          <div
            className={`absolute inset-0 flex items-center justify-center transform transition-all duration-700 ${
              isOpened ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className={`text-3xl md:text-6xl ${gift.rarity === 'rare' ? 'animate-bounce' : ''}`}>
              {gift.emoji}
            </div>
            {gift.rarity === 'rare' && (
              <div className="absolute inset-0 rounded-lg animate-pulse"
                   style={{
                     background: 'radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%)',
                     boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
                   }}>
              </div>
            )}
          </div>
        )}

        {/* Particles for rare gifts */}
        {isOpened && gift?.rarity === 'rare' && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Gift Name */}
      {isOpened && gift && (
        <div className="mt-2 md:mt-3 text-center transform transition-all duration-700 delay-300 px-1 flex flex-col items-center">
          <h3 className={`text-sm md:text-lg font-semibold max-w-[110px] ${
            gift.rarity === 'rare' ? 'text-yellow-300' : 'text-pink-200'
          }`}>
            {gift.name}
          </h3>
          {gift.description && (
            <p className="text-xs md:text-sm text-gray-300 mt-1 max-w-24 md:max-w-48 mx-auto leading-tight">
              {gift.description}
            </p>
          )}
        </div>
      )}

      {/* Click hint */}
      {!isOpened && !isRevealing && (
        <div className="mt-2 md:mt-3 text-center px-1">
          <p className="text-xs md:text-sm text-pink-200 opacity-75">Tap to open!</p>
        </div>
      )}
    </div>
  );
};
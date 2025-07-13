import { useState } from 'react';
import { GameState } from './types';
import { selectRandomGift } from './utils';
import { GiftBox } from './components/GiftBox';
import { ResultsScreen } from './components/ResultsScreen';
import { useFix100vh } from './hooks/useFix100vh';

function App() {
  useFix100vh();
  const [gameState, setGameState] = useState<GameState>({
    openedBoxes: 0,
    revealedGifts: [],
    isGameComplete: false,
    currentlyOpening: false
  });

  const handleBoxOpen = (_boxIndex: number) => {
    if (gameState.currentlyOpening || gameState.openedBoxes >= 3) return;

    setGameState(prev => ({ ...prev, currentlyOpening: true }));

    // Simulate opening animation delay
    setTimeout(() => {
      const excludeIds = gameState.revealedGifts.map(gift => gift.id);
      const newGift = selectRandomGift(excludeIds);
      
      setGameState(prev => ({
        ...prev,
        openedBoxes: prev.openedBoxes + 1,
        revealedGifts: [...prev.revealedGifts, newGift],
        currentlyOpening: false,
        isGameComplete: prev.openedBoxes + 1 >= 3
      }));
    }, 1000);
  };

  const handleRestart = () => {
    setGameState({
      openedBoxes: 0,
      revealedGifts: [],
      isGameComplete: false,
      currentlyOpening: false
    });
  };

  return (
    <div className="relative overflow-hidden" style={{ height: 'calc(var(--vh) * 100)', background: 'radial-gradient(ellipse at center, rgba(139, 69, 19, 0.3) 0%, rgba(25, 25, 112, 0.8) 50%, rgba(0, 0, 0, 0.9) 100%)' }}>      
      {/* Polaroid background photos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Photo 1 - Top left */}
        <div 
          className="absolute top-8 left-4 md:top-12 md:left-8 transform -rotate-12 opacity-45 hover:opacity-55 transition-opacity duration-500"
          style={{ filter: 'sepia(20%) brightness(0.8)' }}
        >
          <div className="bg-white p-2 shadow-lg" style={{ width: '140px', height: '160px' }}>
            <img 
              src="https://res.cloudinary.com/daeqbpscy/image/upload/v1752415027/photo_2025-07-13_15.56.42_iarakb.jpg" 
              alt="Memory" 
              className="w-full h-28 object-cover"
            />
            <div className="h-10 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-gray-300"></div>
            </div>
          </div>
          {/* Paper clip */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-5 h-7 border-2 border-gray-400 rounded-t-lg opacity-60"></div>
        </div>

        {/* Photo 2 - Top right */}
        <div 
          className="absolute top-16 right-4 md:top-20 md:right-8 transform rotate-6 opacity-45 hover:opacity-55 transition-opacity duration-500"
          style={{ filter: 'sepia(30%) brightness(0.7)' }}
        >
          <div className="bg-white p-2 shadow-lg" style={{ width: '130px', height: '150px' }}>
            <img 
              src="https://res.cloudinary.com/daeqbpscy/image/upload/v1752415027/photo_2025-07-13_15.56.45_u88d4x.jpg" 
              alt="Memory" 
              className="w-full h-24 object-cover"
            />
            <div className="h-8 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            </div>
          </div>
          {/* Paper clip */}
          <div className="absolute top-2 right-2 w-4 h-6 border-2 border-gray-400 rounded-t-lg opacity-60"></div>
        </div>

        {/* Photo 3 - Bottom left */}
        <div 
          className="absolute bottom-12 left-2 md:bottom-16 md:left-6 transform rotate-3 opacity-45 hover:opacity-55 transition-opacity duration-500"
          style={{ filter: 'sepia(25%) brightness(0.6)' }}
        >
          <div className="bg-white p-2 shadow-lg" style={{ width: '120px', height: '140px' }}>
            <img 
              src="https://res.cloudinary.com/daeqbpscy/image/upload/v1752415027/photo_2025-07-13_15.56.44_v6dffq.jpg" 
              alt="Memory" 
              className="w-full h-24 object-cover"
            />
            <div className="h-8 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-gray-300"></div>
            </div>
          </div>
          {/* Paper clip */}
          <div className="absolute top-1 left-1/3 w-4 h-5 border-2 border-gray-400 rounded-t-lg opacity-60"></div>
        </div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 h-[100vh] container mx-auto px-4 py-8 flex flex-col justify-center">
        {!gameState.isGameComplete ? (
          <div className="text-center space-y-6 md:space-y-12">
            {/* Header */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Mystery Gift Boxes
              </h1>
              <p className="text-base md:text-xl text-pink-200 max-w-2xl mx-auto px-4">
                Three magical boxes await you, each containing a special surprise.
                Choose carefully - each box holds a unique gift just for you! ✨
              </p>
              <div className="flex justify-center space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i < gameState.openedBoxes
                        ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
                        : 'bg-gray-600'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Gift Boxes */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-16">
              {[...Array(3)].map((_, index) => (
                <GiftBox
                  key={index}
                  isOpened={index < gameState.openedBoxes}
                  onOpen={() => handleBoxOpen(index)}
                  gift={gameState.revealedGifts[index]}
                  isRevealing={gameState.currentlyOpening && index === gameState.openedBoxes}
                />
              ))}
            </div>

            {gameState.openedBoxes > 0 && (
              <p className="text-pink-200 text-base md:text-lg px-4">
                {gameState.openedBoxes === 1 && "Beautiful! Two more boxes to go..."}
                {gameState.openedBoxes === 2 && "Amazing! One final box awaits..."}
              </p>
            )}
          </div>
        ) : (
          <ResultsScreen gifts={gameState.revealedGifts} onRestart={handleRestart} />
        )}
      </div>

      {/* Corner decoration */}
      <div className="absolute top-4 right-4 text-2xl opacity-50">✨</div>
      <div className="absolute bottom-4 left-4 text-2xl opacity-50">💖</div>
      <div className="absolute top-1/4 left-4 text-xl opacity-30">🌟</div>
      <div className="absolute bottom-1/4 right-4 text-xl opacity-30">💫</div>
    </div>
  );
}

export default App;
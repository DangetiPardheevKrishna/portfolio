// // app/components/2048-game.tsx
// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   RefreshCw,
//   Home,
//   Gamepad2,
//   ArrowUp,
//   ArrowDown,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";
// import Link from "next/link";

// export default function Game2048() {
//   const [board, setBoard] = useState<number[][]>([]);
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(false);

//   const initializeBoard = () => {
//     const newBoard = Array(4)
//       .fill(0)
//       .map(() => Array(4).fill(0));
//     addRandomTile(newBoard);
//     addRandomTile(newBoard);
//     return newBoard;
//   };

//   const addRandomTile = (board: number[][]) => {
//     const emptyCells: [number, number][] = [];
//     board.forEach((row, i) => {
//       row.forEach((cell, j) => {
//         if (cell === 0) emptyCells.push([i, j]);
//       });
//     });

//     if (emptyCells.length > 0) {
//       const [i, j] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//       board[i][j] = Math.random() < 0.9 ? 2 : 4;
//     }
//   };

//   const moveLeft = (board: number[][]) => {
//     const newBoard = board.map((row) => {
//       const filtered = row.filter((cell) => cell !== 0);
//       for (let i = 0; i < filtered.length - 1; i++) {
//         if (filtered[i] === filtered[i + 1]) {
//           filtered[i] *= 2;
//           setScore((prev) => prev + filtered[i]);
//           filtered.splice(i + 1, 1);
//         }
//       }
//       while (filtered.length < 4) filtered.push(0);
//       return filtered;
//     });
//     return newBoard;
//   };

//   const rotateBoard = (board: number[][], times: number) => {
//     let result = [...board.map((row) => [...row])];
//     for (let t = 0; t < times; t++) {
//       result = result[0].map((_, colIndex) =>
//         result.map((row) => row[colIndex]).reverse()
//       );
//     }
//     return result;
//   };

//   const move = (direction: "left" | "right" | "up" | "down") => {
//     if (gameOver) return;

//     let newBoard = [...board.map((row) => [...row])];
//     let rotatedTimes = 0;

//     switch (direction) {
//       case "right":
//         rotatedTimes = 2;
//         break;
//       case "up":
//         rotatedTimes = 1;
//         break;
//       case "down":
//         rotatedTimes = 3;
//         break;
//       default:
//         rotatedTimes = 0;
//     }

//     newBoard = rotateBoard(newBoard, rotatedTimes);
//     newBoard = moveLeft(newBoard);
//     newBoard = rotateBoard(newBoard, (4 - rotatedTimes) % 4);

//     if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
//       addRandomTile(newBoard);
//       setBoard(newBoard);
//     }

//     checkGameOver(newBoard);
//   };

//   const checkGameOver = (board: number[][]) => {
//     const hasEmpty = board.some((row) => row.some((cell) => cell === 0));
//     if (hasEmpty) return;

//     const hasMoves = board.some((row, i) =>
//       row.some((cell, j) => {
//         if (i < 3 && cell === board[i + 1][j]) return true;
//         if (j < 3 && cell === board[i][j + 1]) return true;
//         return false;
//       })
//     );

//     if (!hasMoves) setGameOver(true);
//   };

//   const handleKeyPress = useCallback(
//     (e: KeyboardEvent) => {
//       switch (e.key) {
//         case "ArrowLeft":
//           move("left");
//           break;
//         case "ArrowRight":
//           move("right");
//           break;
//         case "ArrowUp":
//           move("up");
//           break;
//         case "ArrowDown":
//           move("down");
//           break;
//       }
//     },
//     [board, gameOver]
//   );

//   useEffect(() => {
//     setBoard(initializeBoard());
//   }, []);

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyPress);
//     return () => window.removeEventListener("keydown", handleKeyPress);
//   }, [handleKeyPress]);

//   const resetGame = () => {
//     setBoard(initializeBoard());
//     setScore(0);
//     setGameOver(false);
//   };

//   const getTileColor = (value: number) => {
//     const colors: Record<number, string> = {
//       0: "bg-gray-200",
//       2: "bg-yellow-100",
//       4: "bg-yellow-200",
//       8: "bg-orange-200",
//       16: "bg-orange-300",
//       32: "bg-red-200",
//       64: "bg-red-300",
//       128: "bg-red-400",
//       256: "bg-purple-300",
//       512: "bg-purple-400",
//       1024: "bg-blue-400",
//       2048: "bg-blue-500",
//     };
//     return colors[value] || "bg-blue-600";
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-card rounded-xl border shadow-lg">
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-2">
//           <Gamepad2 className="w-6 h-6 text-primary" />
//           <h3 className="text-xl font-bold">2048 Game</h3>
//         </div>
//         <div className="text-right">
//           <div className="text-sm text-muted-foreground">Score</div>
//           <div className="text-2xl font-bold text-primary">{score}</div>
//         </div>
//       </div>

//       {gameOver && (
//         <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-lg text-center font-semibold">
//           Game Over! Final Score: {score}
//         </div>
//       )}

//       <div className="mb-6">
//         <div className="bg-gray-100 p-3 rounded-lg grid grid-cols-4 gap-2">
//           {board.map((row, i) =>
//             row.map((cell, j) => (
//               <div
//                 key={`${i}-${j}`}
//                 className={`aspect-square flex items-center justify-center rounded-lg font-bold text-lg ${getTileColor(
//                   cell
//                 )} ${cell >= 8 ? "text-white" : "text-gray-800"}`}
//               >
//                 {cell !== 0 ? cell : ""}
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       <div className="space-y-4">
//         <div className="text-center text-sm text-muted-foreground">
//           Use arrow keys or buttons to play
//         </div>

//         <div className="flex flex-col items-center gap-2">
//           <Button
//             onClick={() => move("up")}
//             size="sm"
//             variant="outline"
//             className="w-16"
//           >
//             <ArrowUp className="w-4 h-4" />
//           </Button>
//           <div className="flex gap-2">
//             <Button
//               onClick={() => move("left")}
//               size="sm"
//               variant="outline"
//               className="w-16"
//             >
//               <ArrowLeft className="w-4 h-4" />
//             </Button>
//             <Button
//               onClick={() => move("down")}
//               size="sm"
//               variant="outline"
//               className="w-16"
//             >
//               <ArrowDown className="w-4 h-4" />
//             </Button>
//             <Button
//               onClick={() => move("right")}
//               size="sm"
//               variant="outline"
//               className="w-16"
//             >
//               <ArrowRight className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
//           <Button onClick={resetGame} className="gap-2">
//             <RefreshCw className="w-4 h-4" />
//             New Game
//           </Button>
//           <Button asChild variant="outline" className="gap-2">
//             <Link href="/">
//               <Home className="w-4 h-4" />
//               Back to Home
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// app/not-found.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  ArrowLeft,
  Rocket,
  Sparkles,
  Satellite,
  Zap,
  Stars,
  Gamepad2,
  Telescope,
  SatelliteDish,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import { FloatingDock } from "@/components/magicui/floating-dock";
import { Meteors } from "@/components/ui/meteors";
// import { StarsBackground } from "@/components/magicui/stars-background";
import { ShinyButton } from "@/components/ui/shiny-button";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export default function NotFound() {
  const [isDragging, setIsDragging] = useState(false);
  const [astronautPos, setAstronautPos] = useState({ x: 50, y: 50 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [gameSelected, setGameSelected] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating astronaut drag interaction
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - container.left) / container.width) * 100;
    const y = ((e.clientY - container.top) / container.height) * 100;

    setAstronautPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  // Touch support for mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const touch = e.touches[0];
    const container = containerRef.current.getBoundingClientRect();
    const x = ((touch.clientX - container.left) / container.width) * 100;
    const y = ((touch.clientY - container.top) / container.height) * 100;

    setAstronautPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const launchRocket = () => {
    setShowConfetti(true);
    const astronaut = document.querySelector(".astronaut");
    if (astronaut) {
      astronaut.classList.add("launching");
      setTimeout(() => {
        astronaut.classList.remove("launching");
      }, 1000);
    }
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const dockItems = [
    {
      title: "Home",
      icon: <Home className="h-5 w-5" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <Satellite className="h-5 w-5" />,
      href: "/projects",
    },
    {
      title: "About",
      icon: <Telescope className="h-5 w-5" />,
      href: "/about",
    },
    {
      title: "Contact",
      icon: <SatelliteDish className="h-5 w-5" />,
      href: "/contact",
    },
  ];

  const spaceFacts = [
    "There are more stars in the universe than grains of sand on all Earth's beaches.",
    "A day on Venus is longer than a year on Venus.",
    "Neutron stars can spin at a rate of 600 rotations per second.",
    "The Sun makes up 99.86% of the mass in our solar system.",
    "Space is completely silent because there's no medium for sound to travel through.",
  ];

  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % spaceFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      {/* Background Elements */}
      {/* <StarsBackground className="fixed inset-0" /> */}
      <Meteors number={20} />
      {/* Animated Planets */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-15"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* 404 Text with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative mb-8"
        >
          <div className="relative">
            <h1 className="text-[180px] md:text-[220px] font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
          </div>

          {/* Orbiting circles around 404 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <OrbitingCircles radius={120} speed={0.8}>
              {/* <Planet className="w-8 h-8 text-cyan-400" /> */}
              <Satellite className="w-8 h-8 text-purple-400" />
              <Stars className="w-8 h-8 text-yellow-400" />
              <Sparkles className="w-8 h-8 text-pink-400" />
            </OrbitingCircles>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Houston, We Have a Problem!
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            This page seems to have drifted into deep space. But hey, you found
            a friendly astronaut!
          </p>

          {/* Space Fact Carousel */}
          <div className="inline-block p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <p className="text-cyan-100">{spaceFacts[currentFact]}</p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Astronaut */}
        <motion.div
          className="astronaut absolute cursor-grab active:cursor-grabbing z-20"
          style={{
            left: `${astronautPos.x}%`,
            top: `${astronautPos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          whileDrag={{ scale: 1.1 }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="relative group">
            {/* Astronaut Body */}
            <div className="relative w-24 h-32 bg-gradient-to-b from-white to-gray-200 rounded-full p-2">
              {/* Helmet */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-b from-cyan-100 to-blue-100 rounded-full border-4 border-cyan-300">
                {/* Visor */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full" />
                {/* Reflection */}
                <div className="absolute top-6 left-8 w-6 h-4 bg-white/30 rounded-full blur-sm" />
              </div>

              {/* Body Details */}
              <div className="absolute top-24 left-1/2 -translate-x-1/2 w-12 h-8 bg-gray-300 rounded-full" />
              <div className="absolute top-28 left-4 w-4 h-10 bg-gray-300 rounded-full rotate-12" />
              <div className="absolute top-28 right-4 w-4 h-10 bg-gray-300 rounded-full -rotate-12" />
            </div>

            {/* Tooltip */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg whitespace-nowrap">
                <span className="text-sm">Drag me around! 👨‍🚀</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </div>

            {/* Thruster Effect */}
            <AnimatePresence>
              {isDragging && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2"
                >
                  <div className="flex flex-col items-center">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-8 bg-gradient-to-t from-yellow-500 via-orange-500 to-transparent rounded-full"
                        animate={{
                          height: [8, 16, 8],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <ShinyButton
            onClick={launchRocket}
            className="flex items-center gap-2 text-lg px-8 py-6 rounded-full"
          >
            {/* <Rocket className="w-5 h-5" /> */}
            <span>Launch Rocket</span>
          </ShinyButton>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 px-8 py-6 rounded-full border-cyan-400/30 text-cyan-100 hover:bg-cyan-400/10"
          >
            <Link href="/">
              <Home className="w-5 h-5" />
              Return to Earth
            </Link>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="gap-2 px-8 py-6 rounded-full text-gray-300 hover:text-white hover:bg-white/5"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5" />
            Navigate Back
          </Button>
        </motion.div>

        {/* Floating Navigation Dock */}
        {/* <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <FloatingDock items={dockItems} />
        </div> */}

        {/* Interactive Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      {/* Confetti Effect */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: [
                    "#f87171",
                    "#60a5fa",
                    "#34d399",
                    "#fbbf24",
                    "#a78bfa",
                  ][Math.floor(Math.random() * 5)],
                }}
                initial={{ y: -100, rotate: 0 }}
                animate={{
                  y: "100vh",
                  rotate: 360,
                  x: Math.random() * 100 - 50,
                }}
                transition={{
                  duration: 2 + Math.random(),
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* CSS Animations */}
      <style jsx global>{`
        .astronaut.launching {
          animation: launch 1s ease-out forwards;
        }

        @keyframes launch {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -100px) scale(1.2);
          }
          100% {
            transform: translate(-50%, -100vh) scale(0);
          }
        }
      `}</style>
    </div>
  );
}

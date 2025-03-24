import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import chibiAnimation from "../assets/chibi-bow.json"; // Your Lottie JSON
import bowSound from "../assets/mono.wav"; // Your sound file

const AnimeEffect = ({ lang }) => {
  const [showEffect, setShowEffect] = useState(false);
  const audioRef = useRef(new Audio(bowSound)); // Keep a single audio instance
  const [hasInteracted, setHasInteracted] = useState(false); // To track user interaction

  useEffect(() => {
    // Function to play the animation and sound
    const playAnimationAndSound = () => {
      setShowEffect(true);

      // Reset audio and set volume to 5%
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.05; // Set volume to 5%
      audioRef.current.play().catch((err) => console.error("Audio play error:", err));

      // Stop the music after 30 seconds
      const stopMusicTimeout = setTimeout(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset the sound to the beginning
      }, 30000); // 30 seconds (30000 ms)

      // Hide animation after 4 seconds
      const effectTimeout = setTimeout(() => setShowEffect(false), 4000);

      return () => {
        clearTimeout(effectTimeout);
        clearTimeout(stopMusicTimeout); // Clear the stop music timeout
      };
    };

    // Trigger the animation and sound on initial render (even on page reload)
    if (hasInteracted) {
      playAnimationAndSound();
    }

  }, [hasInteracted]); // Trigger only when interaction happens or hasInteracted state changes

  useEffect(() => {
    if (lang === "jp" || lang === "en") {
      // Play animation and sound on language change as well
      setShowEffect(true);

      // Reset and play sound at 5% volume
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.05; // Set volume to 5%
      audioRef.current.play().catch((err) => console.error("Audio play error:", err));

      // Stop the music after 30 seconds
      const stopMusicTimeout = setTimeout(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset the sound to the beginning
      }, 30000); // 30 seconds (30000 ms)

      // Hide animation after 4 seconds
      const effectTimeout = setTimeout(() => setShowEffect(false), 4000);

      return () => {
        clearTimeout(effectTimeout);
        clearTimeout(stopMusicTimeout); // Clear the stop music timeout
      };
    }
  }, [lang]); // Ensures the animation and sound trigger on language change

  // Listen for first interaction to trigger sound on page load
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true); // Mark as interacted
      }
    };

    // Add event listener for any user interaction (click, etc.)
    window.addEventListener("click", handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, [hasInteracted]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {showEffect && (
        <>
          {/* Floating Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-12 bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg pointer-events-auto"
          >
            {lang === "jp" ? "Sarwanのポートフォリオへようこそ！" : "Welcome to Sarwan's Portfolio!"}
          </motion.div>

          {/* Chibi Animation */}
          <motion.div
            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 pointer-events-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="w-[140px] h-[140px] overflow-hidden rounded-full bg-white shadow-md flex items-center justify-center">
              <Lottie
                animationData={chibiAnimation}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Ensures full image fits properly
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center text-sm bg-white text-black px-3 py-1 rounded shadow-lg mt-5" // Adjusted margin-top to push it slightly down
            >
              {lang === "jp" ? "よろしくお願いします!" : "Welcome!"}
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default AnimeEffect;

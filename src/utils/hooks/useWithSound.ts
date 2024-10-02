import { useRef, useEffect } from 'react';

export const useWithSound = (audio: string) => {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    soundRef.current = new Audio(audio);
    soundRef.current.volume = 0.3;
  }, []);

  const playSound = () => {
    if (!soundRef.current) return;

    soundRef.current.play();
  };

  return {
    playSound,
  };
};

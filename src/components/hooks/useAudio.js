import { useMemo, useEffect } from 'react';

export const useAudio = (src, play, volume, loop, onDone) => {
  const audio = useMemo(
    () => {
      const audio = new Audio(src);
      audio.loop = loop;
      audio.volume = volume / 100;
      return audio;
    },
    [src, volume, loop]
  );

  useEffect(() => {
    const ended = () => onDone && onDone();

    if(play) {
      audio.play().then();
      audio.addEventListener('ended', ended);
    }

    return () => {
      audio.pause();
      audio.addEventListener('ended', ended);
    }
  }, [audio, play, onDone]);
}

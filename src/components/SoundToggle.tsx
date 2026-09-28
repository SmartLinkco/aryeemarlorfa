"use client";

import { useEffect, useRef, useState } from "react";

type Rain = {
  stop: () => void;
};

function startRain(): Rain {
  const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new AudioCtx();
  const length = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < length; i += 1) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.2;
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 780;
  const gain = ctx.createGain();
  gain.gain.value = 0.035;
  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start();

  let alive = true;
  let timer = 0;
  const drip = () => {
    if (!alive) return;
    const osc = ctx.createOscillator();
    const drop = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 880 + Math.random() * 1600;
    osc.connect(drop);
    drop.connect(ctx.destination);
    const now = ctx.currentTime;
    drop.gain.setValueAtTime(0.0001, now);
    drop.gain.exponentialRampToValueAtTime(0.018, now + 0.012);
    drop.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
    osc.start(now);
    osc.stop(now + 0.15);
    timer = window.setTimeout(drip, 260 + Math.random() * 980);
  };
  drip();

  return {
    stop: () => {
      alive = false;
      window.clearTimeout(timer);
      try {
        source.stop();
      } catch {
        /* already stopped */
      }
      void ctx.close();
    },
  };
}

export function SoundToggle() {
  const [on, setOn] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const rain = useRef<Rain | null>(null);

  useEffect(() => {
    return () => {
      rain.current?.stop();
      rain.current = null;
    };
  }, []);

  function toggle() {
    if (on) {
      rain.current?.stop();
      rain.current = null;
      setOn(false);
      return;
    }
    try {
      rain.current = startRain();
      setOn(true);
    } catch {
      setUnavailable(true);
      setOn(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Stop soft rain sounds" : "Play soft rain sounds"}
      title={unavailable ? "Sound is unavailable in this browser" : "Soft rain, off until you choose it"}
      className={`inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border px-2.5 text-xs tracking-wide transition sm:px-3 ${
        on ? "border-moss bg-mist text-moss" : "border-ink/15 text-ink/80 hover:border-ink/40"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
        <path
          d="M12 3c2 3 3 5 3 7a3 3 0 1 1-6 0c0-2 1-4 3-7Z"
          fill="currentColor"
        />
        <path d="M6 14c.8 1.4 1.2 2.4 1.2 3.2a1.6 1.6 0 1 1-3.2 0C4 16.4 4.6 15.2 6 14Zm12 1c.7 1.2 1 2 1 2.7a1.3 1.3 0 1 1-2.6 0c0-.7.4-1.5 1-2.7Z" fill="currentColor" />
      </svg>
      <span className="hidden sm:inline">{on ? "Rain on" : "Rain"}</span>
      <span className="sr-only">Atmosphere is off until you start it. No audio plays automatically.</span>
    </button>
  );
}

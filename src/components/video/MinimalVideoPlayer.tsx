"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink } from "lucide-react";

interface MinimalVideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  driveEmbedUrl: string;
  title: string;
}

export default function MinimalVideoPlayer({
  videoSrc,
  posterSrc,
  driveEmbedUrl,
  title,
}: MinimalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [showControls, setShowControls] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeTab, setActiveTab] = useState<"local" | "embed">("local");

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setProgress((current / total) * 100);
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen().catch((err) => console.error(err));
    }
  };

  return (
    <div className="w-full my-8">
      {/* Player Header: Tabs to toggle between Local Stream & Drive Preview */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Source:
          </span>
          <button
            onClick={() => setActiveTab("local")}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-colors duration-200 ${
              activeTab === "local"
                ? "bg-foreground text-background font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Direct 60fps Stream
          </button>
          <button
            onClick={() => setActiveTab("embed")}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-colors duration-200 ${
              activeTab === "embed"
                ? "bg-foreground text-background font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Google Drive Preview
          </button>
        </div>

        <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
          {title} • Verified Demonstration
        </span>
      </div>

      {/* Main Video Frame */}
      {activeTab === "local" ? (
        <div
          ref={containerRef}
          className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/90 border border-border/80 shadow-2xl group"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          {/* Native HTML5 Video Element */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Initial Poster Play Overlay */}
          {!hasStarted && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300 hover:bg-black/30"
              data-cursor="play"
            >
              <div className="w-20 h-20 rounded-full bg-brand/90 text-white flex items-center justify-center pl-1 shadow-2xl transform group-hover:scale-105 transition-transform duration-200">
                <Play className="w-8 h-8 fill-current" />
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-white/90">
                Play Project Walkthrough
              </p>
            </div>
          )}

          {/* Minimal Controls Bar */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
              showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Scrubber Range */}
            <div className="w-full flex items-center mb-2.5">
              <input
                type="range"
                min="0"
                max="100"
                value={progress || 0}
                onChange={handleSeek}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand"
                aria-label="Video scrubber timeline"
              />
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between text-white text-xs font-mono">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="p-1 hover:text-brand transition-colors duration-150"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1 hover:text-brand transition-colors duration-150"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <span className="text-white/70 text-[11px]">
                  {currentTime} / {duration}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleFullscreen}
                  className="p-1 hover:text-brand transition-colors duration-150"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Google Drive Preview Embed Fallback */
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/90 border border-border/80 shadow-2xl">
          <iframe
            src={driveEmbedUrl}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
            title={`${title} Google Drive Preview`}
          />
        </div>
      )}

      {/* Caption note */}
      <div className="mt-2.5 flex items-center justify-between text-xs font-mono text-muted-foreground">
        <span>Recorded directly from browser execution</span>
        <a
          href={driveEmbedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand inline-flex items-center space-x-1"
        >
          <span>Open raw video in Google Drive</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

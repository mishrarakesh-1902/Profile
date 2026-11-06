'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function canCreateWebGLContext(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    if (!gl) return false;
    const loseContext = (gl as WebGLRenderingContext).getExtension("WEBGL_lose_context");
    if (loseContext) {
      loseContext.loseContext();
    }
    return true;
  } catch {
    return false;
  }
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Spline WebGL failed to initialize:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(canCreateWebGLContext());
  }, []);

  const fallbackUI = (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden p-6 select-none">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(56, 189, 248, 0.08) 35%, transparent 70%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
        <div className="w-16 h-16 rounded-2xl bg-neutral-900/90 border border-violet-500/20 shadow-2xl shadow-violet-500/20 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        </div>
        <p className="text-xs uppercase font-mono tracking-widest text-violet-400 mb-1">
          3D Interactive Scene
        </p>
        <p className="text-sm text-neutral-400">
          WebGL graphics context was busy or hardware acceleration is limited.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-1.5 text-xs font-medium rounded-full bg-violet-600/20 hover:bg-violet-600/30 text-violet-200 border border-violet-500/30 transition-all cursor-pointer"
        >
          Reload 3D Engine ↻
        </button>
      </div>
    </div>
  );

  if (webglSupported === false) {
    return fallbackUI;
  }

  return (
    <WebGLErrorBoundary fallback={fallbackUI}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs tracking-[0.18em] text-neutral-500 uppercase animate-pulse">
              Loading scene…
            </span>
          </div>
        }
      >
        <Spline scene={scene} className={className} />
      </Suspense>
    </WebGLErrorBoundary>
  );
}

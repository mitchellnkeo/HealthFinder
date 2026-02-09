import React from 'react';

/**
 * Site-wide watermark using the Symptra "S" logo.
 * Fixed in the bottom-right corner, low opacity, non-interactive.
 */
export function Watermark() {
  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      <img
        src="/favicon.png"
        alt=""
        className="w-[180px] h-[180px] opacity-[0.08]"
      />
    </div>
  );
}

export default Watermark;

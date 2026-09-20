import type { ReactNode } from "react";

type ArtFrameProps = {
  children: ReactNode;
  className?: string;
};

export function ArtFrame({ children, className = "" }: ArtFrameProps) {
  return (
    <div className={`art-frame ${className}`.trim()}>
      <span aria-hidden className="art-frame-inset" />
      <span aria-hidden className="art-corner art-corner-tl" />
      <span aria-hidden className="art-corner art-corner-tr" />
      <span aria-hidden className="art-corner art-corner-bl" />
      <span aria-hidden className="art-corner art-corner-br" />
      {children}
    </div>
  );
}

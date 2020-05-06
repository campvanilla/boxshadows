import React from 'react';

export const ElementSectionIcon = () => {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4z" fill="currentColor" /></svg>
  );
};

export const ColorSectionIcon = () => {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.773 5.287L8 1.513 4.227 5.287a5.335 5.335 0 000 7.54A5.32 5.32 0 008 14.387a5.32 5.32 0 003.773-1.56 5.335 5.335 0 000-7.54zM8 13.06a3.952 3.952 0 01-2.827-1.173A3.964 3.964 0 014 9.06c0-1.067.413-2.073 1.173-2.827L8 3.4v9.66z" fill="currentColor" /></svg>
  );
};

export const ShadowSectionIcon = () => {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.733" y="3.733" width="11.267" height="12.133" rx="1" fill="#9FAABC" /><rect x="2" y="1" width="11.267" height="12.133" rx="1" fill="currentColor" /><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></svg>
  );
};

export const TrashIcon = ({ onClick }: { onClick: React.MouseEventHandler<SVGSVGElement> }) => {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}><path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.334 1.334 0 01-1.334-1.334V4h9.334zM6.667 7.333v4M9.333 7.333v4" stroke="#BFC9D9" /></svg>
  );
};

export const Edit = ({ onClick }: { onClick?: React.MouseEventHandler<SVGSVGElement> }) => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}><path d="M8.25 3H3a1.5 1.5 0 00-1.5 1.5V15A1.5 1.5 0 003 16.5h10.5A1.5 1.5 0 0015 15V9.75" stroke="#BFC9D9" /><path d="M13.875 1.875a1.591 1.591 0 112.25 2.25L9 11.25 6 12l.75-3 7.125-7.125z" stroke="#BFC9D9" /></svg>
  );
};

export const Copy = ({ onClick }: { onClick?: React.MouseEventHandler<SVGSVGElement> }) => {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}><path d="M15 6.75H8.25a1.5 1.5 0 00-1.5 1.5V15a1.5 1.5 0 001.5 1.5H15a1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5z" stroke="#BFC9D9"/><path d="M3.75 11.25H3a1.5 1.5 0 01-1.5-1.5V3A1.5 1.5 0 013 1.5h6.75a1.5 1.5 0 011.5 1.5v.75" stroke="#BFC9D9" /></svg>
  );
};

export const Share = ({ onClick }: { onClick?: React.MouseEventHandler<SVGSVGElement> }) => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}><path d="M13.5 6a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM4.5 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM13.5 16.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM6.443 10.133l5.122 2.985M11.558 4.883L6.443 7.868" stroke="#BFC9D9" /></svg>
  );
};

export const Slider = ({ onClick }: { onClick?: React.MouseEventHandler<SVGSVGElement> }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" stroke="#BFC9D9" /></svg>
  );
};

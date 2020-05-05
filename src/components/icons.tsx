import React from 'react';

export const ElementSectionIcon = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4V12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V4Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const ColorSectionIcon = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.7733 5.28676L7.99999 1.51343L4.22666 5.28676C2.14666 7.36676 2.14666 10.7468 4.22666 12.8268C5.26666 13.8668 6.63332 14.3868 7.99999 14.3868C9.36666 14.3868 10.7333 13.8668 11.7733 12.8268C13.8533 10.7468 13.8533 7.36676 11.7733 5.28676ZM7.99999 13.0601C6.93332 13.0601 5.92666 12.6468 5.17332 11.8868C4.41332 11.1268 3.99999 10.1268 3.99999 9.0601C3.99999 7.99343 4.41332 6.98676 5.17332 6.23343L7.99999 3.40009V13.0601Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const ShadowSectionIcon = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <rect x='4.73334' y='3.7334' width='11.2667' height='12.1333' rx='1' fill='#9FAABC' />
        <rect x='2' y='1' width='11.2667' height='12.1333' rx='1' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TrashIcon = ({ onClick }: { onClick: React.MouseEventHandler<SVGSVGElement> }) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={onClick}>
      <path d='M2 4H3.33333H14' stroke='#BFC9D9' strokeWidth='1.33333' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M5.33331 3.99992V2.66659C5.33331 2.31296 5.47379 1.97382 5.72384 1.72378C5.97389 1.47373 6.31302 1.33325 6.66665 1.33325H9.33331C9.68694 1.33325 10.0261 1.47373 10.2761 1.72378C10.5262 1.97382 10.6666 2.31296 10.6666 2.66659V3.99992M12.6666 3.99992V13.3333C12.6666 13.6869 12.5262 14.026 12.2761 14.2761C12.0261 14.5261 11.6869 14.6666 11.3333 14.6666H4.66665C4.31302 14.6666 3.97389 14.5261 3.72384 14.2761C3.47379 14.026 3.33331 13.6869 3.33331 13.3333V3.99992H12.6666Z'
        stroke='#BFC9D9'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66669 7.33325V11.3333'
        stroke='#BFC9D9'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.33331 7.33325V11.3333'
        stroke='#BFC9D9'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const Edit = ({ onClick }: { onClick: React.MouseEventHandler<SVGSVGElement>}) => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={onClick}>
      <path
        d='M8.25 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V9.75'
        stroke='#BFC9D9'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.875 1.87493C14.1734 1.57656 14.578 1.40894 15 1.40894C15.422 1.40894 15.8266 1.57656 16.125 1.87493C16.4234 2.17329 16.591 2.57797 16.591 2.99993C16.591 3.42188 16.4234 3.82656 16.125 4.12493L9 11.2499L6 11.9999L6.75 8.99993L13.875 1.87493Z'
        stroke='#BFC9D9'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export const Copy = ({ onClick }: { onClick: React.MouseEventHandler<SVGSVGElement>}) => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={onClick}>
      <path
        d='M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z'
        stroke='#BFC9D9'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75'
        stroke='#BFC9D9'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export const Share = ({ onClick }: { onClick: React.MouseEventHandler<SVGSVGElement>}) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M13.5 6C14.7426 6 15.75 4.99264 15.75 3.75C15.75 2.50736 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.50736 11.25 3.75C11.25 4.99264 12.2574 6 13.5 6Z" stroke='#BFC9D9' strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 11.25C5.74264 11.25 6.75 10.2426 6.75 9C6.75 7.75736 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 7.75736 2.25 9C2.25 10.2426 3.25736 11.25 4.5 11.25Z" stroke='#BFC9D9' strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 16.5C14.7426 16.5 15.75 15.4926 15.75 14.25C15.75 13.0074 14.7426 12 13.5 12C12.2574 12 11.25 13.0074 11.25 14.25C11.25 15.4926 12.2574 16.5 13.5 16.5Z" stroke='#BFC9D9' strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.44263 10.1326L11.5651 13.1176" stroke='#BFC9D9' strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5576 4.88257L6.44263 7.86757" stroke='#BFC9D9' strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

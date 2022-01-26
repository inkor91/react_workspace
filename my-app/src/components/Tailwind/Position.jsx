import React from 'react';

export default function Position() {
  return (
  <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-4 font-mono text-white text-sm font-bold leading-6">

<div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-stripes-purple">
  <div className="p-4 w-14 h-14 absolute left-0 top-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">01</div>
</div>


<div className="relative h-32 w-32 ...">
  <div className="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>


<div className="relative h-32 w-32 ...">
  <div className="absolute top-0 right-0 h-16 w-16 ...">03</div>
</div>


<div className="relative h-32 w-32 ...">
  <div className="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>


<div className="relative h-32 w-32 ...">
  <div className="absolute inset-0 ...">05</div>
</div>

<div className="relative h-32 w-32 ...">
  <div className="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>


<div className="relative h-32 w-32 ...">
  <div className="absolute bottom-0 left-0 h-16 w-16 ...">07</div>
</div>

<div className="relative h-32 w-32 ...">
  <div className="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>

<div className="relative h-32 w-32 ...">
  <div className="absolute bottom-0 right-0 h-16 w-16 ...">09</div>
</div>
  </div>
  );
}

import React from 'react';
import './Button.css'

export default function Button() {
  return (
  <div>
{/* <!-- Before extracting a custom class --> */}
<button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
  Save changes
</button>

{/* <!-- After extracting a custom class --> */}
<button class="btn-primary">
  Save changes
</button>
  </div>);
}

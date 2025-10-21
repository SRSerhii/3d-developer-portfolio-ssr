import React, { Suspense } from "react";
//import ComputersCanvas from "./canvas/Computers";

const ComputersCanvas = React.lazy(() => import('./canvas/Computers'));

const ComputersCanvasWrapper = React.memo(() => {
  return (
    <Suspense fallback={<div className="text-white">Loading model...</div>}>
      <ComputersCanvas />
    </Suspense>
  );
});

export default ComputersCanvasWrapper;
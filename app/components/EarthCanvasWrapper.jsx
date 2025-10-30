
import React, { Suspense } from "react";
import EarthCanvas from "./canvas/Earth";

//const EarthCanvas = React.lazy(() => import('./canvas/Earth'));

const EarthCanvasWrapper = React.memo(() => {
  return (
    <Suspense fallback={<div className="text-white">Loading model...</div>}>
      <EarthCanvas />
    </Suspense>
  );
});

export default EarthCanvasWrapper;

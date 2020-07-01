import "regenerator-runtime/runtime";
import React, { useCallback } from "react";
import PoseNet from "react-posenet";
import usePullUpCounter from "./Dif";

const inferenceConfig = {
  decodingMethod: "single-person",
};

const Homepage = () => {
  const [count, checkPoses] = usePullUpCounter();
  const onEstimate = useCallback((poses) => checkPoses(poses), [checkPoses]);

  console.log(PoseNet);
  return (
    <>
      <h1>{`count: ${count}`}</h1>
      <PoseNet
        className="min-vh-100"
        facingMode="environment"
        inferenceConfig={inferenceConfig}
        onEstimate={onEstimate}
      />
    </>
  );
};

export default Homepage;

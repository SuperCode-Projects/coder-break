import { useRef, useReducer, useCallback } from "react";

function getKeypointsObject(pose) {
  return pose.keypoints.reduce((acc, { part, position }) => {
    acc[part] = position;
    return acc;
  }, {});
}

function reducer(count, action) {
  if (action === "reset") {
    return 0;
  }
  return count + 1;
}

export default function (sensitivity = 10) {
  const [count, dispatch] = useReducer(reducer, 0);
  const standard = useRef(0);
  const checkPoses = useCallback(
    (poses) => {
      if (poses.length !== 1) {
        return;
      }

      const {
        nose,
        leftEye,
        rightEye,
        leftEar,
        rightEar,
        leftShoulder,
        rightShoulder,
        leftElbow,
        rightElbow,
        leftWrist,
        rightWrist,
        leftHip,
        rightHip,
        leftKnee,
        rightKnee,
        leftAnkle,
        rightAnkle,
      } = getKeypointsObject(poses[0]);
      /* console.log(poses); */
      /*  const hy = document.createElement("h1");
      document.body.appendChild(hy);
      hy.innerHTML = "hy";
      hy.style.position = "absolute";
      hy.style.objectPosition = `${nose.x} ${nose.y}`;
      console.log((hy.style.objectPosition = `${nose.x} ${nose.y}`)); */

      if (poses.length > 0) {
        const lShoulderY = leftShoulder.y;
        const rShoulderY = rightShoulder.y;

        /* const lEarY = leftEar.y;
      const rEarY = rightEar.y; */
        /* const lWristY = leftWrist.y;
        const rWristY = rightWrist.y; */

        if (lShoulderY > rShoulderY + 100) {
          dispatch(count + 1);
          console.log("Shoulder left");
        } else if (lShoulderY + 100 < rShoulderY) {
          console.log("Shoulder right");
        }

        if (count == 9) {
          dispatch("reset");
        }
        /* if (lEarY + sensitivity * 2 > rEarY + sensitivity) {
        return console.log("Ear left");
      } else {
        console.log("Ear right");
      } */
        /* if (lWristY + 100 < rWristY) {
          return console.log("left");
        } else if (lWristY > rWristY + 100) {
          console.log("right");
        } */
      }
    },
    [sensitivity]
  );

  return [count, checkPoses];
}

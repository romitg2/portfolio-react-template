import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import fragment from "./../shaders/fragment.glsl";
import vertex from "./../shaders/vertex.glsl";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import { useEffect } from "react";

function Experience() {
  const { camera, gl } = useThree();

  // merging camera dimensions
  
  useEffect(() => {
    camera.position.z = 600;
    const theta = (180 / Math.PI) * 2 * Math.atan(window.innerHeight / (2 * 600));
    camera.aspect = theta;
  });

  const cursor = {
    x: 0,
    y: 0,
  }

  window.addEventListener('mousemove', (e) => {
    cursor.x = e.x / window.innerWidth;
    cursor.y = 1 - (e.y / window.innerHeight);
  });

  const planeRef = useRef();
  gl.setPixelRatio(2);

  const waveElevation = useControls("elevation", {
    uBigWaveElevation: { value: 0.0, min: 0.0, max: 10.0, step: 0.1 },
    uSmallWaveElevation: { value: 0.0, min: 0.0, max: 10.0, step: 0.1 },
  });

  const waveFrequency = useControls("frequency", {
    uBigWaveFrequencyX: { value: 1.0, min: 0.0, max: 10.0, step: 0.1 },
    uBigWaveFrequencyY: { value: 1.0, min: 0.0, max: 10.0,  step: 0.1 },
    uSmallWaveFreqnencyY: { value: 1.0, min: 0.0, max: 10.0, step: 0.1 },
    uSmallWaveFrequencyX: { value: 1.0, min: 0.0, max: 10.0, step: 0.1 },
  });

  const colorControl = useControls("color", {
    waveColor: {value: '#ffffff'},
    surfaceColor: {value: '#ffffff'},
  })

  const uniforms = useMemo(
    () => ({
      uBigWaveElevation: {
        value: waveElevation.uBigWaveElevation,
      },
      uSmallWaveElevation: {
        value: waveElevation.uSmallWaveElevation,
      },
      uBigWaveFrequency: {
        value: new THREE.Vector2(
          waveFrequency.uBigWaveFrequencyX,
          waveFrequency.uBigWaveFrequencyY
        ),
      },
      uSmallWaveFrequency: {
        value: new THREE.Vector2(
          waveFrequency.uSmallWaveFrequencyX,
          waveFrequency.uSmallWaveFreqnencyY
        ),
      },
      waveColor: {
        value: new THREE.Color(colorControl.waveColor),
      },
      surfaceColor: {
        value: new THREE.Color(colorControl.surfaceColor),
      },
      uTime: {
        value: 16,
      },
      uCursor: {
        value: new THREE.Vector2(0.0, 0.0),
      }
    }),
    []
  );

  useFrame((state) => {
    // updating uniforms
    // updating wave Elevation

    planeRef.current.material.uniforms.uBigWaveElevation.value =
      waveElevation.uBigWaveElevation;
    planeRef.current.material.uniforms.uSmallWaveElevation.value =
      waveElevation.uSmallWaveElevation;

    // updating wave Frequency

    planeRef.current.material.uniforms.uSmallWaveFrequency.value = new THREE.Vector2(
      waveFrequency.uSmallWaveFrequencyX,
      waveFrequency.uSmallWaveFreqnencyY
    );
    planeRef.current.material.uniforms.uBigWaveFrequency.value = new THREE.Vector2(
      waveFrequency.uBigWaveFrequencyX,
      waveFrequency.uBigWaveFrequencyY
    );
    
    // updating color

    planeRef.current.material.uniforms.waveColor.value.set(colorControl.surfaceColor);

    // updating time

    planeRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;

    // updating mosue

    planeRef.current.material.uniforms.uCursor.value.set(cursor.x, cursor.y);

  });

  return (
    <>
      <mesh
        ref={planeRef}
        // rotation={[-Math.PI / 3, 0, -Math.PI / 12]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[window.innerWidth, window.innerHeight, 3200, 3200]} />
        <shaderMaterial
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
}

export default Experience;

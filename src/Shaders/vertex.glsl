varying vec2 vUv;
uniform float uBigWaveElevation;
uniform float uSmallWaveElevation;
uniform vec2 uBigWaveFrequency;
uniform vec2 uSmallWaveFrequency;
uniform float uTime;

varying float vTime;

void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = sin(modelPosition.x * uBigWaveFrequency.x + uTime) * uBigWaveElevation;
modelPosition.y += elevation;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vTime = uTime;
}

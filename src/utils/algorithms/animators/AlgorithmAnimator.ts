export default interface AlgorithmAnimator {
  draw(): void
  stop(): void
  animate(ms: number): void
}

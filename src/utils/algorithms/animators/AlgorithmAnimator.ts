import AlgorithmIterator from '../iterators/AlgorithmIterator'

export default interface AlgorithmAnimator {
  draw(): void
  stop(): void
  animate(ms: number): void
  changeAnimationDelay(ms: number): void
}

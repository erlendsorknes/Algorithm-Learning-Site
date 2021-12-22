const getNUnique = (n: number): number[] => {
  const sorted = new Array(n).fill(0).map((_, i) => i + 1)
  const unsorted: number[] = []

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * sorted.length)
    unsorted.push(sorted.splice(randomIndex, 1)[0])
  }
  return unsorted
}

export { getNUnique }

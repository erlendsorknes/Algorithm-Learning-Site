// @ts-ignore
class Rodcutting {
  values: number[];
  memory: number[] = [];
  length: number;

  constructor(length: number, values: number[] = [2, 5, 8, 4, 10, 12]) {
    this.values = values;
    this.length = length;

    for (let i = 0; i < length; i++) {
      this.memory[i] = -1;
    }
  }

  solve() {
    return this.internal_solve(this.length);
  }

  solve_brute() {
    return this.internal_solve(this.length);
  }

  internal_solve(len: number): number {
    if (len === 0) {
      return 0;
    } else if (this.memory[len - 1] !== -1) {
      return this.memory[len - 1];
    }

    let max = 0;

    for (let i = 0; i < len; i++) {
      let cost: number = this.values[i] + this.internal_solve(len - i - 1);

      if (cost > max) {
        max = cost;
      }
    }

    this.memory[len - 1] = max;

    if (len === this.length) {
      console.log(max);
    }

    return max;
  }

  internal_solve_brute(len: number) {
    if (len === 0) {
      return 0;
    }
    let max = 0;

    for (let i = 0; i < len; i++) {
      let cost: number = this.values[i] + this.internal_solve(len - i - 1);

      if (cost > max) {
        max = cost;
      }
    }

    if (len === this.length) {
      console.log(max);
    }

    return max;
  }
}

// 3, 5, 8, 4, 10, 12
let t = new Rodcutting(6);
t.solve();

// export default Rodcutting;

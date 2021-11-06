// @ts-ignore
class Rodcutting {
    values: number[]
    memory: number[]
    length: number

    constructor(length: number, values: number[] = [3, 5, 8, 4, 10, 12]) {
        this.values = values;
        this.memory = new Array(length).map(_ => 0);
        this.length = length;

        this.memory[0] = values[0]
    }

    solve() {
        return this.internal_solve(this.length);
    }

    internal_solve(len: number): number {
        if (len === 0) {
            return 0
        }

        let max = 0;

        for (let i = 0; i < len; i++) {
            let cost: number;
            let p1: number = this.memory[i] ? this.memory[i] :


            if (this.memory[len-i-1] !== 0) {
                cost = this.memory[len-i-1]
            } else {
                cost = this.values[i] + this.internal_solve(len-i-1)
                this.memory[len-i-1] = cost;
            }

            if (cost > max) {
                max = cost
            }
        }

        console.log(max)
        return max
    }
}

let t = new Rodcutting(4);
t.solve()

// export default Rodcutting;
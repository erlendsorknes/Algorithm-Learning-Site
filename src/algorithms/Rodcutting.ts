class Rodcutting {
    values: number[] = [3, 5, 8, 4, 10, 12]
    memory: number[]
    length: number;

    constructor(values: number[], length: number) {
        this.values = values;
        this.memory = new Array(length).map(_ => 0);
        this.length = length;

        this.memory[0] = values[0]
    }

    solve(len: number): number {
        if (len === 1) {
            return this.values[0]
        } else if (this.memory[len - 1] !== 0) {
            return this.memory[len - 1]

        }
        for (let i = 1; i < len-1; i++) {
            const cost = this.values[i-1] + this.solve(len-1);
        }

        return 0
    }
}

export default Rodcutting;
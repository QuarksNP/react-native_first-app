export function multiplicate(num: number) {
    let result = ""

    for(let i = 0; i <= 13; i++) {
        const product = num * i
        
        result += num + " x " + i + " = " + product + "\n";
    }

    return result
}
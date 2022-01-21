

export function isCoPrime(number1: number, number2: number): boolean {

    let potentialCommonDivisor = 2

    while (potentialCommonDivisor < getSmallerNumber(number1, number2)) {

        const relevantDivisorFound = number1 % potentialCommonDivisor === 0
        const relevantDivisorFound2 = number2 % potentialCommonDivisor === 0

        if (relevantDivisorFound && relevantDivisorFound2) {
            return false
        }

        potentialCommonDivisor++
    }

    return true
}


function getSmallerNumber(number1: number, number2: number) {
    return (number1 > number2) ? number1 : number2
}
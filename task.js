// / 1WAP to print the min no prime in the given number
// input: Enter a number: 67439
// output: 4

num = "67439"
nonPrimes = ""
for (i of num) {
    if (i > 1)
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                nonPrimes += i
                break
            }
        }
}
console.log(nonPrimes)
min = nonPrimes[0]
for (k = 1; k < nonPrimes.length; k++) {
    if (min > nonPrimes[k])
        min = nonPrimes[k]
}
console.log("minimum non-prime:"+min)

// 2
number = "6655"
primesum = 0
nonprimesum = 0
for (i of number) {
    if (i > 1) {
        isPrime = true
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            primesum += Number(i);
        } else {
            nonprimesum += Number(i);
        }
    }
}
console.log(primesum)
console.log(nonprimesum)
res = (primesum > nonprimesum) ? "primesum is more" : (primesum < nonprimesum) ? "nonprime sum is more" : "both are equal"
console.log(res)

// 3
originalnum="378"
digitsum=0
for(i of originalnum){
    digitsum+=Number(i)
}
result=(originalnum % digitsum==0)?"harshad number":"not a harshad number"
console.log(result)
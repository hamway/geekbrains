/* Task 1 */

n = parseInt(process.argv[2]);
e = parseInt(process.argv[3]);

summ = 0;
for (var i = 1; i<=n; i++) {
    summ += Math.pow(i, e);
}
console.log(summ);
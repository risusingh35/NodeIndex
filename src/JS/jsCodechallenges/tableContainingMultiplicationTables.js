// Print a table containing multiplication tables
const tableContainingMultiplicationTables = (num) => {
    let multiply=1
    for (let i = 1; i < 11; i++) {
        const result = num * i;
        console.log(`${num} x ${i} = ${result}`);
        multiply*=(num*i)
    }
    console.log({ multiply })
}
export { tableContainingMultiplicationTables }
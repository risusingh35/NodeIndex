for (var index = 0; index < 10; index++) {
    setTimeout(() =>
        console.log({var:index}), 1000
    )
}
for (let index = 0; index < 10; index++) {
    setTimeout(() =>
        console.log({let:index}), 1000
    )
}
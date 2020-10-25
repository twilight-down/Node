async function fn() {
    // throw 'someting wrong';
    return 123;
}
fn().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
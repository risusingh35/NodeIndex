export const Hello = () => {
    console.log('Hello')
    CodeRunner()
}
const CodeRunner = () => {

    // console.log(1);

    // (async () => {
    //     console.log(2);
    // })();
    
    // console.log(3);
    
  

    console.log(1);

    (async function() {
        console.log(2);
        var x=await 5
        console.log(4);
        
    })();
    
    console.log(3);
    























}
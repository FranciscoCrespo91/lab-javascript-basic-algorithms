// Iteration 1: Names and Input
let hacker1 ="Erik"
//console.log(`The driver name is ${hacker1}`)

let hacker2 ="Francisco"
//console.log(`The navigator name is ${hacker2}`)



 //Iteration 2: Conditionals
//if (hacker1.length > hacker2.length) {
 //   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
//}
//else if (hacker2.length > hacker1.length){
//    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
//}

//else {console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)}


// Iteration 3: Loops
let driver="";
//for (let i=0; i<hacker1.length;i++) {driver = driver+hacker1[i]+" ";}
   // console.log(driver.toUpperCase())

let navigator="";
//for (let f=hacker2.length-1; f>=0;f--) {navigator = navigator+hacker2[f];}
//console.log(navigator)


//if (hacker1.localeCompare(hacker2)===1) {console.log("Yo, the navigator goes first definitely.") }
//else if(hacker2.localeCompare(hacker1)===1){console.log("The driver's name goes first.")}
//else {"What?! You both have the same name?"}

//console.log("I'm ready!");

//Bonus time 1

let longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ex mauris. Maecenas posuere dapibus pretium. Donec interdum ligula metus, eu fringilla orci aliquet vel. Cras et diam porttitor, dictum nulla accumsan, laoreet arcu. Suspendisse potenti. Suspendisse nulla libero, commodo at arcu id, feugiat tristique tellus. Nunc vehicula rhoncus posuere. Aliquam erat volutpat. Integer facilisis auctor leo, sit amet faucibus quam ullamcorper eget. Nam sit amet dapibus est. Duis sodales molestie purus, eu consequat leo pulvinar quis. Vestibulum tortor velit, porta in dui eu, venenatis mollis turpis.

Cras pellentesque est ac nulla volutpat mollis. Maecenas varius ex a lobortis rhoncus. Mauris sagittis velit venenatis mi ornare placerat. Quisque non ex condimentum, eleifend odio a, pellentesque purus. Donec ultricies egestas diam varius pretium. Aliquam lacinia sapien a libero feugiat, id molestie sem gravida. Duis hendrerit sem sed quam tempor varius. Proin fringilla eget mauris vitae tincidunt. Duis congue neque justo, nec vulputate massa convallis quis. Praesent vulputate purus ut enim bibendum viverra. Vestibulum maximus nisl pretium nisi consectetur, id tempus odio convallis. Nulla facilisi. Nunc at pharetra tellus. Nam sit amet semper sem. Nulla sit amet lectus euismod, posuere sapien eget, laoreet odio. Aliquam erat volutpat.

Donec ante tortor, dapibus eget nunc ut, tristique pellentesque urna. Quisque nulla sapien, ultrices vel posuere aliquet, faucibus ut ante. Nunc venenatis tempus dui, commodo lacinia libero tempor sed. Cras rhoncus nisl sed tortor accumsan ultricies. Etiam iaculis, leo sed porta cursus, nunc mauris pulvinar ex, at tristique orci libero in nisl. Nunc dignissim gravida ante nec egestas. Nullam maximus auctor quam, id ultrices neque interdum id. Curabitur ut lacinia ex, nec finibus diam. Nulla neque libero, scelerisque in ipsum non, tempor condimentum mi. Donec hendrerit elit in metus molestie fringilla et sit amet neque. Quisque in rutrum odio, eu ultrices magna. Quisque faucibus est neque, in posuere libero consectetur vel.`
let wordEt =0;
for (i=0;i<longText.length;i++) {if(longText.includes(' et ')===true){wordEt++;}} // o string ` et ` tem que ter espaços porque senão contabiliza os et que estejam incluídos em palavras .
console.log(wordEt);



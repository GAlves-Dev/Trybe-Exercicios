   //RETORNAR A SOMA DE TODOS OS ELEMENTOS DE UM ARRAY
   //function sumArray(array) {
       //Write code here
      //let sum = 0;
       //for (let index = 0; index < array.length; index += 1) {
        //sum = sum + array[index];
       //}
       //return sum;
   //};

   //console.log(sumArray([10, 20, 30, 40, 50]));
   //console.log(sumArray([89, 3, 67, 128, 1]));


const sumArray = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index += 1) {
        sum = sum + array[index];
       }
    return sum;
    };

console.log(sumArray([10, 20, 30, 40, 50]));
console.log(sumArray([89, 3, 67, 128, 1]));

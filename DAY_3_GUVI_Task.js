/*
  Do the below programs in 
  anonymous function & IIFE
*/
  

/* 1.Print odd numbers in an array  

(function(a){
  for(let i=0;i<a.length;i++){
    if(a[i]%2!=0){
      console.log(a[i]);
    }
  }
})([23,6,1,12,4,33,97]);

*/
  
/* 2.Convert all the strings to title caps in a string array

(function(string){q
  for(let a=0;a<string.length;a++){
     string[a] = string[a].charAt(0).toUpperCase()
     + string[a].substr(1).toLowerCase();
  }
  console.log(string);
})(["Daily","dose","snake","kingmaker"]);

*/
  
 /* 3.Sum of all numbers in an array
 
 (function(arr){
   let sum = 0;
   for(let a of arr){
     sum += a;
   }
   console.log(sum);
 })([1,2,3,4,5,6,7,8,9,67,65]);
 
 */
 
 /* 4.Return all the prime numbers in an array
 
 (function(arr){
   for(let a of arr){
     let sum = 0;     
     for(let b=2;b<a;b++){
       if(a%b===0){
         ++sum;
         break;
       }
     }
     if(sum === 0 && a>1){
       console.log(a);
     }
   }
 })([1,2,3,4,5,6,7,8,9,65,67])
 
 */
   
 /* 5.Return all the palindromes in an array
 
 (function(arr){
   for(let a of arr){
     let flag = true;
     for(let i=0;i<a.length/2;i++){
       if(a.charAt(i)===
         a.charAt(a.length-1-i)){
         continue;
       }else{
         flag = false;
         break;
       }
     }
     if(flag){
       console.log(a);
     }
   }
 })(["dad","music","colar","peppep",
 "jackiejan","asdfghjkllkjhgfdsa",
 "wertyuuytrew"]);
 
 */
   
 /* 6.Return median of two sorted arrays of the same size.
 
 (function(arr,arr1){
   let v = (median(arr)+median(arr1))/2;
   console.log(parseInt(v));
   function median(amr){
     const len = amr.length;
     if(len%2===0){       
       return (amr[(len/2)-1]+amr[len/2])/2;
     }
     return amr[(len-1)/2];
   }
 })([1,3,21,34,53],[12,23,24,25,26]);
 
 */
   
 /* 7.Remove duplicates from an array
 
 (function(arr){
   let hobj = [];
   console.log(arr);
   for(let m=0;m<arr.length;m++){
     if(hobj.indexOf(arr[m])>-1){
       arr.splice(m,1);
       --m;
       continue;
     }
     hobj.push(arr[m]);
   }
   console.log(hobj)
 })([12,23,24,12,26,23,34,34,1,23])
 
 */
   
 /* 8.Rotate an array by k times
 
 (function(arr,k){
   let newArr = [];
   const rot = k%arr.length;
   for(let i=arr.length-rot;i<arr.length;i++){
     newArr.push(arr[i]);
   }
   for(let j=0;j<arr.length-rot;j++){
     newArr.push(arr[j]);
   }
   console.log(newArr);
 })([23,1215,9,81,23,55],1);
 
 */

/*
Do the below programs in arrow functions
*/

/* 1.Print odd numbers in an array

let oddNums = (arr) => {
  for(let a of arr){
    if(a%2!=0){
      console.log(a);
    }
  }
}

oddNums([23,1,4,64,24,35,99]);

*/

// 2.Convert all the strings to title caps in a string array

let titleCaps = (arr) => {
  
}
 
   
 
// const form=document.querySelector('form');

// form.addEventListener('click',(event)=>{
//     console.log(event.target.value);
// })

// after writing in input filed if i click outside of input box then it trigerrd
// form.addEventListener('change',(event)=>{
//         console.log(event.target.value);
// })

// focus does not triggerd or bubble 
// form.addEventListener('focus',(event)=>{
//     console.log(event.target.value);
// })

// focusin bubble  if we press any inputbox or focus in any input then it triggerd taht input value 
// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value);
// })

// if we foucus out any event means out any input it triggerd of that input value 
// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('dblclick',(event)=>{
//     console.log("Hello");
// })

//submit 
// form.addEventListener('submit',(event)=>{
//    console.log("Submitted");
// })



/******************************************************************************************************* */

const form=document.querySelector('form');

form.addEventListener('submit',(event)=>{
   //do not refresh page 
   event.preventDefault();

    // const fName= document.getElementById('first');
    // console.log(fName.value);
   
    // const lName=document.getElementById('second');
    // console.log(lName.value);

    // const age=document.getElementById('third');
    // console.log(age.value);

    // const result=document.getElementById('result');
    // result.innerText = `${fName.value} is a Good Boy`
    
    // document.body.append(result);
   
    // all form data store here after submission
    const data=new FormData(form);
    console.log(Array.from(data.keys()));
    console.log(Array.from(data.values()));

    
})
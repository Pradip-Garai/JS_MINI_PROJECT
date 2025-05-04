//all quotes in arrayy in js
const inspirationalQuotes = [
    "\"Believe you can, and you're halfway there.\"",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"",
    "\"Do what you can, with what you have, where you are.\"",
    "\"The harder you work for something, the greater you’ll feel when you achieve it.\"",
    "\"Don’t watch the clock; do what it does. Keep going.\"",
    "\"Dream big and dare to fail.\"",
    "\"It always seems impossible until it’s done.\"",
    "\"Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.\"",
    "\"You don’t have to be great to start, but you have to start to be great.\"",
    "\"Your limitation—it’s only your imagination.\"",
    "\"Push yourself, because no one else is going to do it for you.\"",
    "\"Dream it. Wish it. Do it.\"",
    "\"Great things never come from comfort zones.\"",
    "\"Success doesn’t just find you. You have to go out and get it.\"",
    "\"The key to success is to focus on goals, not obstacles.\"",
    "\"Sometimes later becomes never. Do it now.\"",
    "\"The best way to predict the future is to create it.\"",
    "\"Little by little, day by day, what is meant for you will find its way.\"",
    "\"Opportunities don’t happen. You create them.\"",
    "\"Don’t stop when you’re tired. Stop when you’re done.\""
];

// Array of color names
const colors = [
    "Red", 
    "Blue", 
    "Green", 
    "Yellow", 
    "Orange", 
    "Purple", 
    "Pink", 
    "Brown", 
    "Black", 
    "Aqua", 
    "Gray", 
    "Cyan", 
    "Magenta", 
    "Lime", 
    "Olive", 
    "Maroon", 
    "Navy", 
    "Teal", 
    "Silver", 
    "Gold"
  ];
  

// function generateQuote(){
// const text=document.getElementById('quote_Item');
// const index = Math.floor(Math.random()*inspirationalQuotes.length);
// text.textContent=inspirationalQuotes[index];
// document.body.style.backgroundColor = colors[index];
// }
// setInterval(generateQuote,5000);

/****************************  MOUSE EVENTS  **************************************************************************** */
const button=document.querySelector('button');

button.addEventListener('click',(event)=>{ // it wants a call back function
const text=document.getElementById('quote_Item');
const index = Math.floor(Math.random()*inspirationalQuotes.length);
text.textContent=inspirationalQuotes[index];
document.body.style.backgroundColor = colors[index];
console.log(event.target); // it shows the target event like here if we press button then it will work means here button is traget
console.log(event.type);// it tell types of event like here event is -'click' . it may be dblclick,mouseover
console.log(event.clientX);// it tell mouse click horizontal(from left) position or x quadrinate
console.log(event.clientY);//it tell mouse click vartical(from top) position or y quadrinate
})

// //body background color changer 
// const body=document.querySelector('body');
// body.addEventListener('dblclick',()=>{ // double click
//   const index = Math.floor(Math.random()*inspirationalQuotes.length);
//   body.style.backgroundColor = colors[index];
// })

// body.addEventListener('mousemove',()=>{ // mousemove  it says when mouse will move little bit also then it takes action 
//   const index = Math.floor(Math.random()*inspirationalQuotes.length);
//   body.style.backgroundColor = colors[index];
// })

// body.addEventListener('mouseover',()=>{ // mouseover it says when mouse will go over the content then it takes actions 
//   const index = Math.floor(Math.random()*inspirationalQuotes.length);
//   body.style.backgroundColor = colors[index];
// })


//********************************************  KEYBORDS EVENTS **************************************************************** */
// document.addEventListener('keydown',()=>{  // if we pess any button on keybord then it will takes actions 
// const text=document.getElementById('quote_Item');
// const index = Math.floor(Math.random()*inspirationalQuotes.length);
// text.textContent=inspirationalQuotes[index];
// document.body.style.backgroundColor = colors[index];
// })

// document.addEventListener('keyup',()=>{  // if we pess any button on keybord and when we release the key then it will takes actions 
//   const text=document.getElementById('quote_Item');
//   const index = Math.floor(Math.random()*inspirationalQuotes.length);
//   text.textContent=inspirationalQuotes[index];
//   document.body.style.backgroundColor = colors[index];
// })


// document.addEventListener('keydown',(event)=>{  // if we pess any  specific button on keybord then it will takes actions otherwise not
//   if(event.key==="Enter"){
//   const text=document.getElementById('quote_Item');
//   const index = Math.floor(Math.random()*inspirationalQuotes.length);
//   text.textContent=inspirationalQuotes[index];
//   document.body.style.backgroundColor = colors[index];
//   }
//   })


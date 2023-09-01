function check()
{
const thermo=document.querySelector("#thermo");//html page se id liya
const search=document.querySelector("#search");//html page se id liya
const result=document.querySelector("#result");//html page se id liya
const temp=document.querySelector("#temptype");//html page se id liya

var deg=parseInt(search.value);//integer value ke liye
if(temp.value=="farenheit")
{
var f=((9/5)*deg)+32;


console.log(f)
result.innerHTML=`<h1>${f} &degF</h1>`


}
if(temp.value=="kelvin")
{
var k=273.15+deg;
console.log(k)
result.innerHTML=`<h1>${k} &degK</h1>`

}

if(temp.value=="celcius")
{
var deg=deg;
console.log(deg)
result.innerHTML=`<h1>${deg} &degC</h1>`

}
// kelvin.style.color="black";
// faren.style.color="black";
// thermo.style.color="red";


}
const btn=document.querySelector("#btn"); //button click krne pe mujhe result dikhana hai
btn.addEventListener("click",check);

search.addEventListener("keyup",function(event){
    if(event.key=="Enter")
    {
check();
search.value="";
    }
});

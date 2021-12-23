let salery=prompt("Enter user his salery:");
let people=prompt("Enter number people actoaly at home:");
let sumWater=parseInt(54*people);
let sumElectricity=parseInt(77*people);
let arnona=350;
if(salery<5000 && people>2)
{arnona=260}
let rent=2950;
if(people>3)
{
let add=parseInt((people-5)*203);    
salery=parseInt(add)+parseInt(salery);
}
if(people>5)
{
    let add=parseInt((people-3)*180);    
    salery=parseInt(add)+ parseInt(salery);
}
let sumSalery=parseInt(salery-sumWater-sumElectricity-arnona);
alert(`After all, you have \$${sumSalery} at the end of the year`)


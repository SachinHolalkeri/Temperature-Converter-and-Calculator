const celIn = document.querySelector('#cel>input');
const fahIn = document.querySelector('#fah>input');
const kelIn = document.querySelector('#kel>input');
function roundItOffTo2(num)
{
    return Math.round(num*100)/100;
}
function celToFahAndKel()
{
    const c=parseFloat(celIn.value);
    const f=c*(9/5)+32;
    const k=c+273.15;
    fahIn.value=roundItOffTo2(f);
    kelIn.value=roundItOffTo2(k);
}
function fahToCelAndKel()
{
    const f=parseFloat(fahIn.value);
    const c=(f-32)*5/9;
    const k=c+273.15;
    celIn.value=roundItOffTo2(c);
    kelIn.value=roundItOffTo2(k);
}
function kelToFahAndCel()
{
    const k=parseFloat(kelIn.value);
    const c=k-273.15;
    const f=c*(9/5)+32;
    fahIn.value=roundItOffTo2(f);
    celIn.value=roundItOffTo2(c);
}
celIn.addEventListener('input',celToFahAndKel);
fahIn.addEventListener('input',fahToCelAndKel);
kelIn.addEventListener('input',kelToFahAndCel);
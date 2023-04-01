try{
    num = prompt("Enter a number Add = Use '2")
    if(num==='')
        throw 'Cannot be empty'
        if(isNaN(num))
            throw "Enter a valid Number";
            console.log("Add "+num+2)
}
catch(error){
    console.log(error)
}
console.log("-------------------------------------------------------------------");

try{
    num = prompt("Enter a number Sub = Use '2")
    if(num==='')
        throw 'Cannot be empty'
        if(isNaN(num))
            throw "Enter a valid Number"
            console.log("Sub "+(num-2))
}
catch(error){
    console.log(error)
}
console.log("-------------------------------------------------------------------");

try{
    num = prompt("Enter a number Mul = Use '2")
    if(num==='')
        throw 'Cannot be empty'
        if(isNaN(num))
            throw "Enter a valid Number"
            console.log("Mul "+num*2)
}
catch(error){
    console.log(error)
}
console.log("-------------------------------------------------------------------");


try{
    num = prompt("Enter a number Div = Use '2")
    if(num==='')
        throw 'Cannot be empty'
        if(isNaN(num))
            throw "Enter a valid Number"
            console.log("Div "+num/2)
}
catch(error){
    console.log(error)
}
console.log("-------------------------------------------------------------------");

try{
    num = prompt("Enter a number Mod = Use '2")
    if(num==='')
        throw 'Cannot be empty'
        if(isNaN(num))
            throw "Enter a valid Number"
            console.log("Mod "+num%2)
}
catch(error){
    console.log(error)
}
console.log("-------------------------------------------------------------------");

try{
    num = prompt("Enter a number = Use all Arithmetic Operator = '2'")
    if(num==='')
        throw 'Cannot be empty'
        if(isNaN(num))
            throw "Enter a valid Number";
            console.log("Add "+num+2)
            console.log("Sub "+(num-2))
            console.log("Mul "+num*2)
            console.log("Div "+num/2)
            console.log("Mod "+num%2)
}
catch(error){
    console.log(error)
}
finally{
    console.log('Thank you for try')
}
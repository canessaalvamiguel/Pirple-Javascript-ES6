let isMortal = function(name){
    if(name == "man"){
        return true;
    }else if(typeof name == "undefined"){
        return false;
    }else{
        return false;
    }
}

const socrates = "man";
console.log( isMortal(socrates) );//will print TRUE
console.log( isMortal("ash") );//will print FALSE
console.log( isMortal(89));//will print FALSE

/*---------------------------------------*/

let getFlavor = function(flavors, isChocolate){
    if(isChocolate){
        return flavors[1];
    }else{
        return flavors[0];
    }
}

flavors = ["vanilla", "chocolate"];

isChocolate = true;
console.log( getFlavor(flavors, true) );

isChocolate = false;
console.log( getFlavor(flavors, false) );
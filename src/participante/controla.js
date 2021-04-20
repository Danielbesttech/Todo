
    let vegetal = '';

    export function setBatata(legume){
    console.log("SetBat "+legume);
         vegetal = legume;
        console.log("SetVeg "+vegetal);

    }
    
    
   export function getBatata(){
        console.log("get "+vegetal);
        return vegetal;
    }
    
    function setCenoura(legume){
        console.log("SetC "+legume);
        vegetal = legume;
    }
    
    function getCenoura(){
        console.log("get "+vegetal);
        return vegetal;
    }







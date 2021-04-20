import React, { useState } from 'react';
import './DivP.css';
import './DviScript';
import { getBatata } from './controla';
import  setBatata  from'./controla';


function DivP() {
    const [num, setNum] = useState('');

function passa(palavra){
    setNum(palavra)
}
let vegetal ='';
function setCenoura(legume){
    console.log("SetC "+legume);
    vegetal = legume;
}

function getCenoura(){
    console.log("get "+vegetal);
    return vegetal;
}

    

    function botao(){
        let i = num;
    console.log("botao "+num);

        if(i == 'batata' ){
            alert("Foi");
        }
    }
    return (
        <div className='panelP'>
            <container className="todoP">
            <input type="button" className="btn_teste" id="btn1_teste" value="Exibe" onClick={()=>botao()} />
            <input type="button" className="btn_teste"  value="Botão2" onClick={()=>passa('batata')} />
            <input type="button" className="btn_teste"  value="Get" onClick={()=>setNum(getBatata)} />
            <input type="button" className="btn_teste"  value="Set" onClick={()=>setCenoura('batata')} />
               
               <h1 className="txt_teste">Teste</h1>
            </container>
            
        </div>
    )
}

export default  DivP

import React, { useState } from 'react';
import './DivP.css';
import  Seta, {setBatata} from './controla';


function Outra() {
    return (
        <div>
            <container className="todoP2">
            <input type="button" className="btn_teste"  value="B3" onClick={()=>setBatata('batata')} />
            
            </container>
        </div>
    )
}

export default Outra

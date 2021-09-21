import React from 'react';


export default function Header()
{   
    return ( 
    <div className="header">
         <div className="logo">HELSINGIN SANOMAT</div>
        <div className="header-container">
           <a>Etusivu</a>
           <a>Uuutiset</a>
            <a>Lehdet</a>
            <a>Asiaskaspalvelu</a>
        </div>
        <div>
            <button className="header-Tilaa-btn">Tilaa</button>
            <button className="header-btns">Kirjaudu</button>
            <button className="header-btns">Valikko</button>
        </div> 
    </div>
    )
}
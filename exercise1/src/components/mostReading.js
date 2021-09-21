import React from 'react';

const ArticlesItem = (props) => {
    return <li className="article">
        <div className="num"> {props.id} </div>
        <div className="title"> <strong>{ props.value } |</strong> { props.text } </div>
    </li>
}
 
const Articles = props => {
   return <ul>
        {props.headers.map(header => <ArticlesItem {...header} key={header.id}/>)}
    </ul> 
}

export default function MostReading()

{
const headers = [
    {id: 1, value: 'Rikosepäilyt', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.'},
    {id: 2, value: 'HS Vantaa', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.'},
    {id: 3, value: 'Päivittyvä sueranta', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.'},
    {id: 4, value: 'Nyt.fi', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.'},
    {id: 5, value: 'Rikosepäilyt', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.'},
    {id: 6, value: 'Helsinki', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.'}    
];


 {
    return <div className="MRContainer"> 
        <h1>Luetuimmat</h1>
        <hr style={{height: '2px', border: 'none', background: 'black'}}></hr>
        <Articles  headers={headers} />
    </div>
}
}


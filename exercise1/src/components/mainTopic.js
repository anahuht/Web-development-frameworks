import React from 'react';


const MainTopicContainer = (props) => {
    return (
    <div>
        <h1> {props.heading} </h1>
        <div> <img src={`/images/${props.image}`} alt="" className="mainImg"/> </div>
        <p> {props.heading} | {props.text} </p>
        <p> {props.part} </p>
        <hr></hr>
    </div>
    )
}
 
const Articles = props => {
   return <div className="main-topic-container">
        {props.articles.map(article => <MainTopicContainer {...article} key={article.id}/>)}
    </div> 
}

export default function MainTopic()

{
const articles = [
    {id: 1, heading: 'Rajoitukset', image: '/rajoitukset.jpeg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.', part: 'Kultuuri'},
    {id: 2, heading: 'Koronavirus', image: '/korona.jpeg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.', part: 'Kaupunki'},
    {id: 3, heading: 'Jääkiekko', image: '/hockey.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.', part: 'Urheilu'}
];


 {
    return <div> 
        <Articles  articles={articles} />
    </div>
 }}

import React from 'react';


const MainTopicContainer = (props) => {
    return (
    <div>
        <h1> {props.heading} </h1>
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
    {id: 1, heading: 'Rajoitukset', imageUrl: 'https://hs.mediadelivery.fi/img/658/c4ae5bc9473fef23a261072b496aa914.jpg.webp', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.', part: 'Kultuuri'},
    {id: 2, heading: 'Koronavirus', imageUrl: 'https://hs.mediadelivery.fi/img/658/c4ae5bc9473fef23a261072b496aa914.jpg.webp', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.', part: 'Kaupunki'},
    {id: 3, heading: 'Jääkiekko', imageUrl: 'https://hs.mediadelivery.fi/img/658/c4ae5bc9473fef23a261072b496aa914.jpg.webp', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ex odio, eget malesuada mi sagittis ut.', part: 'Urheilu'}
];


 {
    return <div> 
        <Articles  articles={articles} />
    </div>
 }}

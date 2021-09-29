import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
    return (
      <div className={styles.searchResultContainer}>
          <div >
            <div ><img src={`/images/${props.image}`} className={styles.image}></img></div>
            <div className={styles.searchResultName}>{props.name}</div>
            <div>{props.rating}</div>
            <div>{props.price}</div>
            <div>{props.date}</div>
            <div>{props.shipping}</div>
            <div>{props.buing_options}</div>
            <div>{props.buying_choices}</div>
            <div>{props.certification}</div>
          </div>
      </div>
    )
  }
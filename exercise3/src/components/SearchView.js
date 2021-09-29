import React from 'react';
import SearchResult from './SearchResult';
import styles from './SearchView.module.css';

export default function SearchView(props) {

    return (
      <div>
        <div className={styles.view}>
        {
          props.items.map(item => <SearchResult key={item.id} {...item} />)
        }
        </div>
      </div>
    )
  }
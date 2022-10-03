import React from 'react';

export default function ListItem(props) {
    return (
      <li>
        <a target="_blank" href={props.url} rel="noopener noreferrer">
          <img src={props.imageUrl} alt={props.alt} />
        </a>
      </li>
    );
  }
  
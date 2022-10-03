import React from 'react';
export default function Section(props) {
    console.log(props);
    return (
      <section className={props.className}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
                <ul className={props.className}>{props.children}</ul>
        </div>
      </section>
    );
  }
  
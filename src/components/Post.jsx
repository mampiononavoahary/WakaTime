import React from 'react'
import App from '../App';

export default function Post({ data , liker , suppression }) {
  return (
    <div className={data.liker ? "post active":"post"}>
        <div>
            <h3>{data.titre}</h3>
            <p>{data.description}</p>
        </div>
        <div className='btn'>
            <button onClick={() =>liker(data)}>{data.liker ? <img className='likeicon' src="./like.png" alt="" /> : "liker"}</button>
            <button className='delete' onClick={() => suppression(data.id)}>Effacer</button>
        </div>
    </div>
  );
}

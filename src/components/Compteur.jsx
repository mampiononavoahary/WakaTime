import React,{useEffect, useState} from 'react'

export default function (props) {
   const [compteur,setCompteur] = useState(5);
   const handleClick = () =>{
      setCompteur(compteur+1);
   }
   const handleMoins = () =>{
    setCompteur(compteur-1);
   }
  return (
    <>
     {
      props.age? <p>vous avez {props.age}</p> :null
     }
      <div className="compteur">
        <button onClick={handleClick}>+</button>
        <p
          className={
            (compteur < 0 && "erreur") || (compteur == 10 && "blanche")
          }
        >
          {compteur}
        </p>
        <button onClick={handleMoins}>-</button>
      </div>
    </>
  );
}

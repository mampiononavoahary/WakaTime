import React, { useState } from 'react'
import Compteur from './components/Compteur';
import './App.css'
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
    const [posts,setPosts] = useState([
      {
        id:1,
        titre:"zo the king",
        description:"zandry zanaka avy any amin'ny tanana boka alitsainikey",
        liker:false,
      },
      {
        id:2,
        titre:"Miaro le prince",
        description:"zandry zanaka avy any amin'ny tanana boka alitsainikey",
        liker:false,
      },
      {
         id:3,
        titre:"Nous les Maromainty",
        description:"zandry zanaka avy any amin'ny tanana boka alitsainikey ",
        liker:false,
      },
      {
         id:4,
        titre:"le zo",
        description:"zandry zanaka avy any amin'ny tanana boka alitsainikey",
        liker:false,
      },
      {
        id:5,
        titre:"sera le meilluere",
        description:"zandry zanaka avy any amin'ny tanana boka alitsainikey",
        liker:false,
      },
    ]);

    const liker = (data) =>{
      const donnerCopier = [...posts];
      const index = posts.indexOf(data);
      donnerCopier[index] = {...posts[index],liker : !posts[index].liker};
      setPosts(donnerCopier);
      console.log(donnerCopier);
    };
    const effacerPosts = (id) => {
      const newData = posts.filter(p => p.id != id);
      setPosts(newData);
    };

    const nombreliker = posts.filter(p => p.liker);
  return (
    <div className="App">
        <Navbar nombreliker={nombreliker.length}/>
        {
          posts.map((p)=>(<Post data={p} key={p.id} liker={liker} suppression={effacerPosts}/>))
        }
    </div>
  );
}

export default App;
import React from 'react'
import Maincard2 from './Maincard2'
import Post from './Post'
import "./Topcard.css";
import {Posts} from "../../Components/Dummydata/Dummydata";

export default function Topcard() {
  return (
    <div className="Topcard">
        <Maincard2/>
        {Posts.map((p) => (
           <Post key={p.id} post={p}/>

        ))}
       
    </div>
  )
}

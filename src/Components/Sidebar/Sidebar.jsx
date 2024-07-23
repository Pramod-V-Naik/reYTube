import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import explore from '../../assets/explore.png'
import subscriprion from '../../assets/subscriprion.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/simon.jpg'
import simon from '../../assets/mr.jpg'
import tom from '../../assets/unnamed.jpg'
import megan from '../../assets/ap.jpg'
import cameron from '../../assets/tom.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
            <div onClick={()=>{setCategory(0)}} className={`side-link ${category===0?"active":""}`}><img src={home} alt="" /><p>Home</p></div>
            <div onClick={()=>{setCategory(20)}} className={`side-link ${category===20?"active":""}`}><img src={game_icon} alt="" /><p>Gaming</p></div>
            <div onClick={()=>{setCategory(2)}} className={`side-link ${category===2?"active":""}`}><img src={automobiles} alt="" /><p>Automobiles</p></div>
            <div onClick={()=>{setCategory(17)}} className={`side-link ${category===17?"active":""}`}><img src={sports} alt="" /><p>Sports</p></div>
            <div onClick={()=>{setCategory(24)}} className={`side-link ${category===24?"active":""}`}><img src={entertainment} alt="" /><p>Entertainment</p></div>
            <div onClick={()=>{setCategory(28)}} className={`side-link ${category===28?"active":""}`}><img src={tech} alt="" /><p>Technology</p></div>
            <div onClick={()=>{setCategory(10)}} className={`side-link ${category===10?"active":""}`}><img src={music} alt="" /><p>Music</p></div>
            <div onClick={()=>{setCategory(22)}} className={`side-link ${category===22?"active":""}`}><img src={blogs} alt="" /><p>Blogs</p></div>
            <div onClick={()=>{setCategory(25)}} className={`side-link ${category===25?"active":""}`}><img src={news} alt="" /><p>News</p></div>
            <hr/>
        </div>
        <div className="subscribed-list">
            <h3>SUBSCRIBED</h3>
            <div className={`side-link`}><img src={jack} alt="" /><p>Dr Bro</p></div>
            <div className={`side-link`}><img src={simon} alt="" /><p>MrBeast</p></div>
            <div className={`side-link`}><img src={tom} alt="" /><p>Triggered Insaan</p></div>
            <div className={`side-link`}><img src={megan} alt="" /><p>Apna College</p></div>
            <div className={`side-link`}><img src={cameron} alt="" /><p><Ri:viewport></Ri:viewport>ajuvlogs</p></div>
        </div>
    </div>
  )
}

export default Sidebar

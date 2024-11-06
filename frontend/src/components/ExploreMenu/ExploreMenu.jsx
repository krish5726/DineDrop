import React from 'react'
import './ExploreMenu.css'
import {menu_list} from "../../assets/assets"
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae laborum, illum, labore consectetur quod mollitia molestias eveniet aliquid dolorem reprehenderit eligendi accusamus obcaecati consequuntur quae suscipit unde veritatis quaerat.</p>
    <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key = {index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src = {item.menu_image} alt=""></img>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr />
    </div>
  )
}

export default ExploreMenu

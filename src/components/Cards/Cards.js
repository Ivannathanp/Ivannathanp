import React from 'react'
import './Cards.css'
import CardItems from './CardItems'
import Unix from "../images/Unix.png"
import Shop from "../images/Shopscut.png"
import Tomb from "../images/Tombraider.jpg"
import Dompet from "../images/Dompetku.png"
import Codename from "../images/Codenamecerberus.png"
import Indonesia from "../images/Exploreindonesia.png"

function Cards() {
    return (
        <div className="cards">
            <div className="cards_container">

                    <ul className="cards_items">
                        <CardItems src={Unix}
                            text='Unix File System Design'
                            label='File System' 
                            path='/Unix' />
                        <CardItems src={Shop}
                            text='ShopCUT E-Commerce Application'
                            label='E-commerce' 
                            path='/ShopCUT' />
                        <CardItems src={Tomb}
                            text='The Raider of the Tomb'
                            label='Game' 
                            path='/TombRaider' />
            
               
                        <CardItems src={Dompet}
                            text='Dompetku: The Budgeting App'
                            label='Android App' 
                            path='/Dompetku' />
                        <CardItems src={Codename} 
                            text='Codename Cerberus'
                            label='Game' 
                            path='/Cerberus' />
                        <CardItems src={Indonesia}
                            text='Explore Indonesia'
                            label='Website' 
                            path='/ExploreIndonesia' />
                         </ul>
              
            </div>
        </div>
    )
}

export default Cards

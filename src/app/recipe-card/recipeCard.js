'use client'
import styles from './recipeCard.module.scss'
import { useEffect, useState } from 'react';
const RecipeCard = () => {
    const [recipeName, setRecipeName] = useState('French Silk Pie');
    const [imageSource, setImageSource] = useState('');
    const [category, setCategory] = useState('Dessert');
    const [cardContent, setCardContent] = useState('Fluffy chocolate pie with whipped cream topping');
    const [isActive, setIsActive] = useState({ingredients: true, method:false, notes:false})

   const handleClick = (e) => {
    let headers = Object.keys(isActive)
    let newActive = {};
    headers.forEach((header) => {
        if(header === e.target.id) {
            newActive[header] = true; 
        } else {
            newActive[header] = false;
        }
    })
    setIsActive(newActive)

    
        
   }

   const checkActiveHeader = (type) => {
    if(isActive[type]) {
        return `${styles.activeHeader}`
    } else {
        return ``
    }
   }
  

    return(
        <div className={styles.pageContainer}>
            <div className={styles.cardContainer}>
               
                <div className={styles.recipeCard}>
                    <img src='https://preppykitchen.com/wp-content/uploads/2021/10/French-Silk-Pie-Recipe-1.jpg'/>
                    <div className={styles.recipeSummary}> 

                    <h1 className={styles.recipeHeader}>{recipeName}</h1>
                    Some stuff here
                    </div>
                </div>       
                <div className={styles.recipeInfo}>
                    <div className={styles.infoNav}>
                        <h1 onClick={handleClick} id='ingredients' className={checkActiveHeader('ingredients')}>Ingredients</h1>
                        <h1 onClick={handleClick} id='method' className={checkActiveHeader('method')}>Method</h1>
                        <h1  onClick={handleClick} id='notes' className={checkActiveHeader('notes')}>Notes</h1>
                    </div>
                    
                    {cardContent}
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;
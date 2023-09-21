'use client'
import styles from './recipeCard.module.scss'
import { useState } from 'react';
const RecipeCard = () => {
    const [recipeName, setRecipeName] = useState('French Silk Pie');
    const [imageSource, setImageSource] = useState('');
    const [category, setCategory] = useState('Dessert');
    const [cardContent, setCardContent] = useState('Fluffy chocolate pie with whipcream topping');
   
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
                    {cardContent}
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;
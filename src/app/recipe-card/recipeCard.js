'use client'
import styles from './recipeCard.module.scss'
import { useEffect, useState } from 'react';
import recipes from '../recipeData';
const RecipeCard = () => {
    const [recipeName, setRecipeName] = useState('French Silk Pie');
    const [imageSource, setImageSource] = useState('');
    const [category, setCategory] = useState('Dessert');
   
    const [isActive, setIsActive] = useState({ingredients: true, method:false, notes:false})
    let recipeData = {ingredients: [], method:'the process', notes:'like this pie'} 
    const [cardContent, setCardContent] = useState(recipeData['ingredients']);

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
        handleContentChange(e.target.id)
        
   }

   const handleContentChange = (type) => {
    setCardContent(recipeData[type])
   }

   const checkActiveHeader = (type) => {
    if(isActive[type]) {
        return `${styles.activeHeader}`
    } else {
        return ``
    }
   }

   useEffect(() => {
    formatIngredients()

    setCardContent(recipeData.ingredients)

   })

   const formatIngredients = () => {
    let ingredientList = [];
    let ingredientString =``;
        recipes[1].ingredients.forEach((type) => {
            type.ingredients.forEach((ingredient) => {
                ingredientString = ``
                Object.keys(ingredient).forEach((item) => {
                    if(typeof ingredient[item] === 'string') {
                    ingredientString = `${ingredientString} ${ingredient[item]}`
                    }
                })
                ingredientList.push(ingredientString)
            })
        })
       recipeData.ingredients = ingredientList;
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
                    <div className={styles.cardContent}>
                    <ul>
                     {cardContent.map((ingredient) => {
                        return <li key={ingredient}>{ingredient}</li>
                     })}
                     </ul>
                        <button onClick={handleClick} id='notes'>Add A Note</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;
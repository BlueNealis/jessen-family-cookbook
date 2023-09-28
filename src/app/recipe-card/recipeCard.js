'use client'
import styles from './recipeCard.module.scss'
import { useEffect, useState } from 'react';
import recipes from '../recipeData';
const RecipeCard = () => {
    const [recipeName, setRecipeName] = useState('French Silk Pie');
    const [imageSource, setImageSource] = useState('');
    const [category, setCategory] = useState('Dessert');
   
    const [isActive, setIsActive] = useState({ingredients: true, method:false, notes:false})
    const [recipeData, setRecipeData] = useState({ingredients: [], method:[], notes:'like this pie'}) 
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
   formatIngredients()
   formatRecipeMethod()
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
    setCardContent(recipeData['ingredients'])

    },[])


   //Dealing with some weird rendering issues after I format the recipe data need to figure out if im setting state incorrectly 

   const formatRecipeMethod = () => {
    let allDirections = []
    let directionsObject = {}
    let directionsList = []
    recipes[0].method.forEach((type) => {
        directionsObject = {};
        directionsList = [];
        
        if(type.type !== `` ) {
            allDirections.push(<h3>{type.type}</h3>)
            type.steps.forEach((step) => {
                allDirections.push(<li>{step}</li>)
                })
            }
        })
       setRecipeData({...recipeData, method: allDirections})
   }

   const formatIngredients = () => {

    let ingredientString =``;
    let allIngredients = []

    recipes[0].ingredients.forEach((type) => {
        if(type.type !== `` ) {
            allIngredients.push(<h3>{type.type}</h3>)
            type.ingredients.forEach((ingredient) => {
                ingredientString = ``
                Object.keys(ingredient).forEach((item) => {
                    if(typeof ingredient[item] === 'string') {
                        ingredientString = `${ingredientString} ${ingredient[item]}`
                    }
                })
                allIngredients.push(<li>{ingredientString}</li>)
            })
        }
    })
       setRecipeData({...recipeData, ingredients: allIngredients})
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
                   
                            {isActive['ingredients']? <ul>{cardContent}</ul> : <ol>{cardContent}</ol>}
               
                        <button onClick={handleClick} id='notes'>Add A Note</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;
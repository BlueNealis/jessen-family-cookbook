'use client'
import styles from './recipeThumbnail.module.scss'
import { useState, useEffect } from "react"
const RecipeThumbnail = ({data, key}) => {

    const [recipeName, setRecipeName] = useState('French Silk Pie');
    const [imageSource, setImageSource] = useState('');
    const [category, setCategory] = useState('Dessert')

    useEffect(() => {
        // if(Object.keys(data).length > 0) {

        // }
    },[])

    return(
        <div className={styles.recipeCard}>
            <h1>{recipeName}</h1>
            <img src='https://preppykitchen.com/wp-content/uploads/2021/10/French-Silk-Pie-Recipe-1.jpg'></img>
            <p>{category}</p>
        </div>
    )
}

export default RecipeThumbnail;
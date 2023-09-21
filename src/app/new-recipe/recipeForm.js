import styles from './recipeForm.module.scss'

const RecipeForm = () => {
    return(
            <form className={styles.formContainer}>
                <label>Recipe Name</label>
                <input type='text'></input>
                <label>Recipe Category</label>
                <select id='category' name='category'>
                    <option value='Dessert'>Dessert</option>
                    <option value='Breakfast'>Breakfast</option>
                </select>
                <label>Author</label>
                <select id='author' name='author'>
                    <option value='Erici Jessen'>Erici Jessen</option>
                    <option value='Blue Jessen'>Blue Jessen</option>
                </select>
                <label>Prep Time</label>
                <input type='text'></input>
            </form>
    )
}

export default RecipeForm;
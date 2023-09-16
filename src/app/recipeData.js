const recipes = [{
    id: 1, 
    recipeName: 'French Silk Pie', 
    author:'Erici Jessen', 
    dateCreated:'09/01/2020', 
    ingredients:[
        {type:'topping', ingredients:[{measurement:'4', measurementType:'', ingredientName:'Large Eggs', optional: false},
        {measurement:'1 1/4', measurementType:'Cups', ingredientName:'Sugar', optional: false}, 
        {measurement:'4', measurementType:'Ounces', ingredientName:'Unsweetened Chocolate', optional: false},
        {measurement:'1', measurementType:'Cup', ingredientName:'Unsalted Butter', optional: false},
        {measurement:'2', measurementType:'Teaspoons', ingredientName:'Vanilla Extract', optional: false},
        {measurement:'2/3', measurementType:'Cup', ingredientName:'Heavy Cream', optional: false}
        ]}, 
        {type:'filling', ingredients:[{measurement:'1', measurementType:'cup', ingredientName:'Heavy Cream', optional: false},
        {measurement:'2', measurementType:'Tablespoons', ingredientName:'Confectioners Sugar', optional: false},
        {measurement:'', measurementType:'', ingredientName:'Chocolate curls', optional: true}]}, 
        {type: 'crust', ingredients:[{measurement:'1', measurementType:'', ingredientName:'Pie Crust of Choice', optional: false}]}],
    method:[
        {type: 'topping', steps:['Put heavy cream in stand mixer on medium high until soft peaks form', 
        'Add confectioners sugar and continue to beat until tall peaks', 
        'Add generously to top of set pie and sprinkle on some chocolate curls, enjoy!']},
        {type:'filling', steps:['Do something here']}, 
        {type: 'crust', steps:['Bake crust as directed in instructions puncturing with fork and placing pie weights or beans in it']}],
    images: ['https://preppykitchen.com/wp-content/uploads/2021/10/French-Silk-Pie-Recipe-1.jpg'], 
    servings: '6-8 individual servings',
    prepTime:{hours: 0, minutes: 45},
    idleTime:{hours: 8, minutes: 0},
    notes:[{dateAdded:'09/01/2020', author:'Erici Jessen', message:'I like this pie'}]
}]
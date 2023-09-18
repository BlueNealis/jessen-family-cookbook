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
},
{
    id: 2, 
    recipeName: 'Simple Brownies', 
    author:'Blue Jessen', 
    dateCreated:'09/13/2023', 
    ingredients:[ 
        {type:'', ingredients:[{measurement:'1', measurementType:'cup', ingredientName:'Flour', optional: false},
        {measurement:'2', measurementType:'Cup', ingredientName:'Sugar', optional: false},
        {measurement:'1', measurementType:'Cup', ingredientName:'Melted salted Butter', optional: false},
        {measurement:'4', measurementType:'', ingredientName:'Eggs', optional: false},
        {measurement:'1', measurementType:'Pinch', ingredientName:'Salt', optional: false},
        {measurement:'2/3', measurementType:'Cup', ingredientName:'Cocoa Powder', optional: false},
        {measurement:'2', measurementType:'Teaspoons', ingredientName:'Vanilla', optional: true}]}, 
       ],
    method:[
        {type: '', steps:['Preheat oven to 350 degrees and line an 8x8 metal pan with parchment', 
        'Combine melted butter with sugar and egg and whisk for two minutes', 
        'Fold in cocoa powder, flour salt and vanilla until you have a thick batter', 
        `Pour into pan and bake for 35 - 40 minutes, top will be set and middle shouldn't be super liquidy`]},
       ],
    images: ['https://bluebowlrecipes.com/wp-content/uploads/2022/05/5-ingredient-brownies-4063.jpg'], 
    servings: '16 individual servings',
    prepTime:{hours: 0, minutes: 10},
    idleTime:{hours: 0, minutes: 35},
    notes:[{dateAdded:'09/13/2020', author:'Blue Jessen', message:'You can half and quarter this recipe and it works fine, I used a smaller loaf pans for the smaller recipes with similar bake times (ie: like 35 mins)'}]
}
]
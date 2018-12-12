<template>
	<div>
		<h1>Community Recipe Book</h1>

		<div id="all">

			<div class="container"> <!-- start of container for css grid-->
		
				<div class="lefties"> <!-- start of left column css grid-->

					<div class="box1"> 
						<p id= "recipeName"></p>
					</div>
					
					<div class="box3">
						<h2>Ingredients:</h2>
						<p  id= "recipeIngredients"></p>
					</div>

					<div class="box4">
						<h2>Directions:</h2>
						<p id= "recipeDirections"></p>
					</div>

				</div><!-- end of left column css grid-->

				<div class="righties"> <!-- start of right column css grid-->

					<div class="box2">
						<img id="recipeImage" src="../assets/tacos.jpg">
					</div>

					<div class="box5">
						<h2>Notes</h2>
						<p id= "recipeNotes"></p>
					</div>

				</div> <!-- end of right column css grid-->

			</div> <!-- end of container for css grid-->

		</div> <!-- end of id all -->

		<div id="moveup">
			<button @click="BackPage()">Previous Page</button>
			<button @click="NextPage()">Next Page</button>
		</div>
		
	</div>
</template>

<script>
	import {recipesRef} from '../firebase.js'
    var REntry=0;
	export default{
		// data(){
		// 	return {
		// 		name:"",
		// 		ingredients:"",
		// 		directions:"",
		// 		notes:"",
		// 		imgURL:""
		// 	}
		// },
		firebase:{
			recipes:recipesRef
			//asObject:true
		},
		 methods:{
		 	SetNewRecipePage(){
		 		//REntry=1;
		 		document.getElementById("recipeName").innerHTML = this.recipes[REntry].Rtitle;
		 		document.getElementById("recipeIngredients").innerHTML = this.recipes[REntry].ingredients;
		 		document.getElementById("recipeDirections").innerHTML = this.recipes[REntry].directions;
		 		document.getElementById("recipeNotes").innerHTML = this.recipes[REntry].notes;
		 		document.getElementById("recipeImage").src = this.recipes[REntry].imgURL;
		 		// document.getElementById("recipePic").src = this.recipes[REntry].imgURL;
		 	},
		 	 NextPage(){
		 	 	 //called on page turn
		 	 	 if(REntry === this.recipes.length){
					REntry = REntry;
		 	 	 }else{
		 	 	 	REntry = REntry+1;
		 	 	 }
		 	 	this.SetNewRecipePage();
		 	 },
		 	 BackPage(){
		 	 	//called on page back
		 	 	//BUG ON DOUBLE BACK FOR LAST RECIPE
		 	 	 if(REntry === 0){
		 	 	 	REntry = REntry;
		 	 	 }
		 	 	 // else if(REntry === this.recipes[].length){
		 	 	 // 	REntry = REntry-2;
		 	 	 // }
		 	 	 else{
		 	 	 	REntry = REntry-1;
		 	 	 }
		 	 	this.SetNewRecipePage();
		 	 }
		// 	submitRecipe(){
		// 		recipesRef.push({nameP:this.name, ingredients:this.ingredients, directions:this.directions, notes:this.notes, imgURL:this.imgURL})
		// 	}
		 }
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Abel|Merienda+One');

	#all{ /*entire view recipes page EXCEPT TITLE*/
		background-image: url("../assets/book.png");
  		background-size: 100vw;
  		background-repeat: no-repeat;
  		font-family: 'Abel', sans-serif;
	}

	h1{ /*"Community Recipe Book" title*/
		color: white;
		font-size: 7vw;
	}

	#recipeName{ /*Specific recipe title*/
		font-size: 3vw;
		color: black;
		font-family: 'Merienda One', cursive;
	}

	h2{ /*titles for ingredients, directions and notes*/
		font-size: 2vw;
	}

	p{ /*all firebase information*/
		font-size: 1.2vw;
	}

	.container{ /*css grid setup*/
		/*doesn't include book or buttons*/
		padding-top: 5vh;
		display: grid;
		grid-template-columns: 40vw 40vw;
		grid-template-rows: 4vh 4vh 4vh;
		color: black;
		padding-bottom: 55vw;
	}

	.box1{ /*firebase recipe title box*/
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
/*		background-color: lime;
*/	}

	.box2{ /*firebase image box*/
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 3;
		margin-top: 3vw;
/*		background-color: yellow;
*/	}
	#recipeImage{
		width: 30vw;
	}

	.box3{ /*ingredients title and firebase box*/
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 3;
/*		background-color: orange;
*/	}

	.box4{ /*directions title and firebase box*/
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 3;
		grid-row-end: 4;
/*		background-color: blue;
*/	}

	.box5{ /*notes title and firebase box*/
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 3;
		grid-row-end: 4;
/*		background-color: red;
*/	}

	.lefties{
		margin-left: 15vw;
		text-align: left;
	}

	.righties{
		margin-left: 15vw;
		text-align: left;
	}

	#moveup{
		margin-top: 3vh;
		padding-bottom: 5vh;
		font-family: 'Abel', sans-serif;
	}

	button{
		margin: 2vw;
		margin-top: -2vw;
		font-family: 'Abel', sans-serif;
		color: white;
		font-size: 2vw;
  		background-color: transparent;
  		-webkit-transition-duration: 0.4s; /* Safari */
  		transition-duration: 0.4s;
  		border-radius: 5px;
  		border: 2px solid white;
	}

	button:hover{
		color: grey;
		background-color: white;
		border: 2px solid white;
	}

</style>
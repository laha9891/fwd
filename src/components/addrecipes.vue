<template>
	<div>
		<h1>Add Your Own Recipe to<br> Share with the Community</h1>

		<div id="all">

			<div class="container"> <!-- start of container for css grid-->

				<div class="lefties"> <!-- start of left column css grid-->

					<div class="box1">
						<h2>Recipe Name:</h2>
						<input v-model="Rtitle" type="text" name="Rtitle" id="clearEntry"></input>
					</div>

					<div class="box3">
						<h2>Enter Your Ingredients:</h2>
						<textarea v-model="ingredients" type="text" name="ingredients" rows="7" cols="45"></textarea>
					</div>

					<div class="box4">
						<h2>Directions:</h2>
						<textarea v-model="directions" type="text" name="directions" rows="7" cols="45"></textarea>
					</div>

				</div><!-- end of left column css grid-->

				<div class="righties"> <!-- start of right column css grid-->

					<div class="box2">
						<h2>Add Your Image:</h2>
						<input id="pic" type="file" @change="onFileSelected" />
					</div>

					<div class="box5">
						<h2>Notes:</h2>
						<textarea v-model="notes" type="text" name="notes" rows="7" cols="45"></textarea>
					</div>

				</div> <!-- end of right column css grid-->

			</div> <!-- end of container for css grid-->

		</div> <!-- end of id all -->

		<div id="moveup">
			<button @click="submitRecipe()">Add Recipe</button>
		</div>

	</div>
</template>

<script>
	import {recipesRef} from '../firebase.js';
	import {storageRef} from '../firebase.js';

    var fileUrl="";
    var photoRef="";
    var uploadTask="";
    var percentage="";

	export default{
		data(){
			return {
				Rtitle:"",
				ingredients:"",
				directions:"",
				notes:"",
				imgURL:"",
				selectedFile:""
			}
		},
		firebase:{
			recipes:recipesRef
		},
		methods:{
			onFileSelected(event){
				this.selectedFile = event.target.files[0]
				photoRef = storageRef.child(this.selectedFile.name);
				uploadTask = photoRef.put(this.selectedFile);
				uploadTask.on('state_changed', function progress(snapshot){
					percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100
				})
			},
			submitRecipe(event){
				var reference = photoRef.getDownloadURL().then(function(url){
					fileUrl = url
					console.log(fileUrl)
				}).catch(function(error){
					console.error(error)
				})
				recipesRef.push({Rtitle:this.Rtitle, ingredients:this.ingredients, directions:this.directions, notes:this.notes, imgURL:fileUrl})
			
				//document.getElementById("clearEntry").reset();
				// document.getElementById("#clearEntry").value = " ";
			}
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

	h2{ /*titles for ingredients, directions and notes*/
		font-size: 2vw;
	}

	textarea{ /*all firebase information*/
		font-size: 1.2vw;
		font-family: 'Abel', sans-serif;
	}

	input{ /*all firebase information*/
		font-size: 2.5vw;
		font-family: 'Merienda One', cursive;
	}

	#pic{
		font-family: 'Abel', sans-serif;
		font-size: 1.5vw;
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
/*		margin-top: -2vw;
*/		font-family: 'Abel', sans-serif;
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
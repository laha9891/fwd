<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Add Your Recipe</router-link> |
      <router-link to="/about">Community Recipes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Abel|Merienda+One');
#app {
  font-family: 'Abel', sans-serif;
  // -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("assets/wood.jpg");
  background-size: 100vw;
  background-repeat: repeat;
  color: white;
}
#nav {
  padding: 3vh;
  font-size: 1.5vw;
  a {
    font-weight: bold;
    
    color: grey;
    text-decoration: none;
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>



<!--Header containing useful actions such as, login, sign up, search bar, etc-->

<template>
  <!--Header-->

  <header>

    <div class="header">

      <router-link :to="'/'" class="">
        <label>SIMPLE NOTES</label>
      </router-link>

      <nav>
        <ul>
          <li class="hcomponents">
            <router-link :to="'/'" class="material-symbols-outlined hcomponents"> Home</router-link>
          </li>
          <li><a href="#" class="material-symbols-outlined hcomponents">notifications</a></li>
          <div class="userProfile">
            <li><a href="#" class="material-symbols-outlined hcomponents">account_circle</a></li>
            <span>Rajiv Chaves</span>
          </div>
        </ul>
    </nav>
    
    </div>
   
    
  </header>
</template>


<script>


export default {
  name: "HeaderComp",

 
//  Data for the component (show menu, show login, show sign up, notification and notification hover)
  data(){
    return{
      notification: false,
      notificationHover: false,
    };
  },
  
}
</script>


<style scoped>

header{
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 28px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.header{
  display: flex;
  padding: 10px;
}

.header ul{
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: 30px;
  margin: auto;
  margin-left: 885px;
  list-style-type: none;
  align-items: center;
}

.hcomponents{
  font-weight: bold;
}

.header a{
    color: black;
    text-decoration: none;
}

.header a:hover{
  text-decoration: underline; /* Adiciona sublinhado quando o mouse está sobre o texto */
}

label{
  font-weight: bold;
  font-size: 25px;
  color: #512da8;
}

.userProfile{
  border: 1px solid #ccc;
  border-radius: 50px ;
  display: flex;
  margin-right: 25px;
  width: 130px;
  align-items: center;
  padding:5%;
  background-color: #512da8;
  color: white;
}

.userProfile a{
  color: white;
  margin-right: 10px;
}
/*Responsive*/

@media screen and (min-width: 500px){
  .header ul{
      grid-auto-flow: column;
  }
}

</style>
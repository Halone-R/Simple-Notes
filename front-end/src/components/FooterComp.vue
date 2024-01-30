<!--Footer containing direct links with useful information-->

<template>

  <!--Footer-->

  <footer>

    <div class="footer">
      <ul>
        <li class="fcomponents"><a href="#">Twitter</a></li>
        <li class="fcomponents">
          <router-link :to="'/aboutus'"> About Us</router-link>
        </li>
        <li class="fcomponents">
          <a href="git@github.com:Halone-R/Notlar.git" target="_blank">Github</a>
        </li>
      </ul>
    </div>

  </footer>
</template>

<script>

export default{
  name: "FooterComp",
};

</script>

<style scoped>

/*Footer*/

footer{
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 28px;
    width: 100%; 
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
}

.footer{
    display: flex;
    background-color: #512da8;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid white;
}

.footer ul{
    display: inline-grid;
    grid-auto-flow: row;
    grid-gap: 30px;
    margin: auto;
    margin-left: 650px;
    list-style-type: none;
}

.fcomponents{
    font-weight: 600;
}

.footer a{
    color: white;
    text-decoration: none;
    margin: 50px;
}

.footer a:hover{
    text-decoration:underline;
}

.footer li:last-child{
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}


/*Responsive*/

@media screen and (min-width: 500px){
  .footer ul{
      grid-auto-flow: column;
  }
}

@media screen and (max-width: 500px){
  .footer{
      height: 45vh;
      border-radius: 10px;
  }

  .footer a{
      margin-right: 30px;
  }
}

@media screen and (max-width: 1800px){
  .footer ul{
      margin: auto;
  }
}

</style>

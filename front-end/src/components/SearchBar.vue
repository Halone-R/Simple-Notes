<template>
    <!--Overall Search Bar-->

  <div class="searchBar" id="search">
    <form autocomplete="off" @submit.prevent="handleSearch">
      <!--Search button and input-->

      <button type="submit">
        <i class="fa fa-search material-symbols-outlined" aria-hidden="true"></i>
      </button>
      <input ref="searchInput" type="text" placeholder="Search" name="search" v-model="searchInput" @input="handleInput"/>
    </form>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
     /*To remove the outline color when searching*/

input:focus{
    outline: none;
}


/*Search Bar*/

.searchBar{
    position: relative;
    outline: none;
    margin-right: 20px;
}

.searchBar form{
    position: relative;
    display: flex;
    font-size: 1rem;
    height: 30px;
    outline: 0;
    width: 100%;
}

.searchBar button{
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    border-width: 0;
    cursor: pointer;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    margin: 0;
    padding: 5px 10px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    background-color: rgb(58, 56, 53);
    border: 1px solid white;
    border-right: none;
    color:white ;
}

.searchBar input{
    width: 100%;
    padding: 10px 12px;
    z-index: 3;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-width: 0;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    margin: 0;
    padding: 10px 12px;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    background-color: white;
    color: black;
    border: 1px solid white;
    border-left: none;
}

.searchBar ul{
    z-index: 5;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    background-color: white;
    width: 100%;
    border: 2px solid #ffffff;
    border-top: none;
    list-style-type: none;
    width: 97%;
}

.searchBar li{
    padding: 10px;
    cursor: pointer;
}

.searchBar li:hover{
    background-color: rgb(255, 252, 242);
    border-radius: 10px;
}

/*Autocomplete*/

.searchResultsWrapper{
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border-radius: 4px;
    padding-top: 4px;
    margin-left: 5px;
    max-height: 300px;
    flex-direction: column;
    display: flex;
}

.searchResults{
    margin-top: 0;
    padding: 3px;
    border-radius: 10px;
}


.searchResults li{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

.searchResults a{
    text-decoration: none;
    color: inherit;
}

.searchResults img{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

/*Responsive*/

@media screen and (max-width: 800px){
  .searchBar{
      margin: auto;
      margin-top: 30px;
      width: 80%;
  }
}


span:hover{
  text-decoration: underline; /* Adiciona sublinhado quando o mouse está sobre o texto */
}    
</style>
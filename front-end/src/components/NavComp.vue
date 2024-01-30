<template>
<nav>
    <div class="nav">
        <ul>
            <li class="navcomponents"><SearchBar /></li>
            <li><a href="#" class="material-symbols-outlined navcomponents">calendar_today</a><span>Today</span></li>
            <li><a href="#" class="material-symbols-outlined navcomponents">calendar_month</a><span>Scheduled</span></li>
            <li><a href="#" class="material-symbols-outlined navcomponents">star</a><span>Important</span></li>
            <li><a href="#" class="material-symbols-outlined navcomponents">person</a><span>Assigned to me</span></li>
            <li><a href="#" class="material-symbols-outlined navcomponents">inbox</a><span>All</span></li>
            <li><a href="#" class="material-symbols-outlined navcomponents">check_circle</a><span>concluded</span></li>
        </ul>
        <hr>
    </div>
</nav>

</template>
<script>
import SearchBar from "./SearchBar.vue";
export default {
    components: {
    SearchBar,
  },
    
}
</script>
<style scoped>

nav{
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 10px;
    position: absolute;
    left: 0;
    top: 100px;
    right: 0px;
}

.nav{
    display: block;
    background-color: #512da8;
    border-radius: 10px;
    width: 230px;
    height: 550px;
    margin-left: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    
}

.nav ul{
    display: inline-grid;
    grid-auto-flow: row;
    margin: auto;
    list-style-type: none;
}

span{
    margin-right: 15px;
    color: white;
}

hr{
    margin-top: 30px;
    width: 220px;
}
.navcomponents{
    margin-top: 15px;
    font-weight: 600;
    margin-bottom: 15px;
    vertical-align: middle;
    margin-right: 15px;
}

.nav a{
    color: white;
    text-decoration: none;
}

.nav a:hover{
    text-decoration:underline;
}

span:hover{
    text-decoration: underline;
}


</style>
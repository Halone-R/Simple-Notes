<template>
    <section>
        <div class="container">

          <div class="left-box">
            <nav>
              <a onclick="tab(0)" class="tab active"><i class="material-symbols-outlined">calendar_today</i><span>Today</span></a>
              <a onclick="tab(1)" class="tab"><i class="material-symbols-outlined">calendar_month</i><span>Scheduled</span></a>
              <a onclick="tab(2)" class="tab"><i class="material-symbols-outlined">star</i><span>Important</span></a>
              <a onclick="tab(3)" class="tab"><i class="material-symbols-outlined">person</i><span>Assigned to me</span></a>
              <a onclick="tab(4)" class="tab"><i class="material-symbols-outlined">inbox</i><span>All</span></a>
              <a onclick="tab(5)" class="tab"><i class="material-symbols-outlined">check_circle</i><span>Concluded</span></a>                        
            </nav>
          </div>

          <div class="right-box">
                <!--  Tab 1 -->
              <div class="today tab-content">

                <div class="title">
                  <i class="material-symbols-outlined">calendar_today</i>
                  <h1>Today</h1>
                </div>

                <div class="box-add-note">
                  <input type="text" placeholder="Adicionar uma tarefa">
                  <a href="#" class="material-symbols-outlined">calendar_month</a>
                  <a href="#" class="material-symbols-outlined">notifications</a>
                  <a href="#" class="material-symbols-outlined">repeat</a>
                  <button>Adicionar</button>
                </div>

                <div class="note">
                  <input type="checkbox">
                  <span>Lista de compras</span>
                  <a href="#" class="material-symbols-outlined">star</a>
                </div>
            
              </div>
          

          <!--  Tab 2 -->
          <div class="month tab-content">

            <div class="title">
              <i class="material-symbols-outlined">calendar_month</i>
              <h1>Scheduled</h1>
            </div>

            <div class="box-add-note">
              <input type="text" placeholder="Adicionar uma tarefa">
              <a href="#" class="material-symbols-outlined">calendar_month</a>
              <a href="#" class="material-symbols-outlined">notifications</a>
              <a href="#" class="material-symbols-outlined">repeat</a>
              <button>Adicionar</button>
            </div>

            <div class="note">
              <input type="checkbox">
              <span>Lista de compras</span>
              <a href="#" class="material-symbols-outlined">star</a>
            </div>

            </div>
        

          <!--  Tab 3 -->
          <div class="important tab-content">

            <div class="title">
              <i class="material-symbols-outlined">star</i>
              <h1>Important</h1>
            </div>

            <div class="box-add-note">
              <input type="text" placeholder="Adicionar uma tarefa">
              <a href="#" class="material-symbols-outlined">calendar_month</a>
              <a href="#" class="material-symbols-outlined">notifications</a>
              <a href="#" class="material-symbols-outlined">repeat</a>
              <button>Adicionar</button>
            </div>

            <div class="note">
              <input type="checkbox">
              <span>Lista de compras</span>
              <a href="#" class="material-symbols-outlined">star</a>
            </div>

            </div>

          <!--  Tab 4 -->
          <div class="assigned tab-content">

            <div class="title">
              <i class="material-symbols-outlined">person</i>
              <h1>Assigned to me</h1>
            </div>

            <div class="note">
              <input type="checkbox">
              <span>Lista de compras</span>
              <a href="#" class="material-symbols-outlined">star</a>
            </div>

          </div>

          <!--  Tab 5 -->
          <div class="all tab-content">

            <div class="title">
              <i class="material-symbols-outlined">inbox</i>
              <h1>All</h1>
            </div>

            <div class="note">
              <input type="checkbox">
              <span>Lista de compras</span>
              <a href="#" class="material-symbols-outlined">star</a>
            </div>

            </div>


          <!--  Tab 6 -->
          <div class="concluded tab-content">

            <div class="title">
              <i class="material-symbols-outlined">person</i>
              <h1>Concluded</h1>
            </div>

            <div class="note">
              <input type="checkbox">
              <span>Lista de compras</span>
              <a href="#" class="material-symbols-outlined">check_circle</a>
            </div>

          </div>
        </div>
    </div>

    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
section{
  background: aliceblue;
  
}
.container{
  background:  linear-gradient(#9365ac, #7a62b3);
  width: 1300px;
  height: 550px;
  margin: 0,  auto;
  position: relative;
  margin-top: 10%;
  box-shadow: 3px 3px 10px rgba(119, 119, 119, .5);
}

.left-box{
  float: left;
  top: -4%;
  left: 5%;
  position: absolute;
  width: auto;
  height: 600px;
  background: aliceblue;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border: none;
}

.left-box i{
  margin-right: 10px;
}


nav a{
  list-style: none;
  padding: 38px;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  transition: all .3s ease-in-out;
}

nav a:hover {
  color: white;
  background-color: #7a62b3;
  cursor: pointer;
  transform: scale(1.1);
}


nav a.active{
  color: white;
  background-color: #7a62b3;
}

.right-box{
  width: 60%;
  margin-left: 27%;
}

.tab-content{
  transition: all .5s ease-in;
  width: 80%;
}

h1{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 35px;
}

.title{
  display: flex;
  flex-direction: row;
}

.title i{
  margin-right: 10px;
  margin-top: 30px;
}

input{
  border: 0;
  border-bottom: 1px solid white;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;
  padding: 7px 0;
  background-color: transparent;
  color: white;
  outline: none;
}
input::placeholder {
    color: white; /* Define a cor do texto de espaço reservado como vermelho */
}

button{
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  border: 0;
  color: white;
  background-color:  #7a62b3;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 7px 15px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 500px;

}

</style>
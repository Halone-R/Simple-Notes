<template>
    <section>
      <div class="container">
          <div class="left-box">
            <nav>
              <a @click="activateTab(0)" :class="{ 'tab': true, 'active': activeTab === 0 }"><i class="material-symbols-outlined">calendar_today</i><span>Today</span></a>
              <a @click="activateTab(1)" :class="{ 'tab': true, 'active': activeTab === 1 }"><i class="material-symbols-outlined">calendar_month</i><span>Scheduled</span></a>
              <a @click="activateTab(2)" :class="{ 'tab': true, 'active': activeTab === 2 }"><i class="material-symbols-outlined">star</i><span>Important</span></a>
              <a @click="activateTab(3)" :class="{ 'tab': true, 'active': activeTab === 3 }"><i class="material-symbols-outlined">person</i><span>Assigned to me</span></a>
              <a @click="activateTab(4)" :class="{ 'tab': true, 'active': activeTab === 4 }"><i class="material-symbols-outlined">inbox</i><span>All</span></a>
              <a @click="activateTab(5)" :class="{ 'tab': true, 'active': activeTab === 5 }"><i class="material-symbols-outlined">check_circle</i><span>Concluded</span></a>
            </nav>
          </div>

          <div class="right-box">
          <!-- Tab 1: Today -->
          <div v-show="activeTab === 0" class="today tab-content">
              <div class="title">
                  <i class="material-symbols-outlined">calendar_today</i>
                  <h1>Today</h1>
              </div>
              <div class="box-add-note">
                  <input type="text" placeholder="Adicionar uma tarefa" v-model="newNoteText">
                  <a href="#" class="material-symbols-outlined">calendar_month</a>
                  <a href="#" class="material-symbols-outlined">notifications</a>
                  <a href="#" class="material-symbols-outlined">repeat</a>
                  <button @click="addNote">Adicionar</button>
              </div>
              <!-- Notas -->
              <div class="note" v-for="(note, index) in todayNotes" :key="index">
                  <input type="checkbox" v-model="note.isChecked">
                  <span>{{ note.text }}</span>
                  <a href="#" class="material-symbols-outlined" @click.prevent="toggleStarred(note)">{{ note.isStarred ? 'star' : 'star_outline' }}</a>
                  <button @click="removeNoteToday(index)">Excluir</button>
              </div>
          </div>

          <!-- Tab 2: Scheduled -->
          <div v-show="activeTab === 1" class="month tab-content">
              <div class="title">
                  <i class="material-symbols-outlined">calendar_month</i>
                  <h1>Scheduled</h1>
              </div>
              <div class="box-add-note">
                  <input type="text" placeholder="Adicionar uma tarefa" v-model="newScheduledNoteText">
                  <a href="#" class="material-symbols-outlined">calendar_month</a>
                  <a href="#" class="material-symbols-outlined">notifications</a>
                  <a href="#" class="material-symbols-outlined">repeat</a>
                  <button @click="addScheduledNote">Adicionar</button>
              </div>
              <!-- Notas -->
              <div class="note" v-for="(note, index) in scheduledNotes" :key="index">
                  <input type="checkbox" v-model="note.isChecked">
                  <span>{{ note.text }}</span>
                  <a href="#" class="material-symbols-outlined" @click.prevent="toggleStarred(note)">{{ note.isStarred ? 'star' : 'star_outline' }}</a>
                  <button @click="removeScheduledNote(index)">Excluir</button>
              </div>
          </div>


          <!-- Tab 3 -->
          <div v-show="activeTab === 2" class="important tab-content">
              <div class="title">
                  <i class="material-symbols-outlined">star</i>
                  <h1>Important</h1>
              </div>
              <div class="box-add-note">
                  <input type="text" placeholder="Adicionar uma tarefa" v-model="newImportantNoteText">
                  <a href="#" class="material-symbols-outlined">calendar_month</a>
                  <a href="#" class="material-symbols-outlined">notifications</a>
                  <a href="#" class="material-symbols-outlined">repeat</a>
                  <button @click="addImportantNote">Adicionar</button>
              </div>
              <!-- Notas -->
              <div class="note" v-for="(note, index) in importantNotes" :key="index">
                  <input type="checkbox" v-model="note.isChecked">
                  <span>{{ note.text }}</span>
                  <a href="#" class="material-symbols-outlined" @click.prevent="toggleStarred(note)">{{ note.isStarred ? 'star' : 'star_outline' }}</a>
                  <button @click="removeNoteFromImportant(index)">Excluir</button>
              </div>
          </div>

          <!--  Tab 4 -->
          <div  v-show="activeTab === 3" class="assigned tab-content">

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

          <!-- Tab 5 -->
          <div v-show="activeTab === 4" class="all tab-content">
              <div class="title">
                  <i class="material-symbols-outlined">inbox</i>
                  <h1>All</h1>
              </div>
              <!-- Notas -->
              <div class="note" v-for="(note, index) in notes" :key="index">
                  <input type="checkbox" v-model="note.isChecked">
                  <span>{{ note.text }}</span>
                  <a href="#" class="material-symbols-outlined" @click.prevent="toggleStarred(note)">{{ note.isStarred ? 'star' : 'star_outline' }}</a>
                  <button @click="removeNoteFromAll(index)">Excluir</button>
              </div>
          </div>

          <!--  Tab 6 -->
          <div  v-show="activeTab === 5" class="concluded tab-content">

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
  data() {
    return {
      activeTab: 0,
      isChecked: false,
      notes: [],
      newNoteText: '',
      newScheduledNoteText: '',
      importantNotes: []
    };
  },

  computed: {
    todayNotes() {
      return this.notes.filter(note => !note.isScheduled);
    },
    scheduledNotes() {
      return this.notes.filter(note => note.isScheduled);
    }
  },

  methods: {
    activateTab(index) {
      this.activeTab = index;
    },
    addNote() {
      if (this.newNoteText.trim() !== '') {
          this.notes.push({
          text: this.newNoteText,
          isChecked: false,
          isStarred: false,
          isScheduled: false

        });
        this.newNoteText = '';
      }
    },
    addScheduledNote() {
      if (this.newScheduledNoteText.trim() !== '') {
        this.notes.push({
          text: this.newScheduledNoteText,
          isChecked: false,
          isStarred: false,
          isScheduled: true
        });
        this.newScheduledNoteText = '';
      }
    },

    addImportantNote() {
      if (this.newImportantNoteText.trim() !== '') {
        const newImportantNote = {
          text: this.newImportantNoteText,
          isChecked: false,
          isStarred: true, // Marcar como importante
          isScheduled: false
        };
        this.notes.push(newImportantNote);
        this.newImportantNoteText = '';
        

        // Adicionar a nota diretamente à lista importantNotes
        this.importantNotes.push(newImportantNote);
      }
    },
    removeNoteToday(index) {
      const noteToRemove = this.todayNotes[index];
      const indexInNotes = this.notes.indexOf(noteToRemove);
      if (indexInNotes !== -1) {
        this.notes.splice(indexInNotes, 1);
      }
    },

    removeScheduledNote(index) {
      const note = this.scheduledNotes[index];
      const indexInImportantNotes = this.importantNotes.indexOf(note);
      if (indexInImportantNotes !== -1) {
        this.importantNotes.splice(indexInImportantNotes, 1);
      }
      this.notes.splice(this.notes.indexOf(note), 1);
    },

    removeNoteFromImportant(index) {
      const note = this.importantNotes[index];
      const indexInNotes = this.notes.indexOf(note);
      if (indexInNotes !== -1) {
        this.notes.splice(indexInNotes, 1);
      }
      this.importantNotes.splice(index, 1);
    },

    removeNoteFromAll(index) {
      this.notes.splice(index, 1);
    },



    toggleStarred(note) {
      note.isStarred = !note.isStarred;

      if (note.isStarred && !this.importantNotes.includes(note)) {
        this.importantNotes.push(note);
      } else if (!note.isStarred) {
        const indexInImportantNotes = this.importantNotes.indexOf(note);
        if (indexInImportantNotes !== -1) {
          this.importantNotes.splice(indexInImportantNotes, 1);
        }
      }
    },
  }
};



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
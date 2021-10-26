const appInstance = {
  data(){
      return {
        students:[],
        student: {
              firstName:"",
              lastName:"",
              email:""
          },
          gotoBuildal:"https://www.buildal.ug"
      };
  },
  methods: {
      
      addStudent() {
          this.students.push(this.student)
          console.log(this.students);
      }
  }
}

Vue.createApp(appInstance).mount('#app')
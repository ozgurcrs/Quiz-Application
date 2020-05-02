<template>
  <div>
    <app-header :title="questions[0].category"></app-header>
    <div class="questionArea mt-5">
      <p>{{questions[0].question}}</p>
    </div>
    <div class="elections mt-5">
      <button
        @click="controlQuestion(questions[0].correct_answer)"
        class="chosee"
      >{{questions[0].correct_answer}}</button>
      <button
        @click="controlQuestion(questions[0].incorrect_answers[0])"
        class="chosee"
      >{{questions[0].incorrect_answers[0]}}</button>
      <button
        @click="controlQuestion(questions[0].incorrect_answers[1])"
        v-if="!status"
        class="chosee"
      >{{questions[0].incorrect_answers[1]}}</button>
      <button
        @click="controlQuestion(questions[0].incorrect_answers[2])"
        v-if="!status"
        class="chosee"
      >{{questions[0].incorrect_answers[2]}}</button>
    </div>

    <div v-if="correctStatus" class="col-md-12 correct fadeInLeft">
      <h3>{{statusText}}</h3>
    </div>
  </div>
</template>

<script>
import appHeader from "./shared/header";
export default {
  data() {
    return {
      backgroundColor: "#f8de41",
      questions: [],
      status: false,
      correct: "",
      correctStatus: false,
      statusText: "",
      intervalStatus: null
    };
  },
  components: {
    appHeader
  },

  methods: {
    getQuestion() {
      clearInterval(this.intervalStatus);
      this.status = false;
      this.$http.get("https://opentdb.com/api.php?amount=1").then(response => {
        this.questions.push(response.body.results[0]);

        this.correct = this.questions[0].correct_answer;
        if (this.questions[0].incorrect_answers.length == 1) this.status = true;
      });
    },
    controlQuestion(value) {
      if (this.correctStatus === false) {
        if (value === this.correct) {
          this.correctStatus = true;
          this.statusText = "Correct";
          const ans = this;
          this.intervalStatus = setInterval(function() {
            ans.correctStatus = false;
            ans.questions = [];
            ans.getQuestion();
          }, 2500);
        } else {
          this.correctStatus = true;
          this.statusText = "Incorrect";
          const ans = this;
          this.intervalStatus = setInterval(function() {
            ans.correctStatus = false;
            ans.questions = [];
            ans.getQuestion();
          }, 2500);
        }
      }
    }
  },

  created() {
    this.getQuestion();
  }
};
</script>

<style >
.questionArea {
  width: 85%;
  margin: 15px auto;
  height: auto;
  border-radius: 15px 3px 35px 2px;
  padding: 14px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px 3px #fff;
  background: #fff;
}
.questionArea p {
  font-size: 17px;
  color: #333;
  font-family: "Cinzel", serif;
}
.elections {
  width: 85%;
  margin: 0 auto;
}
button.chosee {
  width: 100%;
  height: 50px;
  margin-top: 15px;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-weight: bold;
  box-shadow: 1px 1px 5px #000;
  background: #f8de41;
}

button.chosee {
  border: 0;
  transition: 500ms;
  outline: none;
}

button:hover {
  background: #322c8d;
}

.correct {
  width: 100%;
  height: auto;
  padding: 20px 0;
  border-radius: 30px;
  background: rgb(145, 18, 219, 0.95);
  color: #fff;
  position: absolute;
  top: 230px;
  text-align: center;
  font-family: "Cinzel", serif;
}

.fadeInLeft {
  animation-duration: 1s;
}
</style>
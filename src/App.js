import React from "react"
import './assets/styles/style.css';
import {AnswersList, Chats} from "./components/index"
import FormDialog from './components/forms/FormDialog';
import defaultDataset from "./dataset"

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    // 子コンポーネントで使用するためthisをbindする
    this.selectAnswer = this.selectAnswer.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    chats.push ({
      text: this.state.dataset[nextQuestionId].question,
      type: "question"
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  } 

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => this.displayNextQuestion(nextQuestionId, 500))
        break;
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement("a")
        a.href = nextQuestionId
        a.target = "_blank"
        a.click()
        break;
      case (nextQuestionId === "contact"):
        this.handleClickOpen()
        break;
      default:
        const chats = this.state.chats
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        }) 

        this.setState({
          chats: chats
        })

        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000); 
        break;
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    const initAnswers = initDataset.answers
    this.setState({
      answers: initAnswers
    })
  }

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    const chat = {
      text: initDataset.question,
      type: 'question'
    }
    const chats = this.state.chats
    chats.push(chat)

    this.setState({
      chats: chats
    })
  }

  componentDidMount () {
    this.initChats()
    this.initAnswer()
  }
  // useEffect ( () => {
  //   this.initAnswer()
  //   this.initChats()
  //   }, [])

  componentDidUpdate () {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      // scrollHeightは見えていない部分も含めた全体の高さ
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }

    // useEffect ( () => {
  //   const scrollArea = document.getElementById('scroll-area')
  //   if (scrollArea) {
  //     // scrollHeightは見えていない部分も含めた全体の高さ
  //     scrollArea.scrollTop = scrollArea.scrollHeight
  //   }
  // })

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
          <FormDialog open={this.state.open} handleClose={this.handleClose} handleClickOpen={this.handleClickOpen} />
        </div>
      </section>
    )
  }
}

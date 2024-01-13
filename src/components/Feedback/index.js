// Write your React code here.
import {Component} from 'react'
import './index.css'
import Emoji from '../Emoji'
const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class Feedback extends Component {
  state = {card: true}
  carddisplaying = () => {
    this.setState(prevState => ({card: (prevState.card = false)}))
  }
  render() {
    const {card} = this.state
    return (
      <div className="bg">
        {card && (
          <div className="card">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <div className="emojidiv">
              {resources.emojis.map(eachemoji => (
                <Emoji
                  emojiDetails={eachemoji}
                  key={eachemoji.id}
                  carddisplaying={this.carddisplaying}
                />
              ))}
            </div>
          </div>
        )}
        {!card && (
          <div className="lovecard">
            <img
              src={resources.loveEmojiUrl}
              alt="love emoji"
              className="loveemoji"
            />
            <h1 className="headinglove">Thank you!</h1>
            <p className="paralove">
              We will use your Feedback to emprove our customer support
              perfomance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback

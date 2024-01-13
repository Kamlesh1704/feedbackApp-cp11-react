import './index.css'

const Emoji = props => {
  const {emojiDetails, carddisplaying} = props
  const {name, imageUrl} = emojiDetails
  const onclicking = () => {
    carddisplaying()
  }

  return (
    <li className="eachemojidiv">
      <button onClick={onclicking} className="button">
        <img src={imageUrl} className="img" alt={name} />
      </button>
      <p className="para">{name}</p>
    </li>
  )
}
export default Emoji

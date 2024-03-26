
import './App.css'
import card from './components/card'
import img02 from "./assets/img/img02.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <card
      title = "ryan gosling"
      image = {img02}
      text = "amogud"
      ></card>
    </>
  )
}

export default App

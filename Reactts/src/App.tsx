import './App.css'
import { Chai} from "./components/code.tsx"
import { Counter } from "./components/Counter.tsx"

function App() {
  return (
    <>
     <div>
       <h2>Hello TypeScript with React</h2>
      <Chai name="HeadPhone" price={5000} />
      <Chai name="EarPhone" price={6000} />
      <Chai name="EarBud" price={7000} />
      <Counter/>
     </div>
    </>
  )
}

export default App

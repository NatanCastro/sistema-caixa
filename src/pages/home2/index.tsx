import { FC } from "react"
import { Link } from "react-router-dom"

const Home2: FC = () => {
  return (
    <div>
      <h1>Home 2</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia a quaerat maiores, iusto nihil corporis provident sint expedita blanditiis? Necessitatibus repellat tempore neque iste illum iusto rem molestiae temporibus.</p>
      <Link to='/' className="btn">home</Link>
    </div>
  )
}

export default Home2

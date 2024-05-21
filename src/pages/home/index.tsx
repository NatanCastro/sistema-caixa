import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem, quos officiis ex eaque odio suscipit cum aliquid ea nisi? Modi nobis numquam voluptatem quis recusandae itaque tenetur nostrum iste.</p>
      <Link to='home2' className='btn'>home 2</Link>
    </div>
  )
}

export default Home

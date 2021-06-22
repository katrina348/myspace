import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'


const Home = () => {
  const [humans, setHumans] = useState ([])
  useEffect(() => {
    getHumans()
  },[])
  const getHumans = async()=>{
    const {user} = useContext(AuthContext)
    try {
      let res = await axios.get('/api/humans')
      setHumans(res.data)
    }catch(error){
      console.log(error)
    }
  }

  const sample = () => {
    if(humans.length > 0) {
      const index = Math.floor(Math.random() * humans.length)
      return humans [index]
    }
  }
  const upDoot = (id) => {
    console.log('updoot:', id)
  }
  const downDoot = (id) => {
    const filteredHumans = humans.filter(h=> h.id !==id)
    setHumans(filteredHumans)
    console.log('downdoot:', id)
  }
  const renderHuman = ()=>{
    const human = sample()
    if(human){
      return(
        <div>
        <br />
        <Header as='h1'>Myspace for completely regular humans. no aliens allowed</Header>
        <br />
        <Card key={human.id}>
          <Image src={human.avatar} />
          <Card.Content>
            <Card.Header>
              { human.name }
            </Card.Header>
            <Card.Description>
              { human.age }
            </Card.Description>
            <Card.Meta>
              { human.registry }
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={()=>downDoot(human.id)} color="purple" icon basic>
              <Icon name="thumbs down" />
            </Button>
            <Button onClick={()=>upDoot(human.id)} color="cyan" icon basic>
              <Icon name="thumbs up" />
            </Button>
          </Card.Content>
        </Card>
        <Link to="/my_humans">
          <Button color="gold">
            My Humans
          </Button>
        </Link>
      </div>
      )
    }else{
      return <p>No more humans</p>
    }
  }
    return (
      renderHuman()
    )
}
export default Home
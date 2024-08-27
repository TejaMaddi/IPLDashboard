// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCards} = props
  const {id, name, teamImageUrl} = teamCards

  return (
    <li className="li1">
      <Link to={`/team-matches/${id}`} className="list1">
        <img src={teamImageUrl} alt={name} className="teamimage" />
        <p className="teamname">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard

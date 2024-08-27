// Write your code here
import './index.css'

const MatchCard = props => {
  const {teamMatches} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = teamMatches

  const classNameresult = matchStatus === 'Lost' ? 'lost' : 'won'

  return (
    <li className="list1matchcard">
      <div className="card-container-list">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="carddisplay"
        />
        <p className="teamnamecarddisplay">{competingTeam}</p>
        <p className="resultcarddisplay">{result}</p>
        <p className={classNameresult}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard

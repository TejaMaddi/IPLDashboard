// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <div className="latestmatchcard">
      <div className="innercard">
        <div className="details1">
          <p className="teamnamecard">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="venue">{result}</p>
        </div>
        <div className="logocontainer">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="teamlogocard"
          />
        </div>
      </div>
      <hr className="hr1" />
      <div className="details2">
        <p className="first">First Innings</p>
        <p className="second">{firstInnings}</p>
        <p className="first">Second Innings</p>
        <p className="second">{secondInnings}</p>
        <p className="first">Man Of The Match</p>
        <p className="second">{manOfTheMatch}</p>
        <p className="first">Umpires</p>
        <p className="second">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

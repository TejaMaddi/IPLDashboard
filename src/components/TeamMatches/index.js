// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {matchDetails: {}, teamMatches: {}, bannerData: {}, isLoading: true}

  componentDidMount() {
    this.getFullDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getFullDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = updatedData
    const matchUpdatedData = this.getFormattedData(latestMatchDetails)

    const teamUpdatedData = recentMatches.map(each =>
      this.getFormattedData(each),
    )

    this.setState({
      bannerData: updatedData.teamBannerUrl,
      matchDetails: matchUpdatedData,
      teamMatches: teamUpdatedData,
      isLoading: false,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {bannerData, matchDetails, teamMatches, isLoading} = this.state
    const className = `team-matches-container ${this.getRouteClassName()}`
    console.log(bannerData)
    return (
      <div className={className}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="card-container">
            <img src={bannerData} alt="team banner" className="banner" />
            <h1 className="latestmatch">Latest Matches</h1>

            <LatestMatch matchDetails={matchDetails} />
            <ul className="cardslist">
              {teamMatches.map(each => (
                <MatchCard key={each.id} teamMatches={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

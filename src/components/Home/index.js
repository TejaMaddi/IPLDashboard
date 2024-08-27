// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamcards: {}, isLoading: true}

  componentDidMount() {
    this.getcards()
  }

  getcards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      teamcards: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, teamcards} = this.state
    return (
      <div className="app-container">
        <div className="head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="ul1">
            {teamcards.map(each => (
              <TeamCard key={each.id} teamCards={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home

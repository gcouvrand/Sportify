import React, { Component } from 'react'
import Loading from '../Loading'
import GetData from '../../services/GetData'
import Hello from '../Hello'
import Activity from '../Charts/Activity'
import AverageSession from '../Charts/AverageSession'
import Performance from '../Charts/Performance'
import Score from '../Charts/Score'
import Counter from '../Counter'

export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            userMainData: {},
            userActivity: {},
            userAverageSessions: {},
            userPerformance: {},
            isLoaded: false,
        }
    }
    async componentDidMount() {
        const mainData = await GetData(`http://localhost:3000/user/${this.props.id}`,this.props.id)
        const activity = await GetData(`http://localhost:3000/user/${this.props.id}/activity`,this.props.id)
        const averageSessions = await GetData(`http://localhost:3000/user/${this.props.id}/average-sessions`,this.props.id)
        const performance = await GetData(`http://localhost:3000/user/${this.props.id}/performance`,this.props.id)
        this.setState({
            userMainData : mainData,
            userActivity : activity,
            userAverageSessions : averageSessions,
            userPerformance : performance,
            isLoaded: true,
        })
    }
    render () {
        return (
            this.state.isLoaded ?
                (   
                <div>
                    <Hello name={this.state.userMainData.keyData.firstName}/>
                    <div className='content-wrapper'>
                    <div className="graphs-container">
                    <Activity activity={this.state.userActivity}/>
                    <div className="sub-graphs-container">
                    <AverageSession averageSessions={this.state.userAverageSessions.sessions}/>
                    <Performance performance={this.state.userPerformance}/>
                    <Score score={this.state.userMainData?.score} todayScore={this.state.userMainData?.todayScore}/>
                    </div>
                    </div>
                    <Counter data={this.state.userMainData.userInfos}/>
                    </div>
                </div>
                ) 
                : 
            <Loading /> 
        )
    }
}
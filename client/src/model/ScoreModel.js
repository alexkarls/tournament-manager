import moment from 'moment'

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'

// Should convert datetime to moment obj

class ScoreModel {
  constructor(id, matchId, teamId, playerId, value, dateTime) {
    this.id = id
    this.matchId = matchId
    this.teamId = teamId
    this.playerId = playerId
    this.value = value
    this.dateTime = moment(dateTime).format(dateTimeFormat)
  }
}

export default ScoreModel

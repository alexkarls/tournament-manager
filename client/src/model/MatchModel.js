import moment from 'moment'

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'

// Should convert datetime to moment obj

class MatchModel {
  constructor(id, team1, team2, startDateTime, endDateTime) {
    this.id = id
    this.team1 = team1
    this.team2 = team2
    this.startDateTime = moment(startDateTime).format(dateTimeFormat)
    this.endDateTime = moment(endDateTime).format(dateTimeFormat)
  }
}

export default MatchModel

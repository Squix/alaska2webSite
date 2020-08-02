import { h, Component } from 'preact'

import LeaderBoardTableHeader from './leaderBoardTableHeader'

class LeaderBoardTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submissions: this.props.submissions,
      errorRate: false,
      missRate: false,
      falseAlarmRate: false,
      createdAt: false,
      emailFilter: ''
    }
    this.sortBy = this.sortBy.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ submissions: nextProps.submissions })
  }
  sortBy (property) {
    this.setState({
      submissions: this.state.submissions.sort((a, b) => {
        return this.state[property]
          ? b[property] - a[property]
          : a[property] - b[property]
      }),
      missRate: property === 'missRate' ? !this.state.missRate : false,
      errorRate: property === 'errorRate' ? !this.state.errorRate : false,
      falseAlarmRate: property === 'falseAlarmRate' ? !this.state.falseAlarmRate : false,
      createdAt: property === 'createdAt' ? !this.state.createdAt : false,
    })
  }
  handleChange (e) {
    this.setState({
      emailFilter: e.target.value,
      submissions: this.props.submissions.filter(s => s.User.email.startsWith(e.target.value))
    })
  }
  render () {
    return (
      <div>
        <div class="leaderboard-table-container">
          <table class="leaderboard-table table-hover table-dark table-striped">
            <thead>
              <tr>
                <th>
                  <input type="text" class="form-control" value={this.state.emailFilter}
                    onInput={this.handleChange} />
                </th>
	      <th class="align-middle">
		<div>
		  Submission Date
		</div>
	      </th>
                <LeaderBoardTableHeader text={'Missed Detection at 5% False Alarm Rate'}
                  onClick={_ => this.sortBy('missRate')} />
                <LeaderBoardTableHeader text={'minPE (Minimal Error Rate) '}
                  onClick={_ => this.sortBy('errorRate')} />
                <LeaderBoardTableHeader text={'FP50 (False Positive rate at 50% Missed Detection)'}
                  onClick={_ => this.sortBy('falseAlarmRate')} />
              </tr>
            </thead>
            <tbody>
              {
                this.state.submissions.map(submission => {
                  return (
                    <tr>
                      <td>{submission.User.email.split('@')[0]}</td>
                      <td>{new Date(submission.createdAt).toLocaleString()}</td>
                      <td>{submission.missRate}</td>
                      <td>{submission.errorRate}</td>
                      <td>{submission.falseAlarmRate}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default LeaderBoardTable

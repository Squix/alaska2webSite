import { h, Component } from 'preact'
import { connect } from 'react-redux'
import reducer from '../reducer'
import * as actions from '../actions'


@connect(reducer, actions)
class Timeline extends Component {
  componentDidMount() {
    this.props.fetchStages()
  }
  render({ stages }, {}) {
    return (
        <section id="timeline" class="content-section text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 margin-auto">
                <h2 class="margin-auto">Timeline</h2>
                {
                  stages[0]
                    ?
                      <div class="timeline">
                        <div class="timeline-container timeline-container--left">
                          <div class="timeline-content">
                            <h3>Step 1 (Warm up)</h3>
                            <p><b>From</b> {new Date(parseInt(stages[0].start) * 1000).toLocaleString()}</p>
                            <p><b>To</b> {new Date(parseInt(stages[0].end) * 1000).toLocaleString()}</p>
                          </div>
                        </div>
                        <div class="timeline-container timeline-container--right">
                          <div class="timeline-content">
                            <h3>Step 2 (Challenge)</h3>
                            <p><b>From</b> {new Date(parseInt(stages[1].start) * 1000).toLocaleString()}</p>
                            <p><b>To</b> {new Date(parseInt(stages[1].end) * 1000).toLocaleString()}</p>
                          </div>
                        </div>
                        <div class="timeline-container timeline-container--left">
                          <div class="timeline-content">
                            <h3>Step 3 (for fun)</h3>
                            <p><b>From</b> {new Date(parseInt(stages[2].start) * 1000).toLocaleString()}</p>
                            <p><b>To</b> {new Date(parseInt(stages[2].end) * 1000).toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    : null
                }
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default Timeline

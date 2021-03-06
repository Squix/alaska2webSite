import { h, Component } from 'preact'
import { connect } from 'react-redux'
import reducer from '../reducer'
import * as actions from '../actions'

import List from './list'
import LastSubmission from './lastSubmission'

@connect(reducer, actions)
class Submit extends Component {
  constructor() {
    super()
    this.state = {value: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit() {
    this.props.submit(this.state.value)
  }
  handleChange (e) {
    this.setState({ value: e.target.value })
  }
  render() {
    const list = {
      elements: [
        'You can send only one answer every 4 hours.',
        <div>
          The answer should be the list of images names (without the file extension), sorted by
          probability of hidden data.
          For example, if the dataset is <b>1.jpg</b>, <b>2.jpg</b>, <b>3.jpg</b>, my answer will be
          &nbsp;<b>2;3;1</b> if I think there is a higher probability of hidden data in 2 than in 3, and
          in 3 than in 1.
        </div>,
        `Your answer will be submitted for the current stage. Make sure you work on the right dataset.`,
	 <div>
         Eventually, note that a submission is accepted only if it matches for following conditions : 1) it should contains only integer, from 1 up to the number of testing image of the current phase, separated with <b>;</b>. 2) it should contain once every testing image index. </div>,
	<div>
	A   <a target="_blank" href="http://alaska.utt.fr/answer_sample.txt">sample file is provided </a> that shows one example of valid submission for each phases.
	 </div>   
      ]
    }
    return (
        <section id="submit" class="submit-section content-section text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 margin-auto">
                <h2 class="text-center">Submit an answer</h2>
                {
                  this.props.jwtPayload
                    ?
                      <div>
                        <div class="text-justify">
                          <List {...list} />
                          <form>
                            <div class="form-group">
                              <label for="value">Your answer</label>
                              <textarea class="form-control" value={this.state.value} onChange={this.handleChange} rows="5" />
                            </div>
                          </form>
                        </div>
                        <button type="button" class="btn btn-default btn-lg" onClick={this.handleSubmit}>
                          Submit your answer
                        </button>
                        <LastSubmission submission={this.props.lastSubmission} />
                      </div>
                    :
                      <p class="green-front">
                        You must be authenticated in order to submit your steganalysis results.
                      </p>
                }
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default Submit

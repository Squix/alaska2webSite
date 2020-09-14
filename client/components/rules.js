import { h, Component } from 'preact'

import List from './list'

class Rules extends Component {
  render() {
    const list = {
      text: `The contest will take place over spring and summer 2020 lasting about 3 months in total. The rules are the following :`,
      elements: [
          <div>
            Submission can be made only throughout <a href='https://www.kaggle.com/competitions'>the Kaggle Competitions website</a>.
          </div>,
          <div>
            Total <b>cash price is $25,000</b> to be shared between the three best performers.<br/>
	    The ranking of submission is made by weighting the area under the ROC curve to <b>focus on detection accuracy for low false probability</b>.<br/>
            Those winners will be asked to provide the source code of their detectors to get their price.<br/>
            We strongly encourage the five top-scoring teams to propose a paper to <a href='https://www.wifs2020.nyu.edu/'>WIFS 2020</a> ; a $3000 travel grant will be offered by the IEEE for accepted papers.
          </div>,
          <div>
	    Until the official competition is running, no information will be provided from the present website. All detail are available on <a href='https://www.kaggle.com/competitions'>the Kaggle Competitions website</a>.<br/>
            The present website will allow users to download the datasets and submit their proposal, for longterm benchmarking, <b>once the official challenge will be over</b> (to avoid providing side informations) ; for this users must create an account.<br/>
            Those accounts will only be used for statistical purposes and communications will be made only regarding the ALASKA challenge.
          </div>,
      ]
    }

    return (
        <section id="rules" class="content-section text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 margin-auto">
                <h2 class="text-center">Rules</h2>
                <div class="text-justify">
                  <p>
                    <List {...list} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default Rules

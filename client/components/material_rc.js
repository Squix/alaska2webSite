import { h, Component } from 'preact'
import ScrollableAnchor from 'react-scrollable-anchor'
import List from './list'

class Material extends Component {
  render () {
    const list = {
      text: `The contest will take place over spring 2020 lasting about 3 months in total (more details to come). The rules are the following :`,
      elements: [
          <div>
            Submission can be made only throughout <a href='https://www.kaggle.com/competitions'>the Kaggle Competitions website</a>.
          </div>,
          <div>
            Cash prices of at least $5000 will be provided for the best three users.<br/>
            Those winners will be asked to provide the source code of their detectors to get their price.<br/>
            We strongly encourage the five top-scoring teams to propose a paper to WIFS 2020 ; a $3000 travel grant will be offered for accepted papers.
          </div>,
          <div>
            Competitors cannot submit more than one trial every four hours.<br/>
            Each submission is evaluated over a randomly selected subset of 80% of the testing set. The final
            results, when contest closes, will be adjusted with evaluation over the whole testing set.<br/>
            The ranking is made using the empirical probability of missed detection for a fixed empirical
            probability of false alarm of 5%. We will count of many images with hidden data are incorrectly
	    classified as covers when exactly 5% of cover images are incorrectly classified as containing hidden data.
          </div>,
          <div>
            Anyone can download the dataset from present website.<br/>
            The present website will also allow users to submit their proposal once the official challenge will be over (to avoid providing side informations) ; for this users must create an account.<br/>
            Those accounts will only be used for statistical purposes and communications will be made only regarding the ALASKA challenge.
          </div>,
      ]
    }

    return (
      <ScrollableAnchor id="rules">
        <section class="content-section text-center">
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
      </ScrollableAnchor>
    )
  }
}


export default Material

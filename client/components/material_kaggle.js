import { h, Component } from 'preact'
import { connect } from 'react-redux'
import reducer from '../reducer'
import * as actions from '../actions'
import ScrollableAnchor from 'react-scrollable-anchor'
import List from './list'

@connect(reducer, actions)
class Material extends Component {
  render () {
    const list = {
      text: 'The ALASKA v2 Challenge will start very soon. No dataset are available from the presents website.',
      elements: [
          <div>
            In order not to provide some additional elements that those povided on <a href='https://www.kaggle.com/competitions'>kaggle challenge website</a>, we will provide dataset on the present website only when the official compeition will be over. 
          </div>,
      ]
    }

    return (
      <ScrollableAnchor id="material">
        <section class="download-section content-section text-center">
          <div class="container">
            <div class="col-lg-10 margin-auto">
              <h2 class="text-center">Material</h2>
		    <div>
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

import { h, Component } from 'preact'
import ScrollableAnchor from 'react-scrollable-anchor'

class Header extends Component {
  render() {
    return (
      <header class="masthead">
        <ScrollableAnchor id="top">
          <div class="intro-body">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <p class="intro-text">
                  <h1 class="headline">Alaska&#35;2</h1><br/>
                  The follow-up steganalysis challenge "into the wild".
                    <br/>
                  Because it is a long and perilous walk to move steganalysis...<br/>
                  from research labs to real life conditions.
                  </p>
                  <a href="#about" class="btn btn-circle js-scroll-trigger">
                    <span class="oi oi-chevron-bottom" title="chevron-bottom"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </header>
    )
  }
}

export default Header

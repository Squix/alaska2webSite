import { h, Component } from 'preact'

import logo from '../images/utt_logo.png'
import cristal_logo from '../images/cristal_logo.png'
import lm2s_logo from '../images/lm2s_logo.png'

import ANR_logo from '../images/ANR.png'
import DGA_logo from '../images/DGA.png'
import ASTRID_logo from '../images/astrid.png'

class Footer extends Component {
  render() {
    return (
      <footer class="text-center">
        <div class="container">
          <div>
            <a target="_blank" href="https://www.utt.fr/international/study-at-utt/">
            <img src={logo} class="img-fluid" alt="utt logo" />&emsp;&emsp;&emsp;
          </a>
            <a target="_blank" href="http://lm2s.utt.fr/en/index.html">
            <img src={lm2s_logo} style="height: 100px;" class="img-fluid" alt="lm2s logo" />&emsp;&emsp;&emsp;
          </a>
            <a target="_blank" href="https://www.cristal.univ-lille.fr/?lang=en">
            <img src={cristal_logo} style="height: 100px;" class="img-fluid" alt="cristal logo" />
          </a>
          </div>
          <div>
           <p>
	    The ALASKA contest is partially funded by the ANR-DGA ASTRID call 2018 (ALASKA project)
           </p>
	    <img alt="Logo ANR" src={ANR_logo} style="height: 100pt;" />
	    <img alt="Logo DGA" src={DGA_logo} style="height: 100pt;" />
	    <img alt="Logo ASTRID" src={ASTRID_logo} style="height: 100pt;" />
          </div>
          <div class="disclaimers">
            <a target="_blank" href="http://alaska.utt.fr/disclaimers.html">disclaimers</a>
          </div>
          <div>
            <a target="_blank" href="http://www.utt.fr/en/index.html">
            <img src="https://www.easycounter.com/counter.php?alaska_counter" class="img-fluid" alt="utt logo" />
          </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

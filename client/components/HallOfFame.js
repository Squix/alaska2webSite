import { h, Component } from 'preact'
import ScrollableAnchor from 'react-scrollable-anchor'

class HallOfFame extends Component {
  render() {
    return (
      <ScrollableAnchor id="HallOfFame">
        <section class="content-section content-section--no-padding-bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 margin-auto">
                <h2 class="text-center">Hall of Fame</h2>
                <div class="text-justify">
                  <p>
                    The ALASKA&#35;1 challenge is now over. We have been working hard to propose this updated and enlarged dataset "into the wild".
                    While a second challenge will start very soon, xe reproduce below the hall of fame of the first challenge (until the second ALASKA&#35;2 challenge will be over)
                  </p>
                  <p>
                  <table class="table-hover table-dark table-striped">
                    <thead>
                      <tr>
                        <th style="text-align: center; width:28%"><div>Users / Teams</div></th>
                        <th style="text-align: center; width:18%"><div>PMD005</div><div>(from Website)</div></th>
                        <th style="text-align: center; width:18%"><div>PMD005 </div><div>(over all results)</div></th>
                        <th style="text-align: center; width:18%"><div>minPE </div><div>(Minimal Error Rate)</div></th>
                        <th style="text-align: center; width:18%"><div>FP50</div></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="center">Binghamton University</td>
                        <td align="center"> 24.37</td> 
                        <td align="center"> 25.20 </td>
                        <td align="center"> 14.48 </td>
                        <td align="center">  0.71</td>
                      </tr>
                      <tr>
                        <td align="center">Shenzhen University</td>
                        <td align="center"> 50 </td> 
                        <td align="center"> 51.60  </td>
                        <td align="center"> 25.20  </td>
                        <td align="center">  5.86</td>
                      </tr>
                      <tr>
                        <td align="center">3188960009 </td>
                        <td align="center"> 54.93 </td> 
                        <td align="center"> 53.8  </td>
                        <td align="center"> 26.33  </td>
                        <td align="center">  7.67 </td>
                      </tr>
                      <tr>
                        <td align="center">375790798  / veyron_gz </td>
                        <td align="center"> 53.35 </td> 
                        <td align="center"> 54.2  </td>
                        <td align="center"> 25.78  </td>
                        <td align="center">  7.67</td>
                      </tr>
                    </tbody>
                  </table>
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

export default HallOfFame
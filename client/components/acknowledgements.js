import { Component } from 'preact'
import List from './list'

class Acknowledgements extends Component {
  render () {
    const list0 = {
      text: `As indicated in the Material section you are free to download and use for any non-commercial purposes all datasets that are made available on this website.
        This especially includes the raw and processed images dataset as well as all conversion scripts in order to create any custom dataset that fits your need.
        We however kindly ask you to credit our (enormous work) by either referng to the alaska website or, more relevant, to simply cite one of the associated paper :`,
      elements: [
        <div>
          <a href='https://dl.acm.org/citation.cfm?id=3335726'>The ALASKA Steganalysis Challenge: A First Step Towards Steganalysis ``into the wild''.</a>,
          Published in the 7th ACM IH&MMSec conference.
        </div>,
      ]
    }

    const list1 = {
      text: `The ALASKA contest has been, in part, inspired by the BOSS competition and has been jointly and proudly organized by:`,
      elements: [
        <div>
          <a href='http://lm2s.utt.fr/en/_plugins/mypage/mypage/content/cogrannr.html'>Rémi Cogranne</a>,
          from Troyes University of Technology.
        </div>,
        <div>
          Quentin Giboulot, from Troyes University of Technology (PhD student of Rémi Cogranne and Patrick Bas, who
          did not really choose to be part of the organization but enjoyed it).
        </div>,
        <div>
          <a href='http://patrickbas.ec-lille.fr/Patrick_Bas_home_page/Home_Page.html'>Patrick Bas</a>,
          from École central de Lille.
        </div>
      ]
    }

    const list2 = {
      text: `We would like to thank all the individuals that help us organizing this contest. Those are mainly (but
        not exclusively):`,
      elements: [
        <div>
          <a href='https://www.linkedin.com/in/antoine-prudhomme/'>Antoine Prudhomme</a>,
          for creating the present website.
        </div>,
        <div>
          <a href='https://jflamant.github.io/'>Julien Flamant</a>, Jean-Baptiste Gobin, Bertrand De La Morlais, Florent Pergoud, Luc Rodrigues, 
          Pascal Royer and Emile Touron for kindly provide some of their raw images as well as Dirk Borghys for the joint work on assessment of impact of raw images development on steganalysis performance (that gives birth to ALASKA dataset and challenge).
        </div>,
        <div>
          The computer resources department of Troyes University of Technology who helped us with all their advices and suggestions.
        </div>
      ]
    }

    return (
        <section id="acknowledgements" class="ack-section content-section text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 margin-auto">
                <h2 class="text-center">Acknowledgements</h2>
                <div class="text-justify">
                  <p>
                    <List {...list0} />
                    <List {...list1} />
                    <List {...list2} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default Acknowledgements

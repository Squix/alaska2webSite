import { h, Component } from 'preact'
import ScrollableAnchor from 'react-scrollable-anchor'

class About extends Component {
  render() {
    return (
      <ScrollableAnchor id="about">
        <section class="content-section content-section--no-padding-bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 margin-auto">
                <h2 class="text-center">About Alaska&#35;2</h2>
                <div class="text-justify">
                  <p>
                    ALASKA&#35;2 is the follow-up steganalysis challenge, a year and a half after ALASKA&#35;1 and almost a decade after BOSS, with a main target of offering a large and heterogeneous dataset of photographic images to address the difficulties that come from moving "from research labs" towards "into the wild".
                  </p>
                  <p>
                    While BOSS opens the doors to steganalysis with a high number of features and dedicated
                    decision methods, ALASKA&#35;1 aims at pushing the research community along the direction of "practical" steganalysis,
                    using highly heterogeneous datasets to mimic the diversity one can find on the Internet.
                    In fact the goal of ALASKA&#35;2 is two-fold. 
                  </p>
                  <p>
                    First it is aimed at offering the community a much larger updated dataset of photographic images.<br/>
                    On the one hand, we believe that BOSS dataset does not faithfully reflect the high diversity of media that
                    can be found "in the real world". Indeed those media are rather homogeneous since it is based on a small set of 8 DLSR cameras,
                    all images were processed from raw files in exactly the same way (that did not include any image processing tools), 
                    all images were uncompressed, in grayscale color, with the same size, etc.<br/>
                    On the opposite, the ALASKA&#35;2 dataset offer a much larger dataset of 80.000 images, from more than 40 cameras 
                    (included smartphones, tablets, low-end cameras to high-end full frame DLSR) and processed in a realistic and highly heterogeneous way.
                    We believe that this would prevent designing method specifically designed for a homogeneous dataset as observed recently for BOSS,
                    and help researchers in designing way more general and robust steganographic and steganalysis methods.
                  </p>
                  <p>
                    Second, we have recently observed the used of Deep Learning techniques for steganalysis and steganography.<br/>
                    While those are very promising and start offering results that exceed everything that was known, it is questionable whether those methods are tailored a specific dataset and.
                    More importantly, Deep Learning methods require a much larger dataset for training hence the interest of very large dataset as ALASKA&#35;2 is.
                  </p>
                  <p>
                    Eventually, as for ALASKA&#35;1, <b>a challenge will be organized over between May and July 2020.</b><br/>
                    This contest will be organised throughout <a href='https://www.kaggle.com/competitions'>the Kaggle Competitions website</a><br/>
		    Since this challenge will start within a few days, we can now provide more details.<br/>
		    (i) The total <b>cash price is of $25,000</b> to be shared between the three best performer.<br/>
                    (ii) A <b>special session in <a href='https://www.wifs2020.nyu.edu/'>IEEE WIFS 2020</a></b> will be organized such that the best competitors will be given the opportuinity to present their solutions. An addition $3,000 is offered by IEEE as travel grants.<br/>
                    (iii) The competition consists of a testing set of 5,000 images and four training set of 75,000 images. Images are color and compressed using JPEG with three different quality factors (95, 90 and 75). Three different embedding algorithms are used, namely J-UNIWARD, UERD and J-MiPOD, with <b>an average</b> payload 0.4 bpnzAC: the payload is different for each and every images such that most complex images have higher payload.<br/>
		    (iv) The competition ends on July 20, 2020 (11:59 PM UTC) and the paper submission deadline is July 31, 2020.<br/>
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

export default About

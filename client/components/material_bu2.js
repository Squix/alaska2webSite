import { h, Component } from 'preact'
import { connect } from 'react-redux'
import reducer from '../reducer'
import * as actions from '../actions'

import List from './list'

@connect(reducer, actions)
class Material extends Component {
  render () {
    const list = {
      text: 'The materials provided are mostly of three kinds.',
      elements: [
        <div>First, and perhaps most important ones, we provide two datasets. The training dataset consists of a
        set of 50,000 raw images. The testing dataset consists of a subset of 5,000 (color) images
        compressed using the JPEG standard which some of those containing hidden data. The competitors
        should find which images contain hidden data, and which images don’t.</div>,

        <div>We provide a set of scripts that have been used to convert the raw images into jpeg format. This
        python script uses libraries such as <a href="http://www.numpy.org/">numpy</a> (version 1.14.5),
        &nbsp;<a href="https://pillow.readthedocs.io/en/5.1.x/">pillow</a> the Python Imaging Library (version 5.2),
	&nbsp;<a href="https://opencv.org/">opencv, the Open Source Computer Vision</a> (version 4.0),
	&nbsp; and <a href="http://scikit-image.org/"> scikit-image </a> (version 0.14).</div>,

	<div>Those scripts also heavily rely and the open-source
        raw image processing program <a href="http://rawtherapee.com/">Rawtherapee</a>
        (version 5.4), which is used for conversion from raw files to jpeg images whenver we need to carry out image processing operation with raw images.
        Those scripts are those that we have used to generate the images for both the testing and the (JPEG) training dataset.</div>,

        <div>Eventually, we also provide the code of the embedding methods that have been used. Some are
        current-art embedding methods, such as <a href="http://dde.binghamton.edu/download/stego_algorithms/">J-UNIWARD</a>, <a href="http://alaska.utt.fr/UED.m">UED</a> and <a href="http://alaska.utt.fr/EBS.m">EBS</a> (non side informed) while some are rather old and rusty
        steganographic schemes such as <a href="http://dde.binghamton.edu/download/stego_algorithms/">ns-F5</a>.</div>,

	<div>For any inquiry, especially is you face some difficulties downloading the material or using the provided scripts, feel free to contact us at <a href="mailto:alaska@utt.fr">alaska@utt.fr</a>.</div>
      ]
    }

    return (
        <section id="material" class="download-section content-section text-center">
          <div class="container">
            <div class="col-lg-10 margin-auto">
              <h2 class="text-center">Material</h2>
              {
                this.props.jwtPayload
                  ?
		    <div>
                      <div class="text-justify">
                        <p>
                          <List {...list} />
                        </p>
                      </div>
                      <div>
		        <p>
                          <a href="http://alaska.utt.fr/ALASKA_Testing_set_verified.zip" class="btn btn-default btn-lg">
                            Download Testing Set (The one used for the challenge)
                          </a>
		        </p>
                      </div>
                      <div>
		        <p>
                          <a href="http://alaska.utt.fr/download_RAW_instructions_v2.zip" class="btn btn-default btn-lg">
                            Download Training Set (RAW Images)
                          </a>
		        </p>
                      </div>
                      <div>
		        <p>
                          <a href="http://alaska.utt.fr/ALASKA_Embedding_scripts.zip" class="btn btn-default btn-lg">
                          All Embedding source codes (Matlab scripts)
                          </a>
		        </p>
                      </div>
                      <div>
		        <p>
			  A processed version of the training data set is also available; for simplicity, those 50,000 images are splited into 5 sets of 10,000 images each.
		        </p>
                      </div>
                      <div>
		        <p>
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg1_cover.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #1 (Cover)
                          </a>&emsp;&emsp;&emsp;&emsp;
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg1_stego.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #2 (Stego)
                          </a>
		        </p>
                      </div>
                      <div>
		        <p>
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg2_cover.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #2 (Cover)
                          </a>&emsp;&emsp;&emsp;&emsp;
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg2_stego.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #2 (Stego)
                          </a>
		        </p>
                      </div>
                      <div>
		        <p>
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg3_cover.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #3 (Cover)
                          </a>&emsp;&emsp;&emsp;&emsp;
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg3_stego.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #3 (Stego)
                          </a>
		        </p>
                      </div>
                      <div>
		        <p>
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg4_cover.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #4 (Cover)
                          </a>&emsp;&emsp;&emsp;&emsp;
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg4_stego.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #4 (Stego)
                        </a>
		        </p>
                      </div>
                      <div>
		        <p>
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg5_cover.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #5 (Cover)
                          </a>&emsp;&emsp;&emsp;&emsp;
                          <a href="http://alaska.utt.fr/ALASKA_training_set_jpg5_stego.zip" class="btn btn-default btn-lg">
                            JPEG Training Set #5 (Stego)
                          </a>
		        </p>
                      </div>

                      <div>
		       <p>
			  Thought not really necessary for the contest, a non-compressed version of the above (cover) sets is also provided in the following archives. The main purposes are either for other researches on spatial domain steganalysis, image forensics or any other topics; or for ALASKA contest for generating dataset with as many JPEG compression factor as one may wish.
		       </p>
                      </div>

                      <div>
		       <p>
                        <a href="http://alaska.utt.fr/ALASKA_training_set_TIFF1.zip" class="btn btn-default btn-lg">
                          TIFF Training Set #1
                        </a>&emsp;&emsp;
                        <a href="http://alaska.utt.fr/ALASKA_training_set_TIFF2.zip" class="btn btn-default btn-lg">
                          TIFF Training Set #2	
                        </a>&emsp;&emsp;
                        <a href="http://alaska.utt.fr/ALASKA_training_set_TIFF3.zip" class="btn btn-default btn-lg">
                          TIFF Training Set #3	
                        </a>&emsp;&emsp;
                        <a href="http://alaska.utt.fr/ALASKA_training_set_TIFF4.zip" class="btn btn-default btn-lg">
                          TIFF Training Set #4
                        </a>&emsp;&emsp;
                        <a href="http://alaska.utt.fr/ALASKA_training_set_TIFF5.zip" class="btn btn-default btn-lg">
                          TIFF Training Set #5
                        </a>&emsp;&emsp;
		       </p>
                      </div>

		    </div>
		    :
                    <p class="green-front">
                      You must be authenticated.
	            </p>
              }
            </div>
          </div>
        </section>
    )
  }
}

export default Material

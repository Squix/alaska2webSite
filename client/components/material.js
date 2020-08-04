import { h, Component } from "preact";
import { connect } from "preact-redux";
import reducer from "../reducer";
import * as actions from "../actions";
import ScrollableAnchor from "react-scrollable-anchor";
import List from "./list";
import { format } from "morgan";

/*
  Composant pour afficher une liste déroulante alimentée par un tableau
*/
function DynamicSelect(props) {

  return <select multiple class="form-control" id={props.name} name={props.name}>
     {props.optList.map(opt =>
        <option key={opt} value={opt}>{opt}</option>)}
  </select>
  
}

/*
  Composant pour afficher un choix entre un min et max
*/
function InputRange(props) {

  //on génère la liste d'options
  let rangeOptList = []
  let actualOpt = parseInt(props.min)
  let max = parseInt(props.max)
  console.log("propsInfo", max)
  while (actualOpt <= max) {
    rangeOptList.push(actualOpt)
    actualOpt++
  }

  return <select multiple class="form-control" id={props.name} name={props.name}>
     {rangeOptList.map(opt =>
        <option key={opt} value={opt}>{opt}</option>)}
  </select>

}

@connect(reducer, actions)
class Material extends Component {
  render() {
    const list = {
      text:
        "In order not to provide some elements regarding the ALASKA#2 challange ahead in advance, the present website only proposed   offers two main types of materials.",
      elements: [
        <div>
          First, and perhaps most important ones, we provide datasets. The main
          dataset is made of a set of 80,000 raw images ; the images are
          numbered by Digital still camera model as described in this{" "}
          <a href="http://alaska.utt.fr/ALASKAv2Base_by_DSC.txt">
            simple text file
          </a>
          .<br />
          Besides, for easy use by the community we also provide also several
          processed dataset:
          <br />
          Uncompressed color and grayscale image datasets (of size 512x512,
          256x256 for easy use in Deep learning and various sizes).
          <br />
          JPEG compressed images datasets (with quality factors: 100 , 95 , 90 ,
          85 , 80 , 75 and various QF).
        </div>,

        <div>
          Second we also provide the scripts that have been used to convert the
          raw images into jpeg format. Those python scripts use the main
          following library: <a href="http://www.numpy.org/">numpy</a> (version
          1.14.5), &nbsp;
          <a href="https://pillow.readthedocs.io/en/5.1.x/">pillow</a> the
          Python Imaging Library (version 5.2), and the open-source raw image
          processing program <a href="http://rawtherapee.com/">Rawtherapee</a>
          (version 5.7).
          <br />
          Those scripts are those that we have used to generate the various
          datasets from the raw image files.
        </div>,

        <div>
          For any question, regarding either image datasets and/or conversion
          scripts, contact us at{" "}
          <a href="mailto:alaska@utt.fr">alaska@utt.fr</a>.
        </div>,

        <div>
          While all the materials are available under the{" "}
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
            Creative Commons BY-NC-ND license
          </a>{" "}
          for use in any research works we kindly ask you to credit our
          (enormous) work by either refering to the alaska website URL or, more
          relevant, by simply citing one of the associated papers:
          <br />
          <a href="https://dl.acm.org/citation.cfm?id=3335726">
            The ALASKA Steganalysis Challenge: A First Step Towards Steganalysis
            "into the wild"
          </a>
          , Published in the 7th ACM IH&MMSec conference.
        </div>,
      ],
    };

    //Listes des valeurs possibles pour les éléments
    const formAllowedValues = {
      //ligne 1
      manufacturer:[
        'Internet License Free (WeSaturate)',
        'Apple',
        'Canon',
        'Google',
        'HTC',
        'Huawei',
        'Kodak',
        'Leica',
        'LG',
        'Nikon',
        'Panasonic',
        'Pentax',
        'Ricoh',
        'Samsung',
        'Sigma',
        'Sony',
      ],
      demosaicing_algorithm:[
        "Amaze",
        "DCB2",
        "Fast",
        "IGV",
      ],
      //ligne 2
      camera_id:[
        "Internet License Free (WeSaturate)",
        "1-AW1",
        "Alpha6000 (ILCE-6000)",
        "Alpha 7R",
        "Canon PowerShot G11",
        "D3000 (Lens #1)",
        "D3000 (Lens #2)",
        "D5200 (device #1)",
        "D5200 (device #2)",
        "D5200 (device #3)",
        "D5600 (Lens #1)",
        "D5600 (Lens #2)",
        "D610",
        "D7100",
        "D810",
        "D90",
        "DMC-FZ28",
        "DMC-GM1",
        "DMC-TZ60",
        "EasyShare Z990",
        "EOS 100D (device #1)",
        "EOS 100D (device #2)",
        "EOS 20D",
        "EOS 500D",
        "EOS 60D",
        "EOS 700D",
        "G5 (Sensor #1)",
        "G5 (Sensor #2)",
        "G7 fit (LM-Q850)",
        "Galaxy S8 (SM-G950F)",
        "Galaxy S9+ (SM-G965F)",
        "GR DIGITAL III",
        "Honor 8 (FRD-L09)",
        "iPad Pro 12.9 (1st Generation)",
        "iPad Pro 12.9 (2nd Generation)",
        "*ist DS",  
        "K10D (DNG Image File)",
        "K10D (PEF Image File)",
        "K-50 (device #1)",
        "K-50 (device #2)",
        "M9",
        "M Monochrom",
        "One A9",
        "One M9",
        "P20 Lite (ANE-LX1)",
        "Pixel XL",
        "SD10",
        "SD1 Merrill",
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
                <div>
                  <p>
                    <a
                      href="http://alaska.utt.fr/ALASKA_v2_RAWs_scripts.zip"
                      class="btn btn-default btn-lg"
                    >
                      Raw images dataset (including conversion scripts)
                    </a>
                  </p>
                </div>

                <div>
                  <p>
                    <b>
                      <u>Uncompressed Grayscale</u>
                    </b>{" "}
                    images datasets:
                    <br />
                    <a
                      href="http://alaska.utt.fr/ALASKA_v2_TIFF_512_GrayScale.sh"
                      class="btn btn-default btn-lg"
                    >
                      Size 512x512, PGM
                    </a>
                    &emsp;&emsp;
                    <a
                      href="http://alaska.utt.fr/ALASKA_v2_TIFF_256_GrayScale.sh"
                      class="btn btn-default btn-lg"
                    >
                      Size 256x256, PGM
                    </a>
                    &emsp;&emsp;
                    <a
                      href="http://alaska.utt.fr/ALASKA_v2_TIFF_VariousSize_GrayScale.sh"
                      class="btn btn-default btn-lg"
                    >
                      Various size, PGM
                    </a>
                  </p>
                </div>

                <p>
                  <b>
                    <u>Uncompressed COLOR</u>
                  </b>{" "}
                  images datasets:
                  <br />
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_TIFF_512_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    Size 512x512, PPM
                  </a>
                  &emsp;&emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_TIFF_256_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    Size 256x256, PPM
                  </a>
                  &emsp;&emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_TIFF_VariousSize_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    Various size, PPM
                  </a>
                </p>

                <p>
                  <b>
                    <u>JPEG Compressed, Grayscale, Size 512x512</u>
                  </b>{" "}
                  images datasets:
                  <br />
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF100_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF100
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF95_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF95
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF90_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF90
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF85_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF85
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF80_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF80
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF75_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF75
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QFvarious_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    Various QF
                  </a>
                </p>

                <p>
                  <b>
                    <u>JPEG Compressed, Grayscale, Size 256x256</u>
                  </b>{" "}
                  images datasets:
                  <br />
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF100_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF100
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF95_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF95
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF90_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF90
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF85_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF85
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF80_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF80
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF75_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF75
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QFvarious_GrayScale.sh"
                    class="btn btn-default btn-lg"
                  >
                    Various QF
                  </a>
                </p>

                <p>
                  <b>
                    <u>JPEG Compressed, Color, Size 512x512</u>
                  </b>{" "}
                  images datasets:
                  <br />
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF100_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF100
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF95_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF95
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF90_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF90
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF85_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF85
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF80_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF80
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QF75_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF75
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_512_QFvarious_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    Various QF
                  </a>
                </p>

                <p>
                  <b>
                    <u>JPEG Compressed, Color, Size 256x256</u>
                  </b>{" "}
                  images datasets:
                  <br />
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF100_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF100
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF95_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF95
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF90_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF90
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF85_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF85
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF80_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF80
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QF75_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    QF75
                  </a>
                  &emsp;
                  <a
                    href="http://alaska.utt.fr/ALASKA_v2_JPG_256_QFvarious_COLOR.sh"
                    class="btn btn-default btn-lg"
                  >
                    Various QF
                  </a>
                </p>
              </div>
            </div>
  {/* Partie Interface de recherche */}
             <h3>iMAGES DATASET</h3>
              <form>
                {/* Titres de section */}
                <div class="row">
                  {/* Partie acquisition */}
                  <div class="col">
                    <h4>Image acquisition</h4>
                  </div>
                  {/* Partie traitement */}
                  <div class="col">
                    <h4>Image processing</h4>
                  </div>
                </div>
                {/* Cases de sélection */}
                <div className="form-row">
                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" name="useAcquisitionCriteria" id="useAcquisitionCriteria"/>
                        <label for="useAcquisitionCriteria" class="form-check-label">
                          Chercher selon les critères d'acquisition
                        </label>
                      </div>
                  </div>
                
                  <div className="col">
                    {/* Partie traitement */}
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" name="useProcessingCriteria" id="useProcessingCriteria"/>
                        <label for="useProcessingCriteria" class="form-check-label">
                          Chercher selon les critères de traitement
                        </label>
                      </div>
                  </div>
                </div>
                {/* Ligne 1 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="manufacturer">
                          Manufacturer
                        </label>
                        <DynamicSelect name="manufacturer" optList={formAllowedValues.manufacturer}/>
                      </div>
                  </div>
                
                  <div class="col">
                      {/* Partie traitement */}
                      <div class="form-group">
                        <label for="demosaicing_algorithm">
                          Demosaicing algorithm
                        </label>
                        <DynamicSelect name="demosaicing_algorithm" optList={formAllowedValues.demosaicing_algorithm}/>
                      </div>
                  </div>


              </div>

                {/* Ligne 2 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="camera_id">
                          Camera ID
                        </label>
                        <DynamicSelect name="camera_id" optList={formAllowedValues.camera_id}/>
                      </div>
                  </div>

                  <div class="col">
                      {/* Partie traitement */}
                      <div className="form-group">
                        <label htmlFor="">USM / DEN order</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="usm|den_order" id="usm_after_den_choice" value="0" checked/>
                        <label for="usm_after_den_choice" class="form-check-label">
                          USM after DEN
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="usm|den_order" id="usm_before_den_choice" value="1" />
                        <label for="usm_after_den_choice" class="form-check-label">
                          USM before DEN
                        </label>
                      </div>
                  </div>


                  </div>
                  
                {/* Ligne 3 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="year">
                          Year
                        </label>
                        <InputRange name="year" max="2018" min="2003" />
                      </div>
                  </div>
                
                  <div class="col">
                      {/* Partie traitement */}
                      <div class="form-group">
                        <label for="demosaicing_algorithm">
                          Demosaicing algorithm
                        </label>
                        <DynamicSelect name="demosaicing_algorithm" optList={formAllowedValues.demosaicing_algorithm}/>
                      </div>
                  </div>


              </div>
              </form>
             
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default Material;

import { h, Component, Fragment } from "preact";
import { connect } from "react-redux";
import reducer from "../reducer";
import * as actions from "../actions";
import ScrollableAnchor from "react-scrollable-anchor";
import List from "./list";
import { format } from "morgan";

//import des composants d'UI
import Select from "react-select";

/*
  Composant pour afficher une liste déroulante alimentée par un tableau
*/
class DynamicSelect extends Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  toUsableSelectValue(rawOptList) {
    //console.log(rawOptList)
    let options = []
    for (const opt of rawOptList) {
      options.push({
        value:opt,
        label:opt
      })
    }
    return options
  }

  //fonction qui s'active à la sélection, afin de renvoyer les nouvelles valeurs sélectionnées
  handleChange(selectedOptions) {
    //console.log("DynamicSelect value", selectedOptions)
    //on renvoie les nouvelles options ainsi que le nom du control
    this.props.onInput(selectedOptions, this.props.name)
  }

  render() {
    return(
        <Select 
          onChange={this.handleChange} 
          value={this.props.value} 
          isMulti 
          options={this.toUsableSelectValue(this.props.optList)} />
     
      /* <select onChange={this.handleChange} multiple={true} class="form-control" id={this.props.name} name={this.props.name}>
        {this.props.optList.map(opt =>
            <option key={opt} value={opt}>{opt}</option>)}
      </select> */
    )
    
  }
  
}

/*
  Composant pour afficher un choix entre un min et max
*/
function InputRange(props) {

  if(!props.disabled) {
      //on génère la liste d'options
      let rangeOptList = []
      let actualOpt = parseFloat(props.min)
      let max = parseFloat(props.max)
      //console.log("propsInfo", max)
      while (actualOpt <= max) {
        rangeOptList.push(actualOpt)
        actualOpt = actualOpt + parseFloat(props.step)
      }

      return <select multiple class="form-control" id={props.name} name={props.name}>
      {rangeOptList.map(opt =>
         <option key={opt} value={opt}>{opt}</option>)}
      </select>

  } else {
      return <select disabled multiple class="form-control" id={props.name} name={props.name}>
      
        <option>Disabled</option>
      </select>
  }
  

 

}
InputRange.defaultProps = {step:1}

@connect(reducer, actions)
class Material extends Component {

  //Listes des valeurs possibles pour les éléments
  formAllowedValues = {
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
    ],
    //ligne 3
    sharpenning:[
      "OFF",
      "ON (low)",
      "ON (modera)",
      "ON (high)"
    ],
    //ligne 4
    camera_type:[
      "Internet License Free (WeSaturate)",
      "Bridge",
      "Compact",
      "DSLR",
      "Mirrorless",
      "Smartphone/Tablet",
    ],
    denoising:[
      "OFF",
      "ON (low)",
      "ON (modera)",
      "ON (high)"
    ],
    //ligne 5
   
    resizing_action:[
      "CROP ONLY (no resize)",
      "RESIZE ONLY (no crop)",
      "Crop And Resize",
    ],
    resizing_type:[
      "BICUBIC",
      "BILINEAR",
      "LANCZOS",
      "NEAREST",
      "NONE (CROP ONLY)",
    ],
    resizing_last_number:[
      "upsampling > 1 ",
      "downsampling low  0.5 <  < 1",
      "downsampling moderate  0.25 <  < 0.5",
      "downsampling strong  0.25",
    ],
  
    //ligne 6
    image_size:[
      "1024x1024",
      "1024x512",
      "1024x640",
      "1024x720",
      "512x1024",
      "512x512",
      "512x640",
      "512x720",
      "640x1024",
      "640x512",
      "640x640",
      "640x720",
      "720x1024",
      "720x512",
      "720x640",
      "720x720",
    ],
    //ligne 7
    sensor_size:[
      '1" (13.2x8.8)',
      '1/1.7"',
      '1/2.3"',
      '1/2.33"',
      '1/2.4"',
      '1/2.55"',
      '1/2.6"',
      '1/2.9"',
      '1/3"',
      '1/3.1"',
      '1/3.6"',
      '1.55" (20.7x13.8)',
      '4/3" (17.3x13.0)',
      'APS-C',
      'Full Frame',
    ],
    //ligne 17
    sensor_model:[
      "Foveon X3",
      "Kodak KAF-18500",
      "Samsung ISOCELL 2L2 (S5K2L2) {OR IMX333}",
      "Samsung ISOCELL Plus 2L3 (S5K2L3) {OR IMX345}",
      "Sony Exmor IMX214RS",
      "Sony Exmor IMX378 RS",
      "Sony IMX038 Exmor",
      "Sony IMX071 Exmor",
      "Sony IMX094 Exmor",
      "Sony IMX128 Exmor",
      "Sony IMX193 Exmor",
      "Sony IMX210 Exmor",
      "Sony IMX234 Exmor RS",
      "Sony IMX268 Exmor RS",
      "Sony IMX286 Exmor RS",
      "Sony IMX315 Exmor RS",
      "Sony IMX351 Exmor RS",
      "Sony IMX493 Exmor",
      "Toshiba BSI T4KA7",
      "Toshiba TOS-5105",
    ]
  }

  //fonction utilitaire pour convertir les valeurs en un objet utilisable par react-select
  toUsableSelectValue(rawOptList) {
    //console.log(rawOptList)
    let options = []
    for (const opt of rawOptList) {
      options.push({
        value:opt,
        label:opt
      })
    }
    return options
  }

  //fonction initialisant le state de tous les éléments du formulaire
  initState() {
    this.state = {}
    for (const elem_key in this.formAllowedValues) {
      if (this.formAllowedValues.hasOwnProperty(elem_key)) {
        
        this.state[elem_key] = this.toUsableSelectValue(this.formAllowedValues[elem_key])
      }
    }
  }

  constructor() {
    super()
    this.initState()
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  //fonction pour gérer l'envoi du formulaire
  onChoiceSubmit() {

  }

  //fonction qui gère la sélection de chaque élément
  handleInputChange(newValue, name) {
    //console.log("MaterialComponent value", newValue)
    this.setState({ [name]: newValue })
  }

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

    return (
      <Fragment>
        
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
              <form onSubmit={this.onChoiceSubmit}>
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
                        <DynamicSelect 
                            optList={this.formAllowedValues.manufacturer} 
                            onInput={this.handleInputChange} 
                            name="manufacturer" 
                            value={this.state.manufacturer}/>
                      </div>
                  </div>
                
                  <div class="col">
                      {/* Partie traitement */}
                      <div class="form-group">
                        <label for="demosaicing_algorithm">
                          Demosaicing algorithm
                        </label>
                        <DynamicSelect 
                            optList={this.formAllowedValues.demosaicing_algorithm} 
                            onInput={this.handleInputChange} 
                            name="demosaicing_algorithm" 
                            value={this.state.demosaicing_algorithm}/>                      </div>
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
                        <DynamicSelect 
                            optList={this.formAllowedValues.camera_id} 
                            onInput={this.handleInputChange} 
                            name="camera_id" 
                            value={this.state.camera_id}/>
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
                        <label for="sharpenning">
                           Sharpenning
                        </label>
                        <DynamicSelect 
                            optList={this.formAllowedValues.sharpenning} 
                            onInput={this.handleInputChange} 
                            name="sharpenning" 
                            value={this.state.sharpenning}/>
                      </div>
                  </div>

                </div>

                {/* Ligne 4 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="camera_type">
                          Camera Type
                        </label>
                        <DynamicSelect 
                            optList={this.formAllowedValues.camera_type} 
                            onInput={this.handleInputChange} 
                            name="camera_type" 
                            value={this.state.camera_type}/>
                      </div>
                  </div>
                
                  <div class="col">
                      {/* Partie traitement */}
                      <div class="form-group">
                        <label for="denoising">
                          Denoising 
                        </label>
                        <DynamicSelect 
                            optList={this.formAllowedValues.denoising} 
                            onInput={this.handleInputChange} 
                            name="denoising" 
                            value={this.state.denoising}/>
                      </div>
                  </div>

                </div>

                {/* Ligne 5 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="fnumber">
                          Fnumber
                        </label>
                        <InputRange min="0" max="40" name="fnumber"/>
                      </div>
                  </div>
                
                  <div class="col">
                      {/* Partie traitement */}
                      <div class="form-group">
                        <label for="resizing">
                          Resizing 
                        </label>
                        <div className="input-group" id="resizing">
                            <DynamicSelect 
                              optList={this.formAllowedValues.resizing_action} 
                              onInput={this.handleInputChange} 
                              name="resizing_action" 
                              value={this.state.resizing_action}/>
                            <DynamicSelect 
                              optList={this.formAllowedValues.resizing_type} 
                              onInput={this.handleInputChange} 
                              name="resizing_type" 
                              value={this.state.resizing_type}/>
                            <DynamicSelect 
                              optList={this.formAllowedValues.resizing_last_number} 
                              onInput={this.handleInputChange} 
                              name="resizing_last_number" 
                              value={this.state.resizing_last_number}/>
                        </div>
                      </div>
                  </div>

                </div>
                {/* Ligne 6 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="iso">
                          ISO
                        </label>
                        <InputRange disabled min="16" max="51200" name="iso"/>
                      </div>
                  </div>
                
                  <div class="col">
                      {/* Partie traitement */}
                      <div class="form-group">
                        <label for="image_size">
                          ImageSize  
                        </label>
                        <DynamicSelect 
                              optList={this.formAllowedValues.image_size} 
                              onInput={this.handleInputChange} 
                              name="image_size" 
                              value={this.state.image_size}/>
                      </div>
                  </div>

                </div>
                {/* Ligne 7 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="exposure">
                          Exposure
                        </label>
                        <InputRange min="0" max="30" name="exposure"/>
                      </div>
                  </div>
                
                  <div class="col">
                      {/* Partie traitement */}
                      <div class="form-group">
                        <label for="jpeg_compression">
                          JPEG Compression  
                        </label>
                        <InputRange min="60" max="100" name="jpeg_compression"/>                      
                      </div>
                  </div>

                </div>
                {/* Ligne 8 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="mega_pixels">
                          MegaPixels
                        </label>
                        <InputRange min="0" max="60" name="mega_pixels"/>
                      </div>
                  </div>
                
                  <div class="col">
                     
                  </div>

                </div>
                {/* Ligne 9 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="raw_size">
                          RAWsize 
                        </label>
                        <InputRange disabled min="0" max="12000" name="raw_size"/>
                      </div>
                  </div>
                
                  <div class="col">
                     
                  </div>

                </div>
                 {/* Ligne 10 */}
                 <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="focal_length">
                         Focal length 
                        </label>
                        <InputRange min="0" max="400" name="focal_length"/>
                      </div>
                  </div>
                
                  <div class="col">
                     
                  </div>

                </div>
                {/* Ligne 11 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="focal_length_eq35">
                        Focal length Eq. 35Mm
                        </label>
                        <InputRange min="0" max="600" name="focal_length_eq35"/>
                      </div>
                  </div>

                  <div class="col">
                    
                  </div>

                </div>
                {/* Ligne 12 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="crop_factor">
                          Crop Factor
                        </label>
                        <InputRange min="1" max="9" name="crop_factor"/>
                      </div>
                  </div>

                  <div class="col">
                    
                  </div>

                </div>
                {/* Ligne 13 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="sensor_size">
                          Sensor Size
                        </label>
                        <DynamicSelect 
                              optList={this.formAllowedValues.sensor_size} 
                              onInput={this.handleInputChange} 
                              name="sensor_size" 
                              value={this.state.sensor_size}/>
                      </div>
                  </div>

                  <div class="col">
                    
                  </div>

                </div>
                {/* Ligne 14 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="sensor_size_mm">
                          Sensor Size (mm)
                        </label>
                        <InputRange name="sensor_size_mm" step="0.1" min="5" max="43.2"/>
                      </div>
                  </div>

                  <div class="col"> </div>

                </div>
                {/* Ligne 15 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="pixel_pitch">
                          Pixel Pitch (µm)
                        </label>
                        <InputRange name="pixel_pitch" min="1" max="10"/>
                      </div>
                  </div>

                  <div class="col"> </div>

                </div>
                {/* Ligne 16 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="pixel_density">
                          Pixel Density (MP/cm2)
                        </label>
                        <InputRange name="pixel_density" min="1" max="100"/>
                      </div>
                  </div>

                  <div class="col"> </div>

                </div>
                {/* Ligne 17 */}
                <div class="form-row">

                  <div class="col">
                      {/* Partie acquisition */}
                      <div class="form-group">
                        <label for="sensor_model">
                          Sensor Model
                        </label>
                        <DynamicSelect 
                              optList={this.formAllowedValues.sensor_model} 
                              onInput={this.handleInputChange} 
                              name="sensor_model" 
                              value={this.state.sensor_model}/>
                      </div>
                  </div>

                  <div class="col"> </div>

                </div>
              </form>
             
          </div>
        </section>
  
      </Fragment>
    );
  }
}

export default Material;

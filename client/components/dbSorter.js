/*
    Composant présentant une interface permettant de faire le tri dans la db
*/

import { h, Component, Fragment } from "preact";
import { connect } from "react-redux";
import reducer from "../reducer";
import * as actions from "../actions";

//import des composants d'UI
import Select from "react-select";
import {Range, getTrackBackground} from 'react-range'

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
class InputRange extends Component {

  constructor() {
    super()
    this.handleRangeChange = this.handleRangeChange.bind(this)
  }

  handleRangeChange(val) {
    this.props.onDrag(val, this.props.name)
  }

  render() {
    return(
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop:"30px"
      }}
    >
      <Range
        values={this.props.values}
        step={this.props.step || 1}
        min={this.props.min}
        max={this.props.max}
        onChange={this.handleRangeChange}
     
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#fff'
            }}
          >
            {children}
          </div>
          
        )}
        renderThumb={({ props }) => (
         
          <div
            {...props}
            style={{
              ...props.style,
              height: '30px',
              width: '10px',
              backgroundColor: '#2070de'
            }}
          />
        )}
      />
      <output style={{ marginTop: '30px' }} id="output">
          {this.props.values[0]}
        </output>
    </div>
    )
  }

  /* if(!props.disabled) {
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
  } */
  

 

}

@connect(reducer, actions)
class DbSorter extends Component {

    render() {
        return (
            <Fragment>
              
              <section class="content-section text-center">
                <div class="container">
                  
        {/* Partie Interface de recherche */}
                   <h2>iMAGES DATASET</h2>
                    <form onSubmit={this.onChoiceSubmit}>
                      {/* Titres de section */}
                      <div class="row">
                        {/* Partie acquisition */}
                        <div class="col">
                          <h3>Image acquisition</h3>
                        </div>
                        {/* Partie traitement */}
                        <div class="col">
                          <h3>Image processing</h3>
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
                                  optList={this.formSelectAllowedValues.manufacturer} 
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
                                  optList={this.formSelectAllowedValues.demosaicing_algorithm} 
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
                                  optList={this.formSelectAllowedValues.camera_id} 
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
                              <InputRange 
                                values={this.state.year}
                                onDrag={this.handleInputChange} 
                                name="year" 
                                max={2018} 
                                min={2003} />
                            </div>
                        </div>
                      
                        <div class="col">
                            {/* Partie traitement */}
                            <div class="form-group">
                              <label for="sharpenning">
                                 Sharpenning
                              </label>
                              <DynamicSelect 
                                  optList={this.formSelectAllowedValues.sharpenning} 
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
                                  optList={this.formSelectAllowedValues.camera_type} 
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
                                  optList={this.formSelectAllowedValues.denoising} 
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
                              <InputRange values={this.state.fnumber} min={0} max={40} name="fnumber"/>
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
                                    optList={this.formSelectAllowedValues.resizing_action} 
                                    onInput={this.handleInputChange} 
                                    name="resizing_action" 
                                    value={this.state.resizing_action}/>
                                  <DynamicSelect 
                                    optList={this.formSelectAllowedValues.resizing_type} 
                                    onInput={this.handleInputChange} 
                                    name="resizing_type" 
                                    value={this.state.resizing_type}/>
                                  <DynamicSelect 
                                    optList={this.formSelectAllowedValues.resizing_last_number} 
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
                              <InputRange values={this.state.iso} min={16} max={51200} name="iso"/>
                            </div>
                        </div>
                      
                        <div class="col">
                            {/* Partie traitement */}
                            <div class="form-group">
                              <label for="image_size">
                                ImageSize  
                              </label>
                              <DynamicSelect 
                                    optList={this.formSelectAllowedValues.image_size} 
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
                              <InputRange values={this.state.exposure} min={0} max={30} name="exposure"/>
                            </div>
                        </div>
                      
                        <div class="col">
                            {/* Partie traitement */}
                            <div class="form-group">
                              <label for="jpeg_compression">
                                JPEG Compression  
                              </label>
                              <InputRange values={this.state.jpeg_compression} min={60} max={100} name="jpeg_compression"/>                      
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
                              <InputRange values={this.state.mega_pixels} min={0} max={60} name="mega_pixels"/>
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
                              <InputRange values={this.state.raw_size} min={0} max={12000} name="raw_size"/>
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
                              <InputRange values={this.state.focal_length} min={0} max={400} name="focal_length"/>
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
                              <InputRange values={this.state.focal_length_eq35} min={0} max={600} name="focal_length_eq35"/>
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
                              <InputRange values={this.state.crop_factor} min={1} max={9} name="crop_factor"/>
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
                                    optList={this.formSelectAllowedValues.sensor_size} 
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
                              <InputRange values={this.state.sensor_size_mm} name="sensor_size_mm" step={0.1} min={5} max={43.2}/>
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
                              <InputRange values={this.state.pixel_pitch} name="pixel_pitch" min={1} max={10}/>
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
                              <InputRange values={this.state.pixel_density} name="pixel_density" min={1} max={100}/>
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
                                    optList={this.formSelectAllowedValues.sensor_model} 
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

    //Liste des valeurs possibles pour les éléments select
  formSelectAllowedValues = {
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

  //Liste des valeurs initiales pour les éléments range
  formRangeAllowedValues = {
    year:[2005, 2009],
    fnumber:[5,20],
    iso:[290,512],
    exposure:[10,20],
    jpeg_compression:[70,80],
    mega_pixels:[10,30],
    raw_size:[200,3000],
    focal_length:[100,300],
    focal_length_eq35:[100,300],
    crop_factor:[5,7],
    sensor_size_mm:[8,40.1],
    pixel_pitch:[5,9],
    pixel_density:[50,80],

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
    //init des select
    for (const elem_key in this.formSelectAllowedValues) {
      if (this.formSelectAllowedValues.hasOwnProperty(elem_key)) {
        
        this.state[elem_key] = this.toUsableSelectValue(this.formSelectAllowedValues[elem_key])
      }
    }
    //init des sliders
    for (const elem_key in this.formRangeAllowedValues) {
      if (this.formRangeAllowedValues.hasOwnProperty(elem_key)) {
        
        this.state[elem_key] = this.formRangeAllowedValues[elem_key]
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
}

export default DbSorter;
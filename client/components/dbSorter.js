/*
    Composant présentant une interface permettant de faire le tri dans la db
*/

import { Component, Fragment, toChildArray, cloneElement } from "preact";
import { connect } from "react-redux";
import reducer from "../reducer";
import * as actions from "../actions";

//import des composants d'UI
import Select from "react-select";
import "rheostat/initialize";
import Rheostat from "rheostat";

/*
  Composant pour afficher une liste déroulante alimentée par un tableau
*/
class DynamicSelect extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  toUsableSelectValue(rawOptList) {
    //console.log(rawOptList)
    let options = [];
    for (const opt of rawOptList) {
      options.push({
        value: opt,
        label: opt,
      });
    }
    return options;
  }

  //fonction qui s'active à la sélection, afin de renvoyer les nouvelles valeurs sélectionnées
  handleChange(selectedOptions) {
    //console.log("DynamicSelect value", selectedOptions)
    //on renvoie les nouvelles options ainsi que le nom du control
    this.props.onInput(selectedOptions, this.props.name);
  }

  render() {
    return (
      <Fragment>
        <br />
        <br />
        <Select
          onChange={this.handleChange}
          value={this.props.value}
          isMulti
          isDisabled={this.props.disabled}
          options={this.toUsableSelectValue(this.props.optList)}
        />
      </Fragment>

      /* <select onChange={this.handleChange} multiple={true} class="form-control" id={this.props.name} name={this.props.name}>
        {this.props.optList.map(opt =>
            <option key={opt} value={opt}>{opt}</option>)}
      </select> */
    );
  }
}

/*
  Composant pour afficher un choix entre un min et max
*/
class InputRange extends Component {
  constructor() {
    super();
    this.handleRangeChange = this.handleRangeChange.bind(this);
  }

  handleRangeChange(val) {
    this.props.onDrag(val, this.props.name);
  }

  render() {
    return (
      <Fragment>
        <br />
        <br />
        <Rheostat
          min={this.props.min}
          max={this.props.max}
          values={this.props.values}
          snap={true}
          onValuesUpdated={this.handleRangeChange}
          disabled={this.props.disabled}
        />
        <br />
        <p>
          {this.props.values[0]} - {this.props.values[1]}
        </p>
      </Fragment>
    );
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

/*
  Composant pour gérer individuellement chaque élément du formulaire
*/
class SortingCriteria extends Component {
  constructor() {
    super();
    this.state = { show: false };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const editedChildren = toChildArray(this.props.children).map((child) => {
      return cloneElement(child, {
        disabled:
          typeof this.props.disabled !== "undefined"
            ? this.props.disabled
            : false,
      });
    });
    return (
      <Fragment>
        <div class="form-group">
          <label
            class={this.props.disabled ? "text-muted" : null}
            title="Développer/Cacher"
            for={this.props.name}
            onClick={this.toggleState}
          >
            <span
              class={
                "oi " +
                (this.state.show ? "oi-chevron-bottom" : "oi-chevron-right")
              }
              aria-hidden="true"
            ></span>{" "}
            {this.props.label}
          </label>
          {this.state.show && editedChildren}
        </div>
      </Fragment>
    );
  }
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
            <p>
              To filter the dataset, edit the values of each wanted criteria.{" "}
              <br />
              You can toggle visibility of each criteria by clicking its name.
            </p>
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

              <div className="form-row">
                <div className="col"></div>
                <div className="col">
                  <div class="form-check">
                    <input
                      onClick={() => this.handleCheckboxChange("only_raw")}
                      class="form-check-input"
                      type="checkbox"
                      name="only_raw"
                      id="only_raw"
                      checked={this.state["only_raw"] ? true : false}
                    />
                    <label for="only_raw" class="form-check-label">
                      Je veux les images RAW
                    </label>
                  </div>
                </div>
              </div>

              {/* Ligne 1 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="manufacturer" label="Manufacturer">
                    <DynamicSelect
                      optList={this.formSelectAllowedValues.manufacturer}
                      onInput={this.handleInputChange}
                      name="manufacturer"
                      value={this.state.manufacturer}
                    />
                  </SortingCriteria>
                </div>

                <div class="col">
                  {/* Partie traitement */}
                  <SortingCriteria
                    name="demosaicing_algorithm"
                    label="Demosaicing algorithm"
                    disabled={this.state.only_raw}
                  >
                    <DynamicSelect
                      optList={
                        this.formSelectAllowedValues.demosaicing_algorithm
                      }
                      onInput={this.handleInputChange}
                      name="demosaicing_algorithm"
                      value={this.state.demosaicing_algorithm}
                    />
                  </SortingCriteria>
                </div>
              </div>

              {/* Ligne 2 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="camera_id" label="Camera ID">
                    <DynamicSelect
                      optList={this.formSelectAllowedValues.camera_id}
                      onInput={this.handleInputChange}
                      name="camera_id"
                      value={this.state.camera_id}
                    />
                  </SortingCriteria>
                </div>

                <div class="col">
                  {/* Partie traitement */}
                  <SortingCriteria
                    name=""
                    label="USM / DEN order"
                    disabled={this.state.only_raw}
                  >
                    <div class="form-check">
                      <input
                        disabled={this.state.only_raw}
                        onClick={() =>
                          this.handleCheckboxChange("usm_off", ["usm_on"])
                        }
                        class="form-check-input"
                        type="checkbox"
                        name="usm_off"
                        id="usm_off"
                        checked={this.state["usm_off"] ? true : false}
                      />
                      <label for="usm_off" class="form-check-label">
                        USM after DEN
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        disabled={this.state.only_raw}
                        onClick={() =>
                          this.handleCheckboxChange("usm_on", ["usm_off"])
                        }
                        class="form-check-input"
                        type="checkbox"
                        name="usm_on"
                        id="usm_on"
                        checked={this.state["usm_on"] ? true : false}
                      />
                      <label for="usm_on" class="form-check-label">
                        USM before DEN
                      </label>
                    </div>
                  </SortingCriteria>
                </div>
              </div>

              {/* Ligne 3 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="year" label="Year">
                    <InputRange
                      name="year"
                      onDrag={this.handleInputChange}
                      values={this.state.year}
                      max={2018}
                      min={2003}
                    />
                  </SortingCriteria>
                </div>

                <div class="col">
                  {/* Partie traitement */}
                  <SortingCriteria
                    name="sharpenning"
                    label="Sharpenning"
                    disabled={this.state.only_raw}
                  >
                    <DynamicSelect
                      optList={this.formSelectAllowedValues.sharpenning}
                      onInput={this.handleInputChange}
                      name="sharpenning"
                      value={this.state.sharpenning}
                    />
                  </SortingCriteria>
                </div>
              </div>

              {/* Ligne 4 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="camera_type" label="Camera Type">
                    <DynamicSelect
                      optList={this.formSelectAllowedValues.camera_type}
                      onInput={this.handleInputChange}
                      name="camera_type"
                      value={this.state.camera_type}
                    />
                  </SortingCriteria>
                </div>

                <div class="col">
                  {/* Partie traitement */}
                  <SortingCriteria
                    name="denoising"
                    label="Denoising"
                    disabled={this.state.only_raw}
                  >
                    <DynamicSelect
                      optList={this.formSelectAllowedValues.denoising}
                      onInput={this.handleInputChange}
                      name="denoising"
                      value={this.state.denoising}
                    />
                  </SortingCriteria>
                </div>
              </div>

              {/* Ligne 5 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="fnumber" label="Fnumber">
                    <InputRange
                      values={this.state.fnumber}
                      min={0}
                      max={40}
                      onDrag={this.handleInputChange}
                      name="fnumber"
                    />
                  </SortingCriteria>
                </div>

                <div class="col">
                  {/* Partie traitement */}
                  <SortingCriteria
                    name="resizing"
                    label="Resizing"
                    disabled={this.state.only_raw}
                  >
                    <div className="input-group" id="resizing">
                      <DynamicSelect
                        optList={this.formSelectAllowedValues.resizing_action}
                        onInput={this.handleInputChange}
                        name="resizing_action"
                        value={this.state.resizing_action}
                        disabled={this.state.only_raw}
                      />
                      <DynamicSelect
                        optList={this.formSelectAllowedValues.resizing_type}
                        onInput={this.handleInputChange}
                        name="resizing_type"
                        value={this.state.resizing_type}
                        disabled={this.state.only_raw}
                      />
                      <DynamicSelect
                        optList={
                          this.formSelectAllowedValues.resizing_last_number
                        }
                        onInput={this.handleInputChange}
                        name="resizing_last_number"
                        value={this.state.resizing_last_number}
                        disabled={this.state.only_raw}
                      />
                    </div>
                  </SortingCriteria>
                </div>
              </div>
              {/* Ligne 6 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="iso" label="ISO">
                    <InputRange
                      values={this.state.iso}
                      onDrag={this.handleInputChange}
                      min={16}
                      max={51200}
                      name="iso"
                    />
                  </SortingCriteria>
                </div>

                <div class="col">
                  {/* Partie traitement */}
                  <SortingCriteria
                    name="image_size"
                    label="ImageSize"
                    disabled={this.state.only_raw}
                  >
                    <DynamicSelect
                      optList={this.formSelectAllowedValues.image_size}
                      onInput={this.handleInputChange}
                      name="image_size"
                      value={this.state.image_size}
                    />
                  </SortingCriteria>
                </div>
              </div>

              <div className="form-row">
                <div className="col"></div>
                <div className="col">
                  <div class="form-check">
                    <input
                      onClick={() => this.handleCheckboxChange("compression")}
                      class="form-check-input"
                      type="checkbox"
                      name="compression"
                      id="compression"
                      checked={this.state["compression"] ? true : false}
                    />
                    <label for="compression" class="form-check-label">
                      Compression
                    </label>
                  </div>
                </div>
              </div>

              {/* Ligne 7 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="exposure" label="Exposure">
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.exposure}
                      min={0}
                      max={30}
                      name="exposure"
                    />
                  </SortingCriteria>
                </div>

                <div class="col">
                  {/* Partie traitement */}
                  <SortingCriteria
                    name="jpeg_compression"
                    label="JPEG Compression"
                    disabled={!this.state.compression}
                  >
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.jpeg_compression}
                      min={60}
                      max={100}
                      name="jpeg_compression"
                    />
                  </SortingCriteria>
                </div>
              </div>
              {/* Ligne 8 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="mega_pixels" label="MegaPixels">
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.mega_pixels}
                      min={0}
                      max={60}
                      name="mega_pixels"
                    />
                  </SortingCriteria>
                </div>

                <div class="col"></div>
              </div>
              {/* Ligne 9 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="raw_size" label="RAWsize">
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.raw_size}
                      min={0}
                      max={12000}
                      name="raw_size"
                    />
                  </SortingCriteria>
                </div>

                <div class="col"></div>
              </div>
              {/* Ligne 10 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="focal_length" label="Focal length">
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.focal_length}
                      min={0}
                      max={400}
                      name="focal_length"
                    />
                  </SortingCriteria>
                </div>

                <div class="col"></div>
              </div>
              {/* Ligne 11 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria
                    name="focal_length_eq35"
                    label="Focal length Eq. 35Mm"
                  >
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.focal_length_eq35}
                      min={0}
                      max={600}
                      name="focal_length_eq35"
                    />
                  </SortingCriteria>
                </div>

                <div class="col"></div>
              </div>
              {/* Ligne 12 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="crop_factor" label="Crop Factor">
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.crop_factor}
                      min={1}
                      max={9}
                      name="crop_factor"
                    />
                  </SortingCriteria>
                </div>

                <div class="col"></div>
              </div>
              {/* Ligne 13 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="sensor_size" label="Sensor Size">
                    <DynamicSelect
                      optList={this.formSelectAllowedValues.sensor_size}
                      onInput={this.handleInputChange}
                      name="sensor_size"
                      value={this.state.sensor_size}
                    />
                  </SortingCriteria>
                </div>

                <div class="col"></div>
              </div>
              {/* Ligne 14 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria
                    name="sensor_size_mm"
                    label="Sensor Size (mm)"
                  >
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.sensor_size_mm}
                      name="sensor_size_mm"
                      step={0.1}
                      min={5}
                      max={43.2}
                    />
                  </SortingCriteria>
                </div>

                <div class="col"> </div>
              </div>
              {/* Ligne 15 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="pixel_pitch" label="Pixel Pitch (µm)">
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.pixel_pitch}
                      name="pixel_pitch"
                      min={1}
                      max={10}
                    />
                  </SortingCriteria>
                </div>

                <div class="col"> </div>
              </div>
              {/* Ligne 16 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria
                    name="pixel_density"
                    label="Pixel Density (MP/cm2)"
                  >
                    <InputRange
                      onDrag={this.handleInputChange}
                      values={this.state.pixel_density}
                      name="pixel_density"
                      min={1}
                      max={100}
                    />
                  </SortingCriteria>
                </div>

                <div class="col"> </div>
              </div>
              {/* Ligne 17 */}
              <div class="form-row">
                <div class="col">
                  {/* Partie acquisition */}
                  <SortingCriteria name="sensor_model" label="Sensor Model">
                    <DynamicSelect
                      optList={this.formSelectAllowedValues.sensor_model}
                      onInput={this.handleInputChange}
                      name="sensor_model"
                      value={this.state.sensor_model}
                    />
                  </SortingCriteria>
                </div>

                <div class="col"> </div>
              </div>

              <button type="submit" className="btn btn-default btn-lg">
                FILTER
              </button>

              <button type="button" onClick={this.onFormReset} className="ml-4 btn btn-default btn-lg">
                Reset
              </button>
            </form>

            <span class="mt-2">{this.state.loadingText}</span>

            {this.state.showResults ? (
              <div class="card mt-4 bg-primary overflow-auto" style={{height:"300px",overflowY:"scroll"}} id="resultBox">
                <div className="card-body">
                {this.state.sortResults.length
                      ?
                        <Fragment>
                          <p>{this.state.sortResults.length} results</p>
                          <pre class="text-white">
                            {this.state.sortResults.map(function (img_name) {
                                  return <Fragment>{img_name}<br/></Fragment>
                                })
                              }
                          </pre>
                        </Fragment>
                        
                      : "No results"}
                  
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </Fragment>
    );
  }

  //Liste des valeurs possibles pour les éléments select
  formSelectAllowedValues = {
    //ligne 1
    manufacturer: [
      "Internet License Free (WeSaturate)",
      "Apple",
      "Canon",
      "Google",
      "HTC",
      "Huawei",
      "Kodak",
      "Leica",
      "LG",
      "Nikon",
      "Panasonic",
      "Pentax",
      "Ricoh",
      "Samsung",
      "Sigma",
      "Sony",
    ],
    demosaicing_algorithm: ["Amaze", "DCB2", "Fast", "IGV"],
    //ligne 2
    camera_id: [
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
    sharpenning: ["OFF", "ON (low)", "ON (modera)", "ON (high)"],
    //ligne 4
    camera_type: [
      "Internet License Free (WeSaturate)",
      "Bridge",
      "Compact",
      "DSLR",
      "Mirrorless",
      "Smartphone/Tablet",
    ],
    denoising: ["OFF", "ON (low)", "ON (modera)", "ON (high)"],
    //ligne 5

    resizing_action: [
      "CROP ONLY (no resize)",
      "RESIZE ONLY (no crop)",
      "Crop And Resize",
    ],
    resizing_type: [
      "BICUBIC",
      "BILINEAR",
      "LANCZOS",
      "NEAREST",
      "NONE (CROP ONLY)",
    ],
    resizing_last_number: [
      "upsampling > 1 ",
      "downsampling low  0.5 <  < 1",
      "downsampling moderate  0.25 <  < 0.5",
      "downsampling strong  0.25",
    ],

    //ligne 6
    image_size: [
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
    sensor_size: [
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
      "APS-C",
      "Full Frame",
    ],
    //ligne 17
    sensor_model: [
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
    ],
  };

  //Liste des valeurs initiales pour les éléments range
  formRangeAllowedValues = {
    year: [2005, 2009],
    fnumber: [5, 20],
    iso: [290, 512],
    exposure: [10, 20],
    jpeg_compression: [70, 80],
    mega_pixels: [10, 30],
    raw_size: [200, 3000],
    focal_length: [100, 300],
    focal_length_eq35: [100, 300],
    crop_factor: [5, 7],
    sensor_size_mm: [8, 40.1],
    pixel_pitch: [5, 9],
    pixel_density: [50, 80],
  };

  //Liste des valeurs initiales pour les checkboxes
  formChoiceAllowedValues = {
    usm_off: true,
    usm_on: true,
    only_raw: true,
    compression: false,
  };

  //liste des cirtères appartenant à l'image processing
  formProcessingCriteria = [
    "demosaicing_algorithm",
    "usm_on",
    "usm_off",
    "sharpenning",
    "denoising",
    "resizing_action",
    "resizing_type",
    "resizing_last_number",
    "image_size",
  ];

  formSpecialCriteria = ["only_raw", "compression"];

  //fonction utilitaire pour convertir les valeurs en un objet utilisable par react-select
  toUsableSelectValue(rawOptList) {
    //console.log(rawOptList)
    let options = [];
    for (const opt of rawOptList) {
      options.push({
        value: opt,
        label: opt,
      });
    }
    return options;
  }

  //fonction initialisant le state de tous les éléments du formulaire
  initState() {
    this.state = {};
    //init des select
    for (const elem_key in this.formSelectAllowedValues) {
      if (this.formSelectAllowedValues.hasOwnProperty(elem_key)) {
        this.state[elem_key] = this.toUsableSelectValue(
          this.formSelectAllowedValues[elem_key]
        );
      }
    }
    //init des sliders
    for (const elem_key in this.formRangeAllowedValues) {
      if (this.formRangeAllowedValues.hasOwnProperty(elem_key)) {
        this.state[elem_key] = this.formRangeAllowedValues[elem_key];
      }
    }
    //init des checkboxes
    for (const elem_key in this.formChoiceAllowedValues) {
      if (this.formChoiceAllowedValues.hasOwnProperty(elem_key)) {
        this.state[elem_key] = this.formChoiceAllowedValues[elem_key];
      }
    }
    //init du tableau des éléments modifiés (utilisés pour le tri)
    this.state.sortingCriteria = [];
    //on cache la boîte des résultats au début
    this.state.showResults = false;
    //on init à aucun résultats au début
    this.state.sortResults = {};
    //init du text de chargement
    this.loadingText = "";
    // on préserve le state initial pour reset
    this.baseState = this.state;
  }

  constructor() {
    super();
    this.initState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.onChoiceSubmit = this.onChoiceSubmit.bind(this);
  }

  //fonction pour reset le formulaire
  onFormReset = () => {
    console.log("reset")
    this.setState(this.baseState);
  };

  //fonction pour gérer l'envoi du formulaire
  async onChoiceSubmit(e) {
    e.preventDefault();
    //pour tous les éléments qui ont été modifiés, on les ajoute à l'url du filtre serveur
    this.setState({loadingText:"Filtering 80K rows..."})
    console.log(this.state.sortingCriteria);
    let url_params = "";
    let transformed_criteria_value = "";
    for (const criteria of this.state.sortingCriteria) {
      //si le control appartient au processing, on check que le only_raw n'est pas coché ! Sinon on ignore
      if (
        (this.formProcessingCriteria.includes(criteria) &&
          this.state.only_raw) ||
        (criteria === "jpeg_compression" && this.state.compression)
      ) {
        console.log("ignoring " + criteria);
        continue;
      }

      //on ignore les checkboxes de personnalisation du formulaire/extension
      if (this.formSpecialCriteria.includes(criteria)) {
        console.log("ignoring special criteria: " + criteria);
        continue;
      }

      //gestion des checkboxes
      if (typeof this.state[criteria] === "boolean") {
        //on vérifie que la checkbox est cochée tout de de même

        //ajout à la l'url
        url_params += criteria + "=" + this.state[criteria] + "&";
      }
      //gestion des InputRange et DynamicSelect
      else if (typeof this.state[criteria] === "object") {
        //si le tableau est vide, on se barre
        if (!this.state[criteria].length) {
          continue;
        }
        //on transforme le tableau en chaîne de caractère
        transformed_criteria_value = "";
        //pour chaque objet du tableau, on ajoute les valeurs au paramètre
        for (const select_object of this.state[criteria]) {
          transformed_criteria_value +=
            (select_object.value || select_object) + ",";
        }

        //on supprime le dernier caractère (un , en trop)
        transformed_criteria_value = transformed_criteria_value.slice(0, -1);

        //ajout à la l'url
        url_params += criteria + "=" + transformed_criteria_value + "&";
      }
    }

    //on supprime le dernier caractère (un & en trop)
    url_params = url_params.slice(0, -1);

    //si ya pas de paramètres, on a pas à trier
    if (!url_params) {
      alert("No filtering critera selected");
      return;
    }

    //on ajoute une précision sur les extensions
    if (this.state.only_raw & this.state.compression) {
      //ça sera du jpeg
      url_params += "&ext=" + "jpg";
    } else if (!this.state.only_raw && !this.state.compression) {
      //ça sera du ppm
      url_params += "&ext=" + "ppm";
    }

    fetch("/dataset_sorter?" + url_params).then((response) => {
      response.ok
        ? response.json().then((json) => {
            //on affiche la boîte des résultats
            this.setState({
              showResults: true,
              sortResults: json,
            });
            console.log(json);
            this.setState({loadingText:""})
          })
        : console.log(response);
    });
  }

  //fonction qui gère la sélection de chaque élément
  handleInputChange(newValue, name) {
    //console.log("MaterialComponent value", newValue)
    //on vérifie à quel control on a à faire
    if (Array.isArray(newValue.values)) {
      //console.log("c'est un input range")
      //alors c'est un input range
      //console.log("values", newValue.values)
      this.setState({ [name]: newValue.values });
    } else {
      //console.log("c'est un dynamicSelect")
      this.setState({ [name]: newValue });
    }

    //on ajoute le control aux critère
    //s'il n'est pas déjà présent dans les critères de filtre
    if (!this.state.sortingCriteria.includes(name)) {
      //on l'ajoute
      this.state.sortingCriteria.push(name);
    }
  }

  handleCheckboxChange(control_name, linked_controls = []) {
    let newVal = !this.state[control_name];
    this.setState({ [control_name]: newVal });

    //on ajoute le control aux critère
    //s'il n'est pas déjà présent dans les critères de filtre
    if (!this.state.sortingCriteria.includes(control_name)) {
      //on l'ajoute
      this.state.sortingCriteria.push(control_name);
    }
    //et de même pour les checkboxes reliées
    for (const control of linked_controls) {
      if (!this.state.sortingCriteria.includes(control)) {
        //on l'ajoute
        this.state.sortingCriteria.push(control);
      }
    }
  }
}

export default DbSorter;

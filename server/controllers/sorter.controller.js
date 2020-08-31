
const csvdb = require("node-csv-query").default;
const path = require("path");
const { match } = require("assert");

let db = null;

class SorterController {

    //liste de tous les critères de filtre
    static critera_list = [
        ["manufacturer","2-Manufacturer"],
        ["camera_model","3-Camera Model"],
        ["year","4-Year","range"],
        ["camera_type","5-Camera Type"],
        ["fnumber", "6-F-number","range"],
        ["iso","7-ISO","range"],
        ["aperture","8-Aperture"],
        ["exposure","9-Exposure","range"],
        ["mega_pixels","10-MegaPixels","range"],
        ["raw_size","11-RAWsize","range"],
        ["focal_length","12-Focallength","range"],
        ["focal_length_eq35","13-Focallength Eq. 35Mm","range"],
        ["crop_factor","14-cropFactor","range"],
        ["sensor_size","15-Sensor size"],
        ["sensor_size_mm","16-Sensor Size (mm)","range"],
        ["pixel_pitch","17-pixel pitch (um)","range"],
        ["pixel_density","18-Pixel Density (MP/cm2)","range"],
        ["sensor_model","19-Sensor Model"],
        ["demosaicing_algorithm","20-Demosaicing algorithm"],
        ["usm|den_order","21-USM / DEN order"],
        ["sharpenning","22-Sharpenning"],
        ["denoising","23-Denoising"],
        ["resizing","24-Resizing"],
        ["image_size","25-ImageSize"],
        ["jpeg_compression","26-JPEG Compression","range"]

    ]

    static sort = async (req,res) => {
        //console.log(this.critera_list)

        let criteriaObject = {}

        //pour chaque critère, on teste si on souhaite trier par celui-ci
        for (const criteria of this.critera_list) {
            //si le critère est dans la requête
            if(req.query[criteria[0]]) {
                //on l'ajoute au filtre
                criteriaObject[criteria[1]] = {
                    supplied_value:req.query[criteria[0]]
                }
                //si c'est un InputRange, on le précise
                if(criteria[2] === "range") {
                    criteriaObject[criteria[1]].type = "range"
                }
            }
        }

        console.log(criteriaObject)

        //on se "connecte" au fichier csv
        db = await csvdb(process.cwd()+'/server/public/'+process.env.DB_FILE_NAME,
        {
            delimiter:';',
            quote:false,
            relax:true,
            
        })
        
        let records = await db.find(function(record) {
            
            let matchingRecord = true;
            //pour chaque élément du filtre, on vérifie si le record contient un élément de la liste des critères
            for (const criteria in criteriaObject) {
                const value = criteriaObject[criteria].supplied_value
                
                //si c'est un critère DynamicSelect
                if( criteriaObject[criteria].type !== "range" && value.split(',').indexOf(record[criteria]) === -1) {
                    //si l'un des critères ne correspond pas, on s'en va
                    matchingRecord = false;
                }
                //si c'est un inputRange
                else if(criteriaObject[criteria].type === "range") {
                    //si la valeur du record n'est pas dans la plage donnée
                    let range = {
                        min:parseFloat(value.split(',')[0]),
                        max:parseFloat(value.split(',')[1])
                    }
                    if(parseFloat(record[criteria]) < range.min || parseFloat(record[criteria]) > range.max) {
                        matchingRecord = false;     
                    }
                }
            }
            return matchingRecord
        })
        console.log(records.length)

        records = records.map(function(record) {
            return record["1-Name"];
          })
  
        res.status(200).json(records)
    }
}

module.exports = SorterController;

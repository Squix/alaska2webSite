
const csvdb = require("node-csv-query").default;
const path = require("path");

let db = null;

class SorterController {

    //liste de tous les critères de filtre
    critera_list = [
        "manufacturer",
        
    ]

    static sort = async (req,res) => {
        console.log(req.query)
        //on se "connecte" au fichier csv
        db = await csvdb(process.cwd()+'/server/public/'+process.env.DB_FILE_NAME,
        {
            delimiter:';',
            quote:false,
            relax:true,
            
        })
        let records = await db.find({
            "2-Manufacturer":req.query.manufacturer,
            "3-Camera Model":req.query.camera_model,
        })
        records = records.map(function(record) {
            return record["1-Name"];
          })
        res.json(records)
    }
}

module.exports = SorterController;

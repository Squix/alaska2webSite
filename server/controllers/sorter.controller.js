
const csvdb = require("node-csv-query").default;
const path = require("path");

let db = null;

class SorterController {
    static sort = async (req,res) => {
        console.log(req.params)
        //on se "connecte" au fichier csv
        db = await csvdb(process.cwd()+'/server/public/'+process.env.DB_FILE_NAME,
        {
            delimiter:';',
            quote:false,
            relax:true,
            
        })
        let records = await db.find({
            "2-Manufacturer":"Google"
        })
        res.json(records)
    }
}

module.exports = SorterController;

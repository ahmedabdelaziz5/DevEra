const {StatusCodes} = require("http-status-codes")
module.exports = (schema)=>{

    return (req,res,next) =>{
        var validation = []
        var validationResult = schema.body.validate(req.body)
         console.log(validationResult.error);
        if(validationResult.error){
            validation.push(validationResult.error.details[0].message); 
            //push errors into array
        }
        if(validation.length){ //if array of validation contains errors
        res.status(StatusCodes.INTERNAL_SERVER_ERROR) .json({message:validation.join()})
            return;
        }  
        next();
    } 
}
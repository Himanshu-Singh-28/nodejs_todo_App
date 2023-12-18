
export const errorHandel=(err,req,res,next)=>{
    return res.status(404).json({
        success: false,
        message: err.message,
    });
}
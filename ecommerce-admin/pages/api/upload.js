import multiparty from 'multiparty';

const handle = async(req,res)=>{
    const form = new multiparty.Form();
    const {field,files} = new Promise((resolve,reject)=>{
        form.parse(req,(err,fields,files)=>{
            if(err) reject(err);
            resolve({field,files});
        });
    });
    console.log('length:',files.length);
};

export const config = {
    api:{bodyParser:false},
}

export default handle;
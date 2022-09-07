export default function handler(req, res) {

    if (req.method === 'POST'){
        return res.status(200).json('ceating products');
    }else {
        return res.status(200).json('Getting products');
    }
    
}
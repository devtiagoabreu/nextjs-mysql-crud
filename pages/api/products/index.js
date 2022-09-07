import { pool } from "../../../config/db";

export default async function handler(req, res) {

    switch(req.method) {
        case 'GET':
            return await getAllProducts(req, res)
        case 'POST':
            return await saveProduct(req, res)
    }
}

const getAllProducts = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM product'); 
    console.log(result)
    return res.status(200).json('Getting products');
};

const saveProduct = async (req, res) => {
    const {name, description, price} = req.body  
        
    const [result] = await pool.query('INSERT INTO product SET ?', {
        name, 
        description, 
        price,
    });

    return res
        .status(200)
        .json({
            name, 
            description, 
            price,
            id: result.insertId
        });
};
    

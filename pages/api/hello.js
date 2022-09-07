import { pool } from '../../config/db' ;

export default async function handler(req, res) {

  const result = await pool.query('SELECT NOW();')
  console.log(result);

  res.status(200).json({ name: 'John Doe' })
}

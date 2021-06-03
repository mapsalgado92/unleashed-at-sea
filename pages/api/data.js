import { connectToDatabase } from '../../utils/database'

export default async function getData(req, res) {
  const { db } = await connectToDatabase()
  const boats = await db.collection("boats").find({}).sort({ price: 1 }).toArray()
  const promos = await db.collection("promos").find({}).toArray()
  res.json({ boats, promos })
}
import { MongoClient } from 'mongodb'

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  console.log('handler', {reqMethod: req.method, reqbody: req.body})
  if (req.method === 'POST'){
    const data = req.body

    const client = await MongoClient.connect('mongodb+srv://migue:rqc6ksZntgbh2MEy@cluster0.mjdgk.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({message: 'Meetup inserted!'})
  }
}

export default handler
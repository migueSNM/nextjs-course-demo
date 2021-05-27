import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta 
          name="description" 
          content={props.meetup.description}
        />
      </Head>
      <MeetupDetail 
        image={props.meetup.image}
        title={props.meetup.title}
        description={props.meetup.description}
        address={props.meetup.address}
      />
    </>
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://migue:rqc6ksZntgbh2MEy@cluster0.mjdgk.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

  client.close()

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
  }
}

export async function getStaticProps (context) {
  
  // fetch data for single meetup

  const meetupId = context.params.meetupId

  const client = await MongoClient.connect('mongodb+srv://migue:rqc6ksZntgbh2MEy@cluster0.mjdgk.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

  client.close()

  console.log({meetupId})
  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        address: meetup.address,
        title: meetup.title,
        description: meetup.description,
        image: meetup.image,
      }
    }
  }
}

export default MeetupDetails

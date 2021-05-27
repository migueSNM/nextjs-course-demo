import Head from 'next/head'
import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'

const HomePage = (props) => {
  return ( 
    <>
      <Head>
        <title>React Meetups</title>
        <meta 
          name="description" 
          content="Browse a huge list of highly active React Meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups}/>
    </>
  )
}

export async function getStaticProps() {
  // fetch data from API

  const client = await MongoClient.connect('mongodb+srv://migue:rqc6ksZntgbh2MEy@cluster0.mjdgk.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => {
        return {
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
          image: meetup.image,
          id: meetup._id.toString()
        }
      })
    },
    revalidate: 1
  }
}

// export async function getServerSideProps(context) {
//   // fetch data from api or file system, as this runs on the server, not the client

//   const req = context.req
//   const res = context.res

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage

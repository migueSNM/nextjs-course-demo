import Head from 'next/head'
import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const router = useRouter()
  
  const onAddMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()

    console.log(data)

    router.replace('/')

  }
  return (
    <>
      <Head>
        <title>Add new meetup page</title>
        <meta 
          name="description" 
          content="Add your own meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </>
  )
}

export default NewMeetupPage

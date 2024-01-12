import Image from 'next/image'
import DropDown from './components/DropDown'


export default function Home() {

  // dummy data for now
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  return (
    <>
    <DropDown url={url}/>
    </>
  )
}

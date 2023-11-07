import { useRef, useState } from 'react'
import './App.css'
import HeadlineCard from './components/HeadlineCard'
import { TextInput, Button } from 'flowbite-react'
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const inputRef = useRef()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchData = async (event) => {
    event.preventDefault()
    setLoading(true)
    setData(null)
    const res = await fetch(`https://dwm-project-sever.up.railway.app/predict/${inputRef.current.value}`, {mode: 'cors', method: "GET"})
    setData(await res.json())
    setLoading(false)
    console.log(data);
  }
  
  return (
    <div className='w-full flex flex-col justify-center items-center'>
    <div className='w-full max-w-[1280px] p-4 flex justify-center items-center'>
      <form onSubmit={(event) => fetchData(event)} className='w-full flex justify-evenly items-center'>
        <TextInput ref={inputRef} type="text" placeholder='Enter subreddit...' required={true} className='text-black font-semibold w-4/5' />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
    <div className='flex flex-col justify-center items-center gap-4 mt-4 w-full'>
      {data && (
        <div className='text-lg font-semibold'>
          Latest {data.headlines.length} 'Hot' posts from r/{inputRef.current.value}
        </div>
      )}
      <ScaleLoader color='#ff5100' loading={loading}/>
      {data && (
        data.headlines.map((headline, index) => {
          return <HeadlineCard key={index} headline={headline} score={data.results[index]}/>
        })
      )}
    </div>
    </div>
  )
}

export default App

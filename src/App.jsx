import { useRef, useState } from 'react'
import './App.css'
import HeadlineCard from './components/HeadlineCard'

function App() {
  const inputRef = useRef()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchData = async (event) => {
    event.preventDefault()
    setLoading(true)
    setData(null)
    const res = await fetch(`https://ai-project-backend.up.railway.app/predict/${inputRef.current.value}`, {mode: 'cors', method: "GET"})
    setData(await res.json())
    setLoading(false)
    console.log(data);
  }
  
  return (
    <>
    <div className='text-3xl'>
      <form onSubmit={(event) => fetchData(event)}>
        <input ref={inputRef} type="text" placeholder='Enter subreddit...' className='text-black' />
        <input type="submit" value={"submit"} />
      </form>
    </div>
    <div className='flex flex-col justify-center items-center gap-4 mt-4 w-full'>
      {loading && <div>Loading...</div>}
      {data && (
        data.headlines.map((headline, index) => {
          return <HeadlineCard key={index} headline={headline} score={data.results[index]}/>
        })
      )}
    </div>
    </>
  )
}

export default App

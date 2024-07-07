import aboba from '/aboba.png'
import '../styles/App.css'

function App() {
  return (
    <div className="flex w-full flex-col h-[100svh] items-center justify-center">
      <a href="" target="_blank">
        <img src={aboba} className="lumi lumi-spin react" alt="React logo" />
      </a>
      <h1 className="text-4xl mt-4">lumi ah :3</h1>
    </div>
  )
}

export default App

import loader from "/loader.gif"

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
        <img className="h-[40%] object-cover" src={loader} alt="loading" />
  
    </div>
  )
}

export default Loading
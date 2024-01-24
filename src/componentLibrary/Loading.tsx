import pikaChuLoding from "../public/pikachuLoadingGif.gif"

const LoadingPikachu = () => {
  return (
    <>
      <h1 className="text-center font-pokemon-solid xl:text-5xl text-3xl pb-4 text-red-900">
        <img src={pikaChuLoding} className=" w-48 h-32 xl:w-96 xl:h-64" />
        Loading Pokémon....
      </h1>
    </>
  )
}

export default LoadingPikachu

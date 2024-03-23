import {Audio} from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='absolute left-2/4 top-1/2 font-medium'>
      <Audio
      height="100"
      width="100"
      color="#ff00ff"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
      />
    </div>
  )
}

export default Loader

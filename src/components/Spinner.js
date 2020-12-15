import loader from '../img/loader.gif';

const Spinner = () => {
  return (
    <img src={loader} style={{ width:'100px', display: 'block', margin:'auto' }} alt='Loading..' />
  )
}

export default Spinner;

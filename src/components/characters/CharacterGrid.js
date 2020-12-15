import CharacterItem from './CharacterItem.js';
import Spinner from '../Spinner.js';
import NotFound from '../NotFound.js';

const CharacterGrid = ({ items, isLoading }) => {
  if (isLoading) {
    if (items.length > 0) {
      return (<section className="cards">
            {items.map(item => (
              <CharacterItem key={item.char_id} item={item} />
            ))}
        </section>)
    }
    else {
      return <NotFound />
    }
  }
  else {
    return <Spinner />
  }
        
        
        if(items.length > 0){
          return (
          isLoading ? (
          <section className="cards">
            {items.map(item => (
              <CharacterItem key={item.char_id} item={item} />
            ))}
          </section>
          ) : <Spinner /> )
        }
        else{
          return (<NotFound />)
        }
      }

export default CharacterGrid;

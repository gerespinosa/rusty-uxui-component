import ProductElement from './ProductElement'
import { smoothies } from "../libs/Products"

const Container = () => {
  return (
    <div className='w-full h-[100vh] flex items-center'>
        {smoothies.map((element) => {
            return (
                <ProductElement 
                    name={element.name} 
                    id={element.id} 
                    flavour={element.flavour} 
                    colour={element.colour} 
                    picture={element.picture}/>
            )
        })}
    </div>
  )
}

export default Container
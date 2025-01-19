import ProductElement from './ProductElement'
import { smoothies } from "../libs/Products"

const Container = () => {
  return (
    <div className='w-full h-[100vh] flex items-center'>
        {smoothies.map((element) => {
            return (
                <ProductElement  
                  key={element.id}
                  name={element.name} 
                  id={element.id} 
                  flavour={element.flavour} 
                  colour={element.colour} 
                  picture={element.picture}
                  desc={element.desc}/>
            )
        })}
    </div>
  )
}

export default Container
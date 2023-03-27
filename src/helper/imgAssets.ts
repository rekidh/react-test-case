
import business from '../assets/business.jpg'
import health from '../assets/healthy.png'
import entertainment from '../assets/entertainment.jpg'
import science from '../assets/science.jpg'
import technology from '../assets/technology.jpg'

export const imgAssets=(source:string)=>{
   switch(source){
      case 'technology':return technology
         break
      case 'health':return health
         break
      case 'entertainment':return entertainment
         break
      case 'science':return science
         break
      default :return business
   }
}

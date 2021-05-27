import {useSate} from 'react'
import JustSay from './justSay'

const Allcard = ({cardList ,checkCard}) => {


    const showListCard = cardList.map((item, index) => {

            return (
                <JustSay key={index} item={item}/>
            );
          
      });
    
    return(
        <>
        {showListCard}
        </>
    )
}
export default Allcard
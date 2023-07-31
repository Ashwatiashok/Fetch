import { useRef } from "react"
import { useState ,useEffect} from "react"

function Count()
{
    // let [count,setCount]=useState(0)

    // return <>
    // {count}
    // <button onClick={()=>{
    //     console.log('count',count)
       
         
    //       setTimeout(()=>{
    //         setCount(count+1)
    //       },300)
    //     //   console.log('first',count)
    //     //   setCount(count+1)
    //     //   console.log('secound',count)
          
    // }}>nnnnnnnnn</button>
    // </>

  //   const [count, setCount] = useState(0);

  //   useEffect(function() {
  //     setInterval(function log() {
  //       console.log(`Count is: ${count}`);
  //     }, 2000);
  //   }, []);
  
  //   return (
  //     <div>
  //       {count}
  //       <button onClick={() => setCount(count + 1) }>
  //         Increase
  //       </button>
  //     </div>
  //   );


  let x = useRef();
  console.log(x)
  return(
    <div>
      <h1>{x.current}</h1>
    </div>
  )



  }
export default Count
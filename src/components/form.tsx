
import Link from "next/link"
import { useState } from "react"

const Form = ({ data , page}: { data: any[], page: string}) => {
  const [pageac, setPage] = useState<number>(1)

  const siguiente = () => {
    if(pageac < 6){
    setPage(pageac + 1)
    
  }
  }

  const anterior = () => {
    if(pageac >1){
        setPage(pageac - 1);
    }
    };

  return (
    <>
      <h1>planetas</h1>
      {data.map((planet, index) => {
        
        if(page == '2'){
          index = index + 10
        }
        if(page == '3'){
          index = index + 20
        }
        if(page == '4'){
          index = index + 30
        }
        if(page == '5'){
          index = index + 40
        }
        if(page == '6'){
          index = index + 50
        }
        
        return (
          <div key={index}>
            <Link href={`/planet/${index + 1}`}>{planet}</Link>
            <br />
          </div>
        );
      })}
      <Link href={`/planets/${pageac}`}>
        <button onClick={siguiente}>next</button>
      </Link>
      <Link href={`/planets/${pageac}`}>
        <button onClick={anterior}>back</button>
      </Link>
      
    </>
  );
};

export default Form

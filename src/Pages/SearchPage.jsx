import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import RepoCpmp from "../components/RepoComp"
import GitApi from "../scripts/Api"

export default function SearchPage(){
    let {id} = useParams()
    const [data,setData] =useState([])
    const [searchParams ,setSearchParams]=useSearchParams()
    const [page,setPage]=useState(1)
    const [loading,setLoading] = useState(false)
    console.log(searchParams.get("page"))

    useEffect(()=>{
        setLoading(true)
        const getData=async()=>{

          let res =  await GitApi(id,page)
          setData(res)
          setLoading(false)

        }
        getData()
    },[id,page])



    return loading?<h1>Loading...</h1>:<div  style={{margin:"auto",width:"80%",marginTop:"100px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>

        <div><button disabled={page==1}
         onClick={()=>{setPage(page-1)
            setSearchParams(`page=${page-1}`)

        }}>-</button><label>{page}</label><button onClick={()=>{setPage(page+1)

        setSearchParams(`page=${page+1}`)
        }}>+</button></div>

        {data?.map((el)=><RepoCpmp {...el} />)}        

    
    </div>
}
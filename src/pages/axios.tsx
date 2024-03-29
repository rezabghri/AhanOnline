import axios from "axios";
import {IUser} from "../types/user";
// you don't need anything else to import

interface Props {
  // TODO: add user type
   name:string
}

export default function AxiosTest(props: Props) {
  // TODO: once you get data map through data and show them name

 



  return (
  <div>Simple Axios And Data Fetching :: Edit src/pages/axios.tsx
    <ul>
       {props.map(item=>{
         return{
           name:item.name
         }
       })}
    </ul>
  </div>
  )
}

// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios

export function getStaticProps() {
   const res = axios.get("/api/users")
     
   
   return{
    props:res
   }
}


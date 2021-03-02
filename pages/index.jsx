import Form from "../components/Form";
import Stories from "../components/Stories";
import Feed from '../components/Feed';

export default function Home() {
  return (
   <div className='Home'>
     <Stories />
     <Form />
     <Feed />
   </div>
  )
}

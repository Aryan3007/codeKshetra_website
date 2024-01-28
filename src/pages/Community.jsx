
import CreatePost from '../component/CreatePost'
import AllPosts from '../component/AllPosts'
import LoginedUser from '../component/logineduser'

const Community = () => {
  return (
    <div className='p-12 flex gap-12 justify-between'>
        <div className='mt-4 fixed'>
      <CreatePost/>
      <LoginedUser/>
        </div>
        <div className='w-1/2 ml-[600px] '>
      <AllPosts/>
        </div>
    </div>
  )
}

export default Community

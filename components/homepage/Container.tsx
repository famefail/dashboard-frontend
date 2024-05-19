import Button from "@/common/button/Container"
import Input from "@/common/input/Container"
import Blog from "../blog/Container"

const Homepage = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] pt-8">
      <div className="py-2 px-4">
        <div>Home</div>
        <div>Our Blog</div>
      </div>
      <div >
        <div className="flex">
          <Input props={{ value: '', placeholder: 'search' }} />
          <div>
            <button>a</button>
            <Button props={{ title: 'create +' }} />
          </div>
        </div>
        <div className="h-full">
        <div className="my-8 overflow-auto">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Homepage
import Button from "@/common/button/Container"
import Input from "@/common/input/Container"
import Blog from "../blog/Container"
import { HomepageController } from "./controller"
import Modal from "../modal/Container"

const Homepage = () => {
  const {
    onClickCreate,
    setSearch,
    search,
    createMode,

  } = HomepageController()

  return (
    <div className="mx-4 sm:m-auto sm:grid grid-cols-[1fr_2fr_1fr] pt-8">
      {createMode && <Modal onClickCreate={onClickCreate} />}
      <div className="py-2 px-4">
        <div>Home</div>
        <div>Our Blog</div>
      </div>
      <div>
        <div className="flex">
          <Input props={{ value: search, placeholder: 'search', setInput: setSearch }} />
          <div>
            <Button props={{ title: 'create +', onClick: onClickCreate }} />
          </div>
        </div>
        <div className="mt-8 overflow-auto h-[60vh] sm:h-[70vh]">
          <Blog />
        </div>
      </div>
    </div>
  )
}

export default Homepage
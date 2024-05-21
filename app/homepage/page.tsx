"use client";
import Button from "@/common/button/page"
import Input from "@/common/input/page"
import Blog from "../blog/page"
import { HomepageController } from "./controller"
import Modal from "../modal/page"
import Header from "../header";

const Homepage = () => {
  const {
    onClickCreate,
    setSearch,
    search,
    createMode,

  } = HomepageController()

  return (
      <div className="mx-4 sm:m-auto sm:grid grid-cols-[1fr_2fr_1fr] pt-8">
        {createMode && <Modal props={{ onClickCreate, mode: 'Create' }} />}
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
            <Blog props={{ viewOnly: true }} />
          </div>
        </div>
      </div>
  )
}

export default Homepage
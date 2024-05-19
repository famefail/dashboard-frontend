import Search from "@/public/search.svg"
import Comment from "@/public/comment.svg"
import Image from "next/image"

const Blog = () => {
  return (
    <div className="bg-white border-b-2 border-grey-100">
      <div className="p-5">
        <div className="flex gap-2 my-4">
          <Image
            src={Search}
            alt={'icon-profile'}
            width={20}
            height={20}
          />
          <label className="text-grey-300">username</label>
        </div>
        <span className=" bg-grey-100 w-max py-1 px-2 rounded-2xl">tag</span>
        <div className="my-4">
          <h2>
            The Beginning of the End of the World
          </h2>
          <p className="line-clamp-2">
            The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.
          </p>
          <div className="flex gap-2 items-center my-4">
            <Image
              src={Comment}
              alt={'icon-comment'}
              width={20}
              height={20}
            />
            <p className="text-grey-300">32 Comments</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
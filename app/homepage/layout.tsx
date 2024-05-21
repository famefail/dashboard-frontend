import Header from "../header"

interface IHomepageLayout {
    children: React.ReactNode
}

const HomepageLayout = ({children}: IHomepageLayout) => {
return(
    <div className=" h-full bg-grey-300">
    <Header/>
    {children}
    </div>
)
}
export default HomepageLayout
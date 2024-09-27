import { useLocation } from "react-router-dom"
import Card from '../components/Card';
import Header from '../components/Header';
import Todocontainer from '../components/Todocontainer';

function Landing(){
    const data = useLocation()

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header name={data.state.user} />
                <div className='flex justify-between flex-wrap gap-7 my-5'>
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={new Date(new Date()).toDateString()} subtitle={new Date(new Date().getTime()).toLocaleTimeString()} />
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                </div>
                <Todocontainer />
            </div>
        </div>
    )
}
export default Landing;
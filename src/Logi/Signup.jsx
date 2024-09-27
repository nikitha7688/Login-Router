import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const users = props.users
    const setUsers = props.setUsers

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    const navigate = useNavigate()


    function handleUInput(evt) {
        setEusername(evt.target.value)
    }
    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }
    function addUser() {

        if (eusername.length >= 3 && epassword.length >= 3) {
            setUsers([...users, { username: eusername, password: epassword }])
            alert("Hello User you have successfully created ")
            setEusername("")
            setEpassword("")
            navigate("/")
        } else {
            alert("Username and password should contain minimum 4 digit")
        }
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up Here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        value={eusername}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username"
                        onChange={handleUInput}></input>

                    <input
                        type="password"
                        value={epassword}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password"
                        onChange={handlePInput}></input>

                    <input
                        type="password"
                        value={epassword}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password"
                        onChange={handlePInput}></input>

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
                    <p>Already have an account?  <Link to={"/"} className="underline">Login</Link> </p>

                </div>
            </div>
        </div>
    )
}

export default Signup
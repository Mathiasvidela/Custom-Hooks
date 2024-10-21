import { useForm } from "../hooks/useForm"

export const FormsApp = () => {

    const initialform = {
        username:'',
        email: '',
        password:''
    }

    const {username, email, password, formState, onInputChange} = useForm(initialform)


    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(username,email,password)
    }


  return (
    <>
    <p>Hook para formularios</p>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">UserName</label>
                <input 
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={onInputChange} 
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                type="Email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onInputChange}            
                />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input                 
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={onInputChange}               
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

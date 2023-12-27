import { useState } from "react";

const Ud = () => {
  const [name, setname] = useState();
  const [email,setemail]=useState()
  const [pass,setpass]=useState()


  const handlename = (e) => {
    {
      setname(e.target.value)
    }
  };
  
  const handleemail = (e) => {
    {
      setemail(e.target.value)
    }
  };
  
  const handlepass = (e) => {
    {
      setpass(e.target.value)
    }
  };

  const handlesubmit=(e)=>{
    e.preventDefault()
    
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <label for="name">Name</label>{" "}
        <input onChange={handlename} type="text" id="name"  value={name}/>
        <p>{name}</p>
        <label for="name">Email</label>{" "}
        <input onChange={handleemail} type="email" id="name"  value={email}/>
        <p>{email}</p>
        <label for="name">Pass</label>{" "}
        <input onChange={handlepass} type="passward" id="name"  value={pass}/>
        <p>{pass}</p>
        <button>onSubmit</button>
      </form>
    <li className="name">
      
    </li>
    </>
  );
};

export { Ud };

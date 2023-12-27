import { useState } from "react"

const ThapaForm = () => {

    const [formData, setFormData] = useState({
        uname: '',
        mobile: '',
        email: '',
        pass: ''
    })

const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,':',value);

    setFormData((pre)=>{
        return{...pre,[name]:value}
    })
}

    return (
        <form  >
            <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" name='uname'  value={formData.uname}  onChange={handleChange}  className="form-control" id="name" placeholder="Your--Name"  />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="mobile" className="col-sm-2 col-form-label">mobile-Number</label>
                <div className="col-sm-10">
                    <input type="text" name='mobile'  value={formData.mobile} onChange={handleChange}  className="form-control" id="mobile" placeholder="Your-Mobile-Number"  />
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" name='email'  value={formData.email} onChange={handleChange}  className="form-control" id="staticEmail" placeholder="Your-Email"  />
                </div>
            </div>


            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" name="pass"   value={formData.pass} onChange={handleChange}  className="form-control" id="inputPassword" placeholder="password" />
                </div>
            </div>
            <p>my name is{` :=>${formData.uname} ,,and Email is==> ${formData.email} ,,contact Number ==>>${formData.mobile} pass${formData.pass}`}</p>

        </form>
    )
}
export { ThapaForm }
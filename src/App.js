import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const city = ["chennai","mumbai"];
  const country = ["india","england","london"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.Firstname) {
      errors.Firstname = "firstname is required!";
    }
    if (!values.Lastname) {
      errors.Lastname = "lastname is required!";
    }if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }if (!values.country) {
      errors.country = "country is required!";
    }
    if (!values.city) {
      errors.city = "city is required!";
    }
    if (values.Adharno) {
      errors.Adharno = "Adharno is required!";
    }
    if (values.Panno) {
      errors.Panno = "Panno is required!";
    }
    return errors;
  };

  return (
    <div className="container">
    {isSubmit ? (
  <div className="submitted"><h1>Signed in successfully</h1></div>
) : (
  null // or you can put any JSX element you want to render when isSubmit is false
)}

      <form onSubmit={handleSubmit}>
        <h1>Signin Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
        <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="Firstname"
              placeholder="FirstName"
              value={formValues.Firstname}
              onChange={handleChange} 
            />
          </div>
          <p>{formErrors.Firstname}</p>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="Lastname"
              placeholder="FirstName"
              value={formValues.Lastname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Lastname}</p>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Country</label>
            <select name="country" value={formValues.country} onChange={handleChange}>
          <option value="">Select Country</option>
          {country.map(country => <option key={country} value={country}>{country}</option>)}
        </select>
          </div>
          <p>{formErrors.Country}</p>
          <div className="field">
            <label>City</label>
            <select name="country" value={formValues.city} onChange={handleChange}>
          <option value="">Select City</option>
          {city.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
          </div>
          <p>{formErrors.City}</p>
          <div className="field">
            <label>Adhar No.</label>
            <input
              type="number"
              name="number"
              placeholder="Adhar number"
              value={formValues.Adharno}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Adharno}</p>
          <div className="field">
            <label>Pan No.</label>
            <input
              type="number"
              name="number"
              placeholder="Pan number"
              value={formValues.Panno}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Panno}</p>
          <button className="fluid ui button blue" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
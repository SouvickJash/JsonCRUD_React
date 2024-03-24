import { useState } from "react";
import json from "../Json/SomeJson";
import "./Style.css";

const Index = () => {
  var [jsondata, setJsonData] = useState(json);
  const [show, setShow] = useState(false);
  const [updateshow, updatesetShow] = useState(false);
  const [id,setId]=useState("")
 //update
  const [name1, setName1] = useState("");
  const [age1, setAge1] = useState("");
  const [city1, setCity1] = useState("");
  const [email1, setEmail1] = useState("");
  

//add
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

//delete data
  const delete1 = (id) => {
    console.log("id", id);
    const newData = jsondata.filter((item) => {
      return item.id !== id;
    });
    setJsonData(newData);
  };
// show form
  const show1 = () => {
    setShow(true);
  };
//hide form
  const hide = () => {
    setShow(false);
  };
//add new data
  function submitdata1() {
    const data = {
      id: jsondata.length + 1,
      name: name,
      age: age,
      city: city,
      email: email,
    };
//add new data
    setJsonData([...jsondata, data]);
    setName("");
    setAge("");
    setCity("");
    setEmail("");
    setShow(false);
    console.log("alldata", jsondata);
  }
//update button
const update = (id) => {
  setId(id)
  updatesetShow(true);
  
 // alert(`id:${id} name:${name} age:${age} city:${city} email:${email}`);
 // console.log("id",id)
};
//update form
  function updateForm(){
    const updateData={
      id:id,
      name: name1,
      age: age1,
      city: city1,
      email: email1,
    }
    setName1("");
    setAge1("");
    setCity1("");
    setEmail1("");
    

    console.log("updateData",updateData)
    jsondata.forEach(object => {
      if (object.id === updateData.id) {
        object.name = updateData.name;
        object.age= updateData.age;
        object.city = updateData.city;
        object.email = updateData.email;
      }
      
    });
    console.log(jsondata);
    

    updatesetShow(true);
    console.log("id",id)
  }
//update hide form
const updateHide=()=>{
  updatesetShow(false);
}     



  return (
    <>
      <table className="table1 table-dark">
        <thead>
          <tr>
           <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        {jsondata.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
            <td>{item.email}</td>

            <td>
              <button
                class="btn btn-primary btn-sm"
                type="button"
                onClick={() =>update(item.id, item.name, item.age, item.city, item.email)
                }
              >
                Update
              </button>
              


            </td>
            <td>
              <button
                class="btn btn-danger btn-sm"
                type="button"
                onClick={() => delete1(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>

      <button
        type="button"
        className="insert"
        class="btn btn-primary"
        onClick={show1}
        style={{ marginLeft: 200, marginTop: 10 }}
      >
        Insert Data
      </button>
      <button
        type="button"
        className="insert"
        class="btn btn-warning"
        onClick={hide}
        style={{ marginTop: 10 }}
      >
        Hide Form
      </button>
      <button
        type="button"
        className="insert"
        class="btn btn-info"
        onClick={updateHide}
        style={{ marginTop: 10 }}
      >
        Hide Update
      </button>

      {show === true ? (
        <section
          className="h-100 gradient-form"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center"></div>
                        <form>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Age"
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <button
                            style={{ width: 110 }}
                            type="button"
                            className="btn"
                            class="btn btn-dark btn-sm"
                            onClick={submitdata1}
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}


{/* update */}
{updateshow === true ? (
        <section
          className="h-100 gradient-form"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center"></div>
                        <form>
                        <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ID"
                              readOnly
                              value={id}
                              defaultValue={id}
                              onChange={(e) => setId(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              value={name1}
                      
                              onChange={(e) => setName1(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Age"
                              value={age1}
                              onChange={(e) => setAge1(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                              value={city1}
                              onChange={(e) => setCity1(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              value={email1}
                              onChange={(e) => setEmail1(e.target.value)}
                            />
                          </div>

                          <button
                            style={{ width: 110 }}
                            type="button"
                            className="btn"
                            class="btn btn-dark btn-sm"
                            onClick={updateForm}
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}


    </>
  );
};

export default Index;

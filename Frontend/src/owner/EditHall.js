import { useState, useEffect } from "react";
import axios from "axios";
import "./addground.css";

// function AddGround() {
//   useEffect(() => {
//     if (
//       localStorage.getItem("role") === "null" ||
//       localStorage.getItem("role") != "2"
//     ) {
//       window.location.href = "/login";
//     }
//     getAllGrounds();
//   }, []);

//   const [image, setImage] = useState(null);
//   const [groundName, setGroundName] = useState("");
//   const [city, setCity] = useState("");
//   const [getgroundDetail, setGroundDetail] = useState({});

//   const getAllGrounds = async () => {
//     const ground = { ground_id: localStorage.getItem("groundid") };
//     const response = await axios.post(
//       "http://localhost:8081/findByGoundId",
//       ground
//     );
//     setGroundDetail(response.data);
//     setImage(response.data.ground_image);
//     console.log(response.data);
//   };

//   const onImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       setImage(URL.createObjectURL(event.target.files[0]));
//     }
//   };

//   return (
//     <div className="main mx-auto ">
//       <div class="container-fluid px-1 mx-auto main1">
//         <div class="row  p-0 mx-auto my-0 ">
//           <div class="col-xl-7 col-lg-8 col-md-9 col-11 mx-auto text-center">
//             <div class="card">
//               <h5 class="text-center mb-4">Add Ground Information</h5>
//               <form
//                 action="http://localhost:8081/addGround"
//                 method="post"
//                 enctype="multipart/form-data"
//                 class="form-card"
//               >
//                 <input
//                   type="file"
//                   onChange={onImageChange}
//                   className="filetype"
//                   name="ground_image"
//                 />
//                 <img src={image} alt="." className="myimgpic" />

//                 {/* <input
//                   type="hidden"
//                   onChange={onImageChange}
//                   className="filetype"
//                   name="ground_id"
//                 /> */}

//                 <div class="row justify-content-between text-left">
//                   <div class="form-group col-sm-6 flex-column d-flex">
//                     {" "}
//                     <label class="form-control-label px-3">
//                       Enter ground name
//                     </label>{" "}
//                     <input
//                       type="text"
//                       id="fname"
//                       name="groundname"
//                       value={getgroundDetail.ground_name}
//                       onChange={(e) => {
//                         setGroundName(e.target.value);
//                       }}
//                     />{" "}
//                   </div>
//                   <div class="form-group col-sm-6 flex-column d-flex">
//                     {" "}
//                     <label class="form-control-label px-3">
//                       Enter city
//                     </label>{" "}
//                     <input
//                       type="text"
//                       id="lname"
//                       name="city"
//                       // value={getgroundDetail.city}
//                       onChange={(e) => {
//                         setCity(e.target.value);
//                       }}
//                       placeholder={getgroundDetail.city}
//                     />{" "}
//                   </div>
//                 </div>
//                 <div class="row justify-content-between text-left">
//                   <div class="form-group col-sm-6 flex-column d-flex">
//                     {" "}
//                     <label class="form-control-label px-3">
//                       Enter full address
//                     </label>{" "}
//                     <input
//                       type="text"
//                       id="email"
//                       name="loction"
//                       placeholder=""
//                       value={getgroundDetail.loction}
//                     />{" "}
//                   </div>
//                   <div class="form-group col-sm-6 flex-column d-flex">
//                     {" "}
//                     <label class="form-control-label px-3">
//                       Enter ground rent
//                     </label>{" "}
//                     <input
//                       type="text"
//                       id="mob"
//                       name="amount"
//                       placeholder=""
//                       value={getgroundDetail.amount}
//                     />{" "}
//                   </div>
//                 </div>

//                 <div class="row justify-content-between text-left">
//                   <div class="form-group col-sm-6 flex-column d-flex">
//                     {" "}
//                     <label class="form-control-label px-3">
//                       Enter Sport name
//                     </label>{" "}
//                     <input
//                       type="text"
//                       id="email"
//                       name="sports_name"
//                       placeholder=""
//                       value={getgroundDetail.ground_name}
//                     />{" "}
//                   </div>

//                   <div class="form-group col-sm-12 flex-row d-flex">
//                     {" "}
//                     <label class="form-control-label px-3">
//                       TimeSlot<span class="text-danger"> *</span>
//                     </label>{" "}
//                     <br />
//                     <label class="form-control-label px-3">
//                       9 Am to 12 Am{" "}
//                     </label>
//                     <input
//                       type="checkbox"
//                       id="mob"
//                       name="morning"
//                       placeholder=""
//                     />{" "}
//                     <label class="form-control-label px-3">
//                       12 Pm to 3 Pm{" "}
//                     </label>
//                     <input type="checkbox" name="afternoon" placeholder="" />{" "}
//                     <label class="form-control-label px-3">3 Pm to 6 Pm</label>
//                     <input
//                       type="checkbox"
//                       id="mob"
//                       name="evening"
//                       placeholder=""
//                     />{" "}
//                   </div>

//                   <div class="form-group col-sm-6 flex-column d-flex">
//                     {" "}
//                     <input
//                       type="hidden"
//                       id="mob"
//                       name="ownerid"
//                       value={localStorage.getItem("userid")}
//                       placeholder=""
//                     />{" "}
//                   </div>
//                   <div class="form-group col-sm-6 flex-column d-flex">
//                     {" "}
//                     <input
//                       type="hidden"
//                       id="mob"
//                       name="groundid"
//                       value={localStorage.getItem("groundid")}
//                       placeholder=""
//                     />{" "}
//                   </div>
//                 </div>

//                 <div class="row justify-content-end">
//                   <div class="form-group col-sm-6">
//                     {" "}
//                     <input
//                       type="submit"
//                       //   onClick={addNewUser}
//                       class="btn-block btn-success navBtnReg"
//                       value="Add Ground"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddGround;

function AddHall() {
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
    getAllHalls();
  }, []);

  const [image, setImage] = useState(null);
  const [hallName, setHallName] = useState("");
  const [city, setCity] = useState("");
  const [gethallDetail, setHallDetail] = useState({});

  const getAllHalls = async () => {
    const hall = { hall_id: localStorage.getItem("hallid") };
    const response = await axios.post(
      "http://localhost:8081/findByHallId",
      hall
    );
    setHallDetail(response.data);
    setImage(response.data.hall_image);
    console.log(response.data);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="main mx-auto ">
      <div class="container-fluid px-1 mx-auto main1">
        <div class="row  p-0 mx-auto my-0 ">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 mx-auto text-center">
            <div class="card">
              <h5 class="text-center mb-4">Add Court Information</h5>
              <form
                action="http://localhost:8081/addHall"
                method="post"
                enctype="multipart/form-data"
                class="form-card"
              >
                <input
                  type="file"
                  onChange={onImageChange}
                  className="filetype"
                  name="ground_image"
                />
                <img src={image} alt="." className="myimgpic" />

                {/* <input
                  type="hidden"
                  onChange={onImageChange}
                  className="filetype"
                  name="ground_id"
                /> */}

                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter court name
                    </label>{" "}
                    <input
                      type="text"
                      id="fname"
                      name="hallname"
                      placeholder={gethallDetail.hall_name}
                      onChange={(e) => {
                        setHallName(e.target.value);
                      }}
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter city
                    </label>{" "}
                    <input
                      type="text"
                      id="lname"
                      name="city"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      placeholder={gethallDetail.city}
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter full address
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="loction"
                      placeholder={gethallDetail.loction}
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter court rent
                    </label>{" "}
                    <input
                      type="text"
                      id="mob"
                      name="amount"
                      placeholder={gethallDetail.amount}
                    />{" "}
                  </div>
                </div>

                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter Sport name
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="sports_name"
                      placeholder=""
                      value={gethallDetail.sports_name}
                    />{" "}
                  </div>

                  <div class="form-group col-sm-12 flex-row d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      TimeSlot<span class="text-danger"> *</span>
                    </label>{" "}
                    <br />
                    <label class="form-control-label px-3">
                      9 Am to 12 Am{" "}
                    </label>
                    <input
                      type="checkbox"
                      id="mob"
                      name="morning"
                      placeholder=""
                    />{" "}
                    <label class="form-control-label px-3">
                      12 Pm to 3 Pm{" "}
                    </label>
                    <input type="checkbox" name="afternoon" placeholder="" />{" "}
                    <label class="form-control-label px-3">3 Pm to 6 Pm</label>
                    <input
                      type="checkbox"
                      id="mob"
                      name="evening"
                      placeholder=""
                    />{" "}
                  </div>

                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <input
                      type="hidden"
                      id="mob"
                      name="ownerid"
                      value={localStorage.getItem("userid")}
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <input
                      type="hidden"
                      id="mob"
                      name="hallid"
                      value={localStorage.getItem("hallid")}
                      placeholder=""
                    />{" "}
                  </div>
                </div>

                <div class="row justify-content-end">
                  <div class="form-group col-sm-6">
                    {" "}
                    <input
                      type="submit"
                      //   onClick={addNewUser}
                      class="btn-block btn-success navBtnReg"
                      value="Add Court"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddHall;

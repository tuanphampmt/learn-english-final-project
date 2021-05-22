import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import { useHistory} from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Auth from "../pages/service/Auth";
import { logo } from "src/assets/icons/logo";

const User = ({ match }) => {
  const history = useHistory();
  const [currentUser] = useState(Auth.getCurrentUser());
  const [userDetails, setuserDetails] = useState({});
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState({
    exp: "",
    avatar: "",
  });
  const [checked, setChecked] = useState(null);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const res = await axios.get(
          `https://backend-kide.herokuapp.com/api/admin/users/${match.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${currentUser.accessToken}`,
            },
          }
        );
        const { data } = res;
        if (data) {
          setuserDetails(data);
          setInputValues({
            exp: data.exp,
            avatar: convertAvatar(data.avatar),
          });
          setChecked(
            data.roles[0] === "ROLE_ADMIN" || data.roles[1] === "ROLE_ADMIN"
              ? true
              : false
          );
        }
      } catch (e) {}
    }
    fetchMyAPI();
  }, []);

  const convertAvatar = (avatar) => {
    if (avatar === "AVATAR_CAT") return "cat";
    if (avatar === "AVATAR_DINO") return "dino";
    else return "dolphin";
  };

  const submit = async () => {
    console.log(inputValues.exp, inputValues.avatar, checked);

    try {
      const res = await axios.put(
        `https://backend-kide.herokuapp.com/api/user/${match.params.id}`,
        {
          exp: inputValues.exp,
          avatar: inputValues.avatar,
          admin: checked,
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser.accessToken}`,
          },
        }
      );
      const { data } = res;
      if (data) {
        console.log(data);
      }
    } catch (e) {}
  };

  const deleted = () => {
    console.log(userDetails);
    if (userDetails.roles.length === 2) {
      if (
        userDetails.roles[0] === "ROLE_ADMIN" ||
        userDetails.roles[1] === "ROLE_ADMIN" ||
        userDetails.id === match.params.id
      ) {
        return swal({
          title: "Can not delete user",
          icon: "warning",
        });
      }
    }
    swal({
      title: "Delete user?",
      text: "You definitely want to delete this user?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await axios.delete(
            `https://backend-kide.herokuapp.com/api/user/${match.params.id}`,
            {
              headers: {
                Authorization: `Bearer ${currentUser.accessToken}`,
              },
            }
          );
          const { data } = res;
          if (data) {
            if(data.message === "Account has been deleted!"){
              swal({
                title: "Account has been deleted",
                icon: "success",
              }).then (() => {
                history.push(`/users`);
              })
            }
            console.log(data);
          }
          
        } catch (e) {}
      }
    });
  };

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>User id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <td>
                <tr>Id</tr>
                <tr>User name</tr>
                <tr>EXP</tr>
                <tr>Avatar</tr>
                <tr>Create at</tr>
                <tr>Roles</tr>
                <tr>Unit number</tr>
                <tr>Unit animal</tr>
                <tr>Unit color</tr>
                <tr>Unit alphabet</tr>
              </td>
              <td>
                <tr>{Object.keys(userDetails).length > 0 && userDetails.id}</tr>
                <tr>
                  {Object.keys(userDetails).length > 0 && userDetails?.username}
                </tr>
                <tr>
                  {Object.keys(userDetails).length > 0 && userDetails?.exp}
                </tr>
                <tr>
                  {Object.keys(userDetails).length > 0 && userDetails?.avatar}
                </tr>
                <tr>
                  {Object.keys(userDetails).length > 0 &&
                    userDetails?.createdAt}
                </tr>
                <tr>
                  {Object.keys(userDetails).length > 0 && userDetails?.roles}
                </tr>
                <tr>
                  {Object.keys(userDetails).length > 0 &&
                    userDetails?.listScore[0].score}
                </tr>
                <tr>
                  {Object.keys(userDetails).length > 0 &&
                    userDetails?.listScore[1].score}
                </tr>
                <tr>
                  {Object.keys(userDetails).length > 0 &&
                    userDetails?.listScore[2].score}
                </tr>
                <tr>
                  {Object.keys(userDetails).length > 0 &&
                    userDetails?.listScore[3].score}
                </tr>
              </td>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xl={2}>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginLeft: "40px" }}
          onClick={handleShow}
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          Edit User
        </button>
        <button
          type="button"
          className="btn btn-danger"
          style={{ marginLeft: "40px", marginTop: "10px" }}
          onClick={deleted}
        >
          Delete User
        </button>
      </CCol>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit User
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="form-update">
                <div className="form-group" style={{ display: "flex" }}>
                  <CCol xl={5}>
                    <label htmlFor="exampleInputEmail1">Username</label>
                  </CCol>
                  <CCol xl={5}>
                    <input
                      disabled="true"
                      type="username"
                      className="form-control inputText"
                      placeholder="Enter user name"
                      value={
                        Object.keys(userDetails).length > 0 &&
                        userDetails.username
                      }
                    />
                  </CCol>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <CCol xl={5}>
                    <label htmlFor="exp">EXP</label>
                  </CCol>
                  <CCol xl={5}>
                    <input
                      type="input"
                      className="form-control inputText"
                      placeholder="exp"
                      name="exp"
                      onChange={handleOnChange}
                      value={inputValues.exp}
                    />
                  </CCol>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <CCol xl={5}>
                    <label htmlFor="passwork">Avatar</label>
                  </CCol>
                  <CCol xl={5}>
                    <select
                      name="avatar"
                      onChange={handleOnChange}
                      class="form-control inputText"
                      defaultValue={inputValues.avatar}
                    >
                      <option value="cat">AVATAR_CAT</option>
                      <option value="dino">AVATAR_DINO</option>
                      <option value="dolphin">AVATAR_DOLPHIN</option>
                    </select>
                  </CCol>
                </div>
                <div
                  className="form-check"
                  style={{ display: "flex", marginLeft: "-20px" }}
                >
                  <CCol xl={5}>
                    <label htmlFor="roleAdmin"> Role Admin</label>
                  </CCol>
                  <CCol xl={5}>
                    <input
                      className="myinput large"
                      type="checkbox"
                      name="roleAdmin"
                      onChange={() => setChecked(!checked)}
                      defaultChecked={checked}
                    ></input>
                  </CCol>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                onClick={submit}
                className="btn btn-primary"
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </CRow>
  );
};

export default User;

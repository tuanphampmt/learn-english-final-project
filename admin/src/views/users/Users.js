import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Auth from "../pages/service/Auth";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";

const Users = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([1-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [dataUsers, setdataUsers] = useState([]);
  const [currentUser] = useState(Auth.getCurrentUser());

  const pageChange = (newPage) => {
    if (newPage === 0) newPage = 1;
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(
          `https://backend-kide.herokuapp.com/api/admin/users`,
          {
            headers: {
              Authorization: `Bearer ${currentUser.accessToken}`,
            },
          }
        );
        const { data } = res;
        if (data) {
          setdataUsers(data);
        }
      } catch (e) {}
    })();
  }, []);
  return (
    <CRow>
      <CCol xl={6}>
        <CCard>
          <CCardHeader>Users</CCardHeader>
          <CCardBody>
            <CDataTable
              items={dataUsers}
              fields={[
                { key: "id", _classes: "font-weight-bold" },
                "username",
                "roles",
                "createdAt",
              ]}
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/users/${item.id}`)}
              scopedSlots={{
                roles: (item) => (
                  <td>
                    {
                      <input
                        type="radio"
                        checked={
                          item.roles[0] === "ROLE_ADMIN" ||
                          item.roles[1] === "ROLE_ADMIN"
                        }
                      ></input>
                    }
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={dataUsers.length / 5}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xl={4}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="username"
              className="form-control inputText"
              placeholder="Enter user name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwork">Password</label>
            <input
              type="password"
              className="form-control inputText"
              placeholder="Password"
            />
          </div>
          <div class="form-check" style={{display: 'flex'}}>
            <label class="form-check-label" for="exampleCheck1">
              Role Admin
            </label>
            <input type="checkbox" class="form-check-input"></input>
          </div>
          <button
            style={{ marginTop: "30px", marginLeft: "120px" }}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </CCol>
      <CCol xl={2}>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginLeft: "80px" }}
        >
          Add User
        </button>
      </CCol>
    </CRow>
  );
};

export default Users;

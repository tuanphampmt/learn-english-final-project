import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import Auth from "../pages/service/Auth";

const User = ({ match }) => {
  const [currentUser] = useState(Auth.getCurrentUser());
  const [dataUsers, setdataUsers] = useState([]);
  const userDetails = [];
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(
          `https://backend-kide.herokuapp.com/api/admin/users/${match.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${currentUser.accessToken}`,
            },
          }
        );
        userDetails = res
          ? Object.entries(res)
          : [
              [
                "id",
                <span>
                  <CIcon className="text-muted" name="cui-icon-ban" /> Not found
                </span>,
              ],
            ];
        console.log(userDetails);
        
      } catch (e) {}
    })();
  }, []);
  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>User id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {userDetails.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;

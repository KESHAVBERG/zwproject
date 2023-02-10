import React, { useEffect } from 'react'

export const Home = () => {


  function getuserData() {
    var userManagement = window.catalyst.userManagement;
    var currentUserPromise = userManagement.getCurrentProjectUser();
    currentUserPromise
            .then((response) => {
                console.log(response.content);
            })
            .catch((err) => {
                console.log(err);
            });
  }

  useEffect(() => {
    getuserData()
  },[]);
  return (
    <div>Home</div>
  )
}

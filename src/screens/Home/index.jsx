import React from "react";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Header";
import SideNavLeft from "../../components/SideNavLeft";
import SideNavRight from "../../components/SideNavRight";
import Posts from "../../components/Posts";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <SideNavLeft />

          <main className="col-8">
            <Posts />
          </main>

          <SideNavRight />
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}

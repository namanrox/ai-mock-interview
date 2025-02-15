import React from "react";
import Header from "../dashboard/_components/Header";

function UpgradeLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36 text-center">{children}</div>
    </div>
  );
}

export default UpgradeLayout;

import React from 'react'
import EnInfo from '../encyinfo/EnInfo'
import EnStat from '../enstat/EnStat';
import EnDetail from "../endetail/EnDetail";

const Detailpage = () => {
  return (
    <div>
      <EnInfo />
      <div>
        <EnDetail  />
      </div>

      <EnStat />
    </div>
  );
}

export default Detailpage
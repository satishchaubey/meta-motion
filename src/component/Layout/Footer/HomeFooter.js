'use client'

import classes from "./Footer.module.css";
import Link from "next/link";
import { useState } from "react";

const HomeFooter = () => {
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <div className={classes.descDiv}>
        <p className={classes.responsiveSec}>
          <span className={classes.descHeading}> </span>
          <span className={classes.descBenefitSec}>
              Meta Motion 
          </span>
        </p>
        <div className={`${classes.responsiveSec} pb-0`}>
          {/* <div className={classes.summarySec}>
            {
              !readMore ? <span id="open" onClick={() => {
                setReadMore(true)
              }}><b>read more...</b></span> :
                <>
                  <p>
                  Meta Motion
                  </p>
                  <span id="open" onClick={() => {
                    setReadMore(false)
                  }}><b>read less</b></span>
                </>
            }
          </div> */}
        </div>
        {/* </details> */}

      </div>
    </>
  );
};

export default HomeFooter;

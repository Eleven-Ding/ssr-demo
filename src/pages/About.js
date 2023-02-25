import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPositionList } from "../store/actions";

function About(props) {
  // useEffect(() => {
  //   // 能不能再后端执行
  //   props.getPositionList();
  // }, []);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 2000);
  }, []);
  return (
    <div>
      <h1>About</h1>
      {domLoaded &&
        props.position?.map((item) => {
          return (
            <>
            <h1>Hello</h1>
              <div key={item.article_id}>
                <div>{item.title}</div>
                <img
                  src={item.faceUrl}
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </>
          );
        })}
    </div>
  );
}
About.loadData = (store) => {
  return store.dispatch(getPositionList());
};
export default connect((state) => ({ position: state?.position }), {
  getPositionList,
})(About);

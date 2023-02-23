import React from "react";
import { connect } from "react-redux";
import { getPositionList } from "../store/actions";
import { useEffect } from "react";

function About(props) {
  // useEffect(() => {
  //   // 能不能再后端执行
  //   props.getPositionList();
  // }, []);
  return (
    <div>
      <h1>About</h1>
      {props.position?.map((item) => {
        return (
          <div key={item.article_id}>
            <div>{item.title}</div>
            <img src={item.faceUrl} style={{ width: "50px", height: "50px" }} />
          </div>
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

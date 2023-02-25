export const GET_POSITION = "GET_POSITION";
import axios from "axios";

export const changePosition = (data) => {
  return {
    type: GET_POSITION,
    data,
  };
};
export const getPositionList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://www.dingshiyi.top:9002/article/get_articles?limit=8&page=1&type=1"
      )
      .then((res) => {
        dispatch(changePosition(res.data.data.articles));
      });
  };
};

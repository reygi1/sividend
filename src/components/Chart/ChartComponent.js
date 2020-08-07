import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chart from "./Chart";
import { getData } from "./utils";
import SpinnerBasic from "../SpinnerBasic";
import { chartChange } from "../../reducers/chartReducer";

const ChartComponent = () => {
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stock);
  const chart = useSelector((state) => state.chart);

  useEffect(() => {
    getData(stock).then((data) => {
      dispatch(chartChange(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stock]);

  if (chart == null) {
    return <SpinnerBasic />;
  }
  return <Chart data={chart} />;
};

export default ChartComponent;

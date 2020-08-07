import React from "react";
import PropTypes from "prop-types";

import { Card } from "@uifabric/react-cards";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart, ZoomButtons } from "react-stockcharts";
import {
  BarSeries,
  BollingerSeries,
  CandlestickSeries,
  LineSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  CrossHairCursor,
  EdgeIndicator,
  CurrentCoordinate,
  MouseCoordinateX,
  MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import {
  OHLCTooltip,
  BollingerBandTooltip,
  GroupTooltip,
} from "react-stockcharts/lib/tooltip";
import { ema, bollingerBand } from "react-stockcharts/lib/indicator";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

const bbAppearance = {
  display: "none",
  stroke: {
    top: "#964B00",
    middle: "#FF6600",
    bottom: "#964B00",
  },
  fill: "#4682B4",
};

class ChartD extends React.Component {
  render() {
    const width1 = document.getElementById("s1").getBoundingClientRect().width;
    const height = 404;
    const width = width1;
    const {
      type,
      data: initialData,
      mouseMoveEvent,
      ratio,
      panEvent,
      zoomEvent,
      clamp,
    } = this.props;

    const margin = { left: 70, right: 70, top: 20, bottom: 30 };

    const gridWidth = width - margin.left - margin.right;

    const showGrid = true;
    const yGrid = showGrid
      ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 }
      : {};

    const ema20 = ema()
      .id(0)
      .options({ windowSize: 20 })
      .merge((d, c) => {
        d.ema20 = c;
      })
      .accessor((d) => d.ema20);

    const ema50 = ema()
      .id(2)
      .options({ windowSize: 50 })
      .merge((d, c) => {
        d.ema50 = c;
      })
      .accessor((d) => d.ema50);

    const bb = bollingerBand()
      .merge((d, c) => {
        d.bb = c;
      })
      .accessor((d) => d.bb);

    const calculatedData = bb(ema20(ema50(initialData)));
    const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
      (d) => d.date
    );
    const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
      calculatedData
    );

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const xExtents = [start, end];

    return (
      <Card
        styles={{
          root: {
            background: "white",
            borderTop: "5px solid #0078d4",
            width: `${width1}`,
            maxWidth: "2000px",
          },
        }}
      >
        {" "}
        <Card.Item tokens={{ width: "100%" }}>
          <ChartCanvas
            height={height}
            panEvent={panEvent}
            zoomEvent={zoomEvent}
            clamp={clamp}
            width={width}
            ratio={ratio}
            margin={margin}
            type={type}
            data={data}
            xScale={xScale}
            xAccessor={xAccessor}
            displayXAccessor={displayXAccessor}
            xExtents={xExtents}
            mouseMoveEvent={mouseMoveEvent}
            seriesName="chart"
          >
            <Chart
              id={1}
              height={325}
              yExtents={[
                (d) => [d.high, d.low],
                bb.accessor(),
                ema20.accessor(),
                ema50.accessor(),
              ]}
              padding={{ top: 10, bottom: 20 }}
            >
              <YAxis
                axisAt="right"
                orient="right"
                ticks={5}
                {...yGrid}
                inverted={true}
                tickStroke="#FFFFFF"
                zoomEnabled={zoomEvent}
              />
              <XAxis
                axisAt="bottom"
                orient="bottom"
                showTicks={true}
                outerTickSize={0}
                opacity={0.5}
                zoomEnabled={zoomEvent}
              />

              <MouseCoordinateY
                at="right"
                orient="right"
                displayFormat={format(".2f")}
              />

              <CandlestickSeries
                stroke={(d) => (d.close > d.open ? "#6BA583" : "#DB0000")}
                wickStroke={(d) => (d.close > d.open ? "#6BA583" : "#DB0000")}
                fill={(d) => (d.close > d.open ? "#6BA583" : "#DB0000")}
              />

              <LineSeries
                yAccessor={ema20.accessor()}
                stroke={ema20.stroke()}
              />
              <LineSeries
                yAccessor={ema50.accessor()}
                stroke={ema50.stroke()}
              />

              <BollingerSeries yAccessor={(d) => d.bb} {...bbAppearance} />
              <CurrentCoordinate
                yAccessor={ema20.accessor()}
                fill={ema20.stroke()}
              />
              <CurrentCoordinate
                yAccessor={ema50.accessor()}
                fill={ema50.stroke()}
              />

              <EdgeIndicator
                itemType="last"
                orient="right"
                edgeAt="right"
                yAccessor={(d) => d.close}
                fill={(d) => (d.close > d.open ? "#6BA583" : "#DB0000")}
              />

              <OHLCTooltip origin={[-40, -10]} />
              {}
              <GroupTooltip
                layout="vertical"
                origin={[-38, 15]}
                verticalSize={20}
                onClick={(e) => console.log(e)}
                options={[
                  {
                    yAccessor: ema20.accessor(),
                    yLabel: `${ema20.type()}(${ema20.options().windowSize})`,
                    valueFill: ema20.stroke(),
                    withShape: true,
                  },
                  {
                    yAccessor: ema50.accessor(),
                    yLabel: `${ema50.type()}(${ema50.options().windowSize})`,
                    valueFill: ema50.stroke(),
                    withShape: true,
                  },
                ]}
              />
              <BollingerBandTooltip
                origin={[-38, 60]}
                yAccessor={(d) => d.bb}
                options={bb.options()}
              />
              <ZoomButtons onReset={this.handleReset} />
            </Chart>
            <Chart
              id={2}
              yExtents={(d) => d.volume}
              height={100}
              origin={(w, h) => [0, h - 129]}
            >
              <YAxis
                axisAt="left"
                orient="left"
                ticks={5}
                tickFormat={format(".2s")}
                zoomEnabled={zoomEvent}
              />
              <BarSeries
                yAccessor={(d) => d.volume}
                fill={(d) => (d.close > d.open ? "#6BA583" : "#DB0000")}
              />
              <MouseCoordinateX
                at="bottom"
                orient="bottom"
                displayFormat={timeFormat("%Y-%m-%d")}
              />
              <MouseCoordinateY
                at="left"
                orient="left"
                displayFormat={format(".4s")}
              />
            </Chart>

            <CrossHairCursor stroke="#FFFFFF" />
          </ChartCanvas>
        </Card.Item>{" "}
      </Card>
    );
  }
}
ChartD.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

ChartD.defaultProps = {
  type: "hybrid",
  mouseMoveEvent: true,
  panEvent: true,
  zoomEvent: true,
  clamp: false,
};

ChartD = fitWidth(ChartD);

export default ChartD;

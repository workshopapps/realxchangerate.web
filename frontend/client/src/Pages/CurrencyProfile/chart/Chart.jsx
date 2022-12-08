import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  StyledChartTop,
  StyledChartWrapper,
  StyledTooltip,
  StyledTotalTvl,
} from "./Chart.styled";
import { ReactComponent as TvlGrowth } from "./tvl_small_growth.svg";
import { useLocation, useParams } from "react-router-dom";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <StyledTooltip>
        <p>
          {"$"}
          {`${payload[0].value}`}
        </p>
      </StyledTooltip>
    );
  }

  return null;
};

const dar = [
  {
    name: "JAN",
    tvl: 2300,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    tvl: 2800,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    tvl: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    tvl: 2500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    tvl: 3200,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    tvl: 4000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "JUL",
    tvl: 3000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "AUG",
    tvl: 3600,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "SEP",
    tvl: 3300,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "OCT",
    tvl: 2500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "NOV",
    tvl: 2000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "DEC",
    tvl: 3700,
    pv: 4300,
    amt: 2100,
  },
];
export default function Chart() {
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    country: "Loading",
    currency: "Loading",
  });
  const path = useLocation();
  console.log(path.pathname.split("/")[1]);
  useEffect(() => {
    console.log("hello World");
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          `https://api.streetrates.hng.tech/api/rate/history/${
            path.pathname.split("/")[1]
          }?limit=15`
        );
        if (response && response.status === 200) {
          const chartData = [
            ...response.data.data.rates.map((chartDat) => {
              return {
                name: `${chartDat.last_updated.split("T")[1].split(":")[0]} H`,
                tvl: chartDat.parallel_buy,
                pv: 2400,
                amt: 2400,
              };
            }),
          ];
          setData(chartData);
          console.log(chartData);
          setValues({
            country: response.data.data.currency.country,
            currency: response.data.data.currency.isocode,
            symbol: response.data.data.currency.symbol,
          });
          // return response.data;
        }
      } catch (error) {
        console.error(error.response);
      }

      // console.log()
    };
    fetchTrending();
    const intervalId = setInterval(fetchTrending, 3600000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Name: response.data.data.rates[0].last_updated.split("T")[1].split(":")[0]
  // tvl: response.data.data.rates[0].parallel_buy
  return (
    <StyledChartWrapper>
      <StyledChartTop>
        <StyledTotalTvl>
          <h4>{values.country}</h4>
          <h2>
            {values.currency} {values.symbol}
          </h2>

          <div>
            {/* <p className="totalTvl">$41.58b</p> */}
            {/* <p className="growth">
              <TvlGrowth width="7.68px" height="7.68px" />
              1.3%
            </p> */}
            <p className="compare">VS HOURLY</p>
          </div>
        </StyledTotalTvl>
      </StyledChartTop>

      <div
        style={{
          height: 220,
          width: "100%",
        }}
      >
        <ResponsiveContainer>
          <AreaChart
            data={data ? data : dar}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              opacity={0.5}
              vertical={false}
              strokeDasharray="3 3"
            />

            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0062FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#5496FF80" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <XAxis
              axisLine={false}
              tickLine={false}
              style={{
                color: "#615E83",
                fontSize: "10px",
                textTransform: "uppercase",
              }}
              dataKey="name"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              orientation="right"
              style={{ color: "#615E83", fontSize: "10px" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="tvl"
              stroke="#0062FF"
              fill="url(#colorValue)"
              //   fill="#5496FF80"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </StyledChartWrapper>
  );
}

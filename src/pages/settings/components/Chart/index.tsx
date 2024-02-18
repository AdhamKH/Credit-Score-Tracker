import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { BigSection } from "./style";
import MoreInfo from "../moreInfo";
type MyData = {
  date: Date;
  value: number;
};
const data: MyData[] = [
  { date: new Date(2021, 1, 1), value: 50 },
  { date: new Date(2022, 1, 2), value: 70 },
  { date: new Date(2023, 1, 3), value: 80 },
  { date: new Date(2024, 1, 4), value: 123 },
  // ... more data points
];
const Chart = () => {
  const [hoveredData, setHoveredData] = useState<MyData | null>(null);

  const handleMouseEnter = (data: MyData) => {
    setHoveredData(data);
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BigSection>
      <div className="container">
        <div className="btnContainer">
          <h1>historical chart</h1>
          <button onClick={handleOpen}>more details</button>
        </div>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="date"
            tickFormatter={(tick) =>
              tick.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            }
          />
          <YAxis />
          {/* <Tooltip content={<CustomTooltip hoveredData={hoveredData} />} /> */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            // onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </LineChart>
      </div>
      <MoreInfo open={open} handleClose={handleClose} />
    </BigSection>
  );
};

export default Chart;

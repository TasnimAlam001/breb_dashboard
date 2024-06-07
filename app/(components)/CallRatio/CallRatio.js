"use client"
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Text } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'Close', value: 80, color: '#ff0000' },
  { name: 'Pause', value: 45, color: '#00ff00' },
  { name: 'In Call', value: 25, color: '#0000ff' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50; // Example value, adjust as needed

const renderNeedle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key="path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />,
  ];
};

export default function CallRatio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {renderNeedle(value, data, cx, cy, iR, oR, '#d0d000')}
      <circle key="red-circle" cx={cx - 100} cy={cy + 120} r={10} fill="#ff0000" />
      <circle key="green-circle" cx={cx} cy={cy + 120} r={10} fill="#00ff00" />
      <circle key="blue-circle" cx={cx + 100} cy={cy + 120} r={10} fill="#0000ff" />
      {data.map(({ name, color }, index) => (
        <Text
          key={`label-${index}`}
          x={cx - 100 + (index * 100)} // Adjust position according to circle's x position
          y={cy + 140} // Adjust position below the circles
          fill={color}
          textAnchor="middle"
          fontSize={12}
        >
          {name}
        </Text>
      ))}
    </PieChart>
  );
}

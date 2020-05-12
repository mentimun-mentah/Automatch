import { HorizontalBar } from "react-chartjs-2";

const state = {
  labels: ["> 5 years", " 3 - 5 years", "1 - 3 years", "< 1 years"],
  datasets: [{ backgroundColor: "#f87979", data: [40, 20, 12, 39] }],
};

const BarHor = () => {
  return (
    <div>
      <HorizontalBar
        data={state}
        height={260}
        options={{
          legend: {
            display: false,
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default BarHor;


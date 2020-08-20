import { HorizontalBar } from "react-chartjs-2";

const BarHor = ({ lengthOfWork }) => {
  let label = [];
  let vLength = [];
  for (let [key, value] of Object.entries(lengthOfWork)) {
    label.push(key.slice(0,20));
    vLength.push(value);
  }
  const state = {
    labels: label,
    datasets: [{ backgroundColor: "#f87979", data: vLength }],
  };
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

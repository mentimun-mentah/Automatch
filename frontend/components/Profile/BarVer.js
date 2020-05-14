import { Bar } from "react-chartjs-2";

const BarVer = ({ jobSummary }) => {
  let label = [];
  let vJob = [];
  for (let [key, value] of Object.entries(jobSummary)) {
    label.push(key);
    vJob.push(value);
  }
  const state = {
    labels: label,
    datasets: [
      {
        backgroundColor: "#f87979",
        data: vJob,
      },
    ],
  };
  return (
    <div>
      <Bar
        data={state}
        height={120}
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

export default BarVer;

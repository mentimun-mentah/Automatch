import { Bar } from "react-chartjs-2";

const state = {
  labels: [
    "Front End Developer",
    "Backend Developer",
    "UI Designer",
    "Software Engineer Intern",
    "Graphic Designer",
    "Data Science",
    "Android Engineer",
    "Content Writer",
    "SEO Manager",
  ],
  datasets: [
    { backgroundColor: "#f87979", data: [70, 45, 50, 39, 25, 40, 39, 80, 40] },
  ],
};

const BarVer = () => {
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


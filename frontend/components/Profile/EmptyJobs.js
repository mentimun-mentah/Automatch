import Link from "next/link";

const EmptyJobs = () => (
  <tr>
    <td className="pt-3">
      <div className="text-center pt-4 pb-4 border">
        <img src="https://image.flaticon.com/icons/svg/2924/2924769.svg" width="120" className="rounded mx-auto d-block" alt="jobs" />
        <p className="font-weight-bold">there's no jobs here.</p>
        <Link href="/jobs" as="/jobs">
          <button className="btn btn-outline-primary btn-sm color-white" role="button">
            Let's start scraping!
          </button>
        </Link>
      </div>
    </td>
  </tr>
);

export default EmptyJobs;

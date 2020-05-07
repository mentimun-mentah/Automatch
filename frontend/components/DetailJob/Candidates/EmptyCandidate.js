const EmptyCandidate = () => (
  <tr>
    <td className="p-0">
      <div className="text-center pt-5 pb-5 border">
        <img
          src="https://image.flaticon.com/icons/svg/909/909235.svg"
          width="120"
          className="rounded mx-auto d-block"
          alt="np applicant"
        />
        <p className="font-weight-bold">there's no candidate.</p>
      </div>
    </td>
  </tr>
);

export default EmptyCandidate;

function HatsList(props) {
  if (props.hats === undefined) {
    return null;
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Fabric</th>
          <th>Style Name</th>
          <th>Color</th>
          <th>Picture</th>
          {/* <th>Location</th> */}
        </tr>
      </thead>
      <tbody>
        {props.hats.map((hat) => {
          return (
            <tr key={hat.id}>
              <td>{hat.fabric}</td>
              <td>{hat.style_name}</td>
              <td>{hat.color}</td>
              <td>{hat.picture_url}</td>
              {/* <td>{hat.location}</td> */}
              <td>
                <button>Delete?</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default HatsList;

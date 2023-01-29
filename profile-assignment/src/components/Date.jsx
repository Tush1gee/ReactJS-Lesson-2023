export function FormattedDate(props) {
  let date = new Date(props.date);
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div>
      {formattedDate}
    </div>
  );
}


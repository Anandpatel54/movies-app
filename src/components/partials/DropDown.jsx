const DropDown = ({ title, options }) => {
  return (
    <div className="select">
      <select defaultValue="0" name="formet" id="formet">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o} disabled>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;

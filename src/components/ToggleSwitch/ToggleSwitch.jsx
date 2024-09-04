import "./ToggleSwitch.css";

function ToggleSwitch() {
  console.log("toggle");
  return (
    <label htmlFor="" className="switch">
      <input type="checkbox" className="switch__box" />
      <span>
        <p className="switch__f">F</p>
        <p className="switch__c">C</p>
      </span>
    </label>
  );
}

export default ToggleSwitch;

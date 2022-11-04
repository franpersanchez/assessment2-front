import "./PassengerForm.css";

function PassengerForm() {
  return (
    <div id="bg">
      <div class="module">
        <form class="form">
          <input type="text" placeholder="First Name" class="textbox" />
          <input type="text" placeholder="Last Name" class="textbox" />
          <input type="text" placeholder="Nationality" class="textbox" />
          <input type="text" placeholder="NIF or Passport" class="textbox" />
          <input
            type="text"
            placeholder="Age range"
            class="textbox"
            list="ageRange"
          />
          <datalist id="ageRange">
            <option> Less than 2 years</option>
            <option> Between 2 and 9 years</option>
            <option> More than 9 years</option>
          </datalist>
          <button type="button" class="button">
            {" "}
            Next{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PassengerForm;

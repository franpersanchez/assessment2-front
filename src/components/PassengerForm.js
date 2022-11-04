import "./App.css";

function App() {
  return (
    <div class="box">
      <form>
        <label>
          Name:
          <input type="text" id="origin" name="origin" />
        </label>

        <br></br>
        <br></br>

        <label>
          Surname:
          <input type="text" id="destination" name="destination" />
        </label>

        <br></br>
        <br></br>

        <label>
          Nationality:
          <input type="text" id="destination" name="destination" />
        </label>

        <br></br>
        <br></br>

        <label>
          NIF:
          <input type="text" id="destination" name="destination" />
        </label>

        <br></br>
        <br></br>

        <label>
          Age:
          <select name="dropdown">
            <option value="<2 years old" selected> 2 years old or younger
            </option>
            <option value="2<>9">Between 2 and 9 years old</option>
            <option value=">9" selected>  9 years and older</option>
          </select>
          >
        </label>

        <br></br>
        <br></br>

        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;

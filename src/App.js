import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="container">
      <form>
        <table className="table">
          <caption>Book Your Appointment</caption>
          <tbody>
            <tr>
              <th><label htmlFor="name">Name</label></th>
              <td>
                <input type="text" id="firstName" placeholder="First Name" size="22" />
                <input type="text" id="surname" placeholder="Surname" size="22" />
              </td>
            </tr>

            <tr>
              <th><label htmlFor="email">Email</label></th>
              <td>
                <input type="email" id="email" placeholder="Enter your Email id.." size="50" required />
              </td>
            </tr>

            <tr>
              <th><label htmlFor="mobile">Mobile No</label></th>
              <td>
                <input type="tel" id="mobile" maxLength="10" size="10" required />
              </td>
            </tr>

            <tr>
              <th><label htmlFor="date">Appointment Date</label></th>
              <td>
                <input type="date" id="date" />
              </td>
            </tr>

            <tr>
              <th><label htmlFor="time">Appointment Time</label></th>
              <td>
                <input type="time" id="time" />
              </td>
            </tr>

            <tr>
              <th><label htmlFor="add">Address</label></th>
              <td>
                <textarea id="add" style={{ resize: 'none' }} />
              </td>
            </tr>

            <tr>
              <th><label htmlFor="country">Country</label></th>
              <td>
                <select id="country">
                  <option></option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Russia</option>
                  <option>India</option>
                </select>
              </td>
            </tr>

            <tr>
              <th colSpan="2" style={{ textAlign: 'center' }}>
                <input type="submit" value="Submit" className="btn" />
                <input type="reset" value="Reset" className="btn "/>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;

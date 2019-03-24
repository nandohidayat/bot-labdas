import axios from "axios";
import { $ } from "./bling";

function addSchedule(e) {
  e.preventDefault();
  axios
    .post(this.action)
    .then(res => {
      $("#day").selectedIndex = 0;
      $("#time").selectedIndex = 0;
      $("#lab").selectedIndex = 0;
      $("#assistances[0][assistance]").selectedIndex = 0;
      $("#assistances[1][assistance]").selectedIndex = 0;
      $("#assistances[2][assistance]").selectedIndex = 0;
    })
    .catch(err => console.log(err));
}

export default addSchedule;

// exports.deleteSchedule = e => {
//   e.preventDefault();
//   axios
//     .post(this.action)
//     .then(res => {})
//     .catch(err => console.log(err));
// };

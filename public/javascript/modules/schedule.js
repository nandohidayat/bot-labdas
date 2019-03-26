import axios from "axios";
import { $, $$ } from "./bling";

function fillForm(e) {
  axios
    .get(`/schedule/${e.target.id}`)
    .then(res => {
      $("select#day").value = res.data.day;
      $("select#time").value = `${String(res.data.hour).padStart(
        2,
        0
      )}:${String(res.data.minute).padStart(2, 0)}`;
      $("select#lab").value = res.data.lab;
      $("select#assistances-0").value = res.data.assistances[0].assistance._id;
      $("select#assistances-1").value = res.data.assistances[1].assistance._id;
      $("select#assistances-2").value = res.data.assistances[2].assistance._id;
      $(".schedule-form").action = `/schedule/${e.target.id}`;
      $("#schedule-submit").innerHTML = "Save";
    })
    .catch(e => console.log(e));
}

export { fillForm };

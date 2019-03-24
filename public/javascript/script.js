import { $, $$ } from "./modules/bling";
import schedule from "./modules/schedule";

$$("form.schedule-form").on("submit", schedule);
// $$("form.delete-schedule").on("submit", schedule.deleteSchedule);

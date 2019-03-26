import { $, $$ } from "./modules/bling";
import { fillForm } from "./modules/schedule";

$$("a.edit-btn").on("click", fillForm);

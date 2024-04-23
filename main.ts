import { delay } from "./util.ts";

let counter = 0;
while (counter < 5) {
  console.log(`Hello World! ${counter++}`);
  await delay(1000);
}

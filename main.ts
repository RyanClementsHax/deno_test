let counter = 0;
while (true) {
  await delay(1000);
  console.log(`Hello World! ${counter++}`);
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

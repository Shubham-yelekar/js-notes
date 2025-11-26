function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  try {
    const data = await fetchData();
    console.log("Data:", await data);
  } catch {
    throw new Error("Something went wrong!");
  }
  // const data = fetchData().then((res) => {
  //   console.log("Then block:", res);
  //   throw new Error("Something went wrong!");
  // });

  // console.log("Data:", await data);
}

start();

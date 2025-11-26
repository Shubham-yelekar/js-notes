const config = {
  appName: "CoolApp",
  version: "1.0",
};

function updateConfig(newConfig) {
  Object.assign(config, newConfig);
}

updateConfig({ version: "2.0" });

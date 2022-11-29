// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
};

const fuzzyMatch = (drivers, name) =>
  drivers.filter((driver) => driver.startsWith(name));

const matchName = (drivers, name) =>
  drivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());

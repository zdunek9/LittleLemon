export const submitAPI = function (formData) {
  return true;
};

export const getDateObject = () => {
  let startTime = new Date();
  startTime.setHours(17, 0, 0);
  let endTime = new Date();
  endTime.setHours(22, 0, 0);
  let timeInterval = 30;
  let timeArray = [];
  for (
    let time = startTime;
    time <= endTime;
    time.setMinutes(time.getMinutes() + timeInterval)
  ) {
    let timeString = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    timeArray.push({ value: timeString, label: timeString });
  }
  return timeArray;
};

export const getOccasion = [
  { value: "Birthday", label: "Birthday" },
  { value: "Anniversary", label: "Anniversary" },
];

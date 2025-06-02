export const getRiskGrade = (risk) => {
  switch (risk) {
    case "0":
      return "안전";
    case "1":
      return "주의";
    case "2":
      return "경계";
    case "3":
      return "심각";
    default:
      return "오류";
  }
};

export const riskColor = (risk) => {
  switch (risk) {
    case "0":
      return "green";
    case "1":
      return "yellow";
    case "2":
      return "orange";
    default:
      return "red";
  }
}

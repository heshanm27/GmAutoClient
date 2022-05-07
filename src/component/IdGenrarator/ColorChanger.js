export function colorchange(status) {
  switch (status) {
    case "Complete":
      return "success";
    case "Pending":
      return "warning";
    case "Approved":
      return "info";
    case "Rejected":
      return "error";
    case "Valid":
      return "success";
    case "Expired":
      return "error";
    case "Claimed":
      return "warning";
  }
}

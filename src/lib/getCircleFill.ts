export const getCircleFill = (label: string): string => {
    switch (label) {
      case ("High Value").replace(" ", ""):
        return "currentColor"; 
      case "Priority":
        return "currentColor"; 
      case "Warm":
        return "currentColor"; 
      case "Pilot":
        return "currentColor";   
      default:
        return "currentColor";
    }
  };
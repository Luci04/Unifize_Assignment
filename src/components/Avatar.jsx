import React from "react";

const Avatar = ({ name, size = 28, fontSize = 10 }) => {
  // Function to generate initials from the name
  const getInitials = (name) => {
    const words = name.split(" ");
    const initials = words
      .map((word) => word[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  // Generate a random background color
  const generateColor = (name) => {
    const colors = ["#cfe4fd", "#d6d8fd", "#d1e0fd", "#ceeafd", "#d21242"];
    const index = name.length % colors.length;
    return colors[index];
  };

  const initials = getInitials(name);
  const bgColor = generateColor(name);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: "#000",
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: fontSize,
        marginRight: 15,
      }}
    >
      {initials}
    </div>
  );
};

export default Avatar;

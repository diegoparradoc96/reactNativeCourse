import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstName, lastName } = props;

  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
}

Saludar.defaultProps = {
  firstName: "Agustin",
  lastName: "Navarro",
};

Saludar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};

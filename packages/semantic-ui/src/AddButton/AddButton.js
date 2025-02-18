import React from "react";
import { Button, Icon } from "semantic-ui-react";

function AddButton(props) {
  return (
    <Button {...props} icon size="tiny" labelPosition="left">
      <Icon name="plus" />
      { props.addButtonText || "Add Item" }
    </Button>
  );
}

export default AddButton;

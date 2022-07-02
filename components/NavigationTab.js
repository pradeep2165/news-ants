import React from "react";
// import Link from "react-router-dom";
import { Link, HStack, Button } from "native-base";

export default function NavigationTab() {
  return (
    <HStack>
      <Link to="/genral" mx="1">
        <Button>Genral</Button>
      </Link>

      <Link to="/business" mx="1">
        <Button>Business</Button>
      </Link>
      <Link to="/healthscience" mx="1">
        <Button>Healthscience</Button>
      </Link>
      <Link to="/sports" mx="1">
        <Button>Sports</Button>
      </Link>

      <Link to="/technology" mx="1">
        <Button>Technology </Button>
      </Link>
    </HStack>
  );
}

// The category you want to get headlines for. Possible options: business entertainment general healthscience sports technology. Note: you can't mix this param with the sources param.

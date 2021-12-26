import { ListItem } from "@mui/material";

const NavbarFlag = ({ changeLanguage, flag, name }) => {
  return (
    <ListItem>
      <img
        onClick={e => changeLanguage(e)}
        src={flag}
        alt={name + "-flag"}
        name={name}
      />
    </ListItem>
  );
};

export default NavbarFlag;

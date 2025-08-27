import Button from '@mui/material/Button';

const ButtonWrapper = ({ icon = null, children, variant = 'contained' }) => {
  return (
    <Button className="relative" variant={variant} endIcon={icon && icon}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;

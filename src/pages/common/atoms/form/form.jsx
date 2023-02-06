import { StyledForm } from './styled';

const Form = ({ children, onFormSubmit, ...props }) => {
  if (typeof children === 'undefined') {
    return null;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onFormSubmit();
  };

  return (
    <StyledForm onSubmit={handleFormSubmit} {...props}>
      {children}
    </StyledForm>
  );
};

export default Form;

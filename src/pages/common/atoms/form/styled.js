import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

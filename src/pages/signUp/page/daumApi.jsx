import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const DaumApi = (props) => {
  const { setDaumApi } = props;
  const { setValue } = props;
  const onCompletePost = (data) => {
    setDaumApi(false);
    setValue('roadAddr', data.address);
    setValue('jibun', data.zonecode);
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    left: '35%',
    top: '10%',
    width: '600px',
    height: '600px',
    border: '1px solid black',
  };

  return (
    <>
      <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
      <StyledBtn
        type="button"
        onClick={() => {
          setDaumApi(false);
        }}
      >
        닫기
      </StyledBtn>
    </>
  );
};

const StyledBtn = styled.button`
  display: block;
  position: absolute;
  top: 7%;
  left: 35%;
  float: right;
  width: 50px;
  height: auto;
`;
export default DaumApi;

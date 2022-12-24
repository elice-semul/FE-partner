import DaumPostcode from "react-daum-postcode";

const DaumApi = (props) => {

    const {setAddress} = props;
    const {setDaumApi} = props;

    const onCompletePost = (data) => {
        setAddress(data.address);
        setDaumApi(false);
    };

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "20%",
        width: "300px",
        height: "400px",
        padding: "3px",
        zIndex: 100,
    };

    return (
        <DaumPostcode
                style={postCodeStyle}
                onComplete={onCompletePost}
            />
    );
};

export default DaumApi;
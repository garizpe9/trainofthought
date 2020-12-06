import React, { useEffect } from "react";
import useUserMedia from "../../hooks/UseUserMedia/UseUserMedia";

const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: "environment" },
};

const cameraStyle = {
    borderRadius: "50%",
    objectFit: "cover",
    width: "500px",
    height: "500px"
};

export const CameraComponent = (props) => {
    const { videoRef, onReady }= props;
    const mediaStream = useUserMedia(CAPTURE_OPTIONS);

    const handleCanPlay = () => {
        videoRef.current.play();
        onReady();
    }

    useEffect(() => {
        if (mediaStream && videoRef.current) {
            videoRef.current.srcObject = mediaStream;
        }
    }, [mediaStream, videoRef]);


    return (
        <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted style={cameraStyle} />
    );
};
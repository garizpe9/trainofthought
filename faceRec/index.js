const main = async () => {
    // load the face detection model
    await faceapi.nets.tinyFaceDetector.load('/');
    // load the face expression detection model
    await faceapi.loadFaceExpressionModel('/');

    // get canvas and video elements
    const canvasElement = document.getElementById("overlay");
    const videoElement = document.querySelector("video");

    // get Webcam video stream
    const constraints = { audio: false, video: {} };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    // what to do when the video stream is available
    // AKA facial recogition 
    const onPlay = async () => {

        const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 512, scoreThreshold: 0.5 });
        const result = await faceapi.detectSingleFace(videoElement, options).withFaceExpressions();

        if (result) {
            const dims = faceapi.matchDimensions(canvasElement, videoElement, true);
            const resizedResult = faceapi.resizeResults(result, dims);
            const minConfidence = 0.05;
            faceapi.draw.drawDetections(canvasElement, resizedResult);
            faceapi.draw.drawFaceExpressions(canvasElement, resizedResult, minConfidence);
        }

        setTimeout(() => onPlay());
    }

    videoElement.srcObject = stream;
    videoElement.onloadedmetadata = () => {
        videoElement.play();
    };
    videoElement.onplay = onPlay;

}

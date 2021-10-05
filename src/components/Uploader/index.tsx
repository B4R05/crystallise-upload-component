
import { useState, useEffect } from 'react';
import { Button, Progress, Segment, Image, Message } from 'semantic-ui-react';
import CompressionSlider from './parts/CompressionSlider';
import FileInput from './parts/FileInput';

let progressInterval: any = null;

const Uploader = () => {
  const [imgPreview, setImgPreview] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [toggleProgress, setToggleProgress] = useState<boolean>(false);
  const [uploadSuccess, setuploadSuccess] = useState<boolean>(false);
  
  useEffect(() => {
    if (toggleProgress) {
      progressInterval = setInterval(() => {
        setProgress(prev => prev + 5);
      }, 100);
    }
  }, [toggleProgress]);
 
  useEffect(() => {
    if (progress >= 100) {
      setuploadSuccess(true);
      setTimeout(() => clearStates(), 3000);
    }
  }, [progress]);

  const clearStates = (): void => {
    clearInterval(progressInterval);
    setToggleProgress(false);
    setImgPreview('');
    setProgress(0);
    setuploadSuccess(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return;
    setImgPreview(URL.createObjectURL(e.target.files[0]));
    setProgress(0);
  };

  const handleDummyUpload = (): void => {
    setToggleProgress(true); 
  };

  return (
    <Segment placeholder padded>
      <FileInput onChange={handleFileInputChange}/>
      <br/>
      {imgPreview && <Image src={imgPreview} size="small" bordered/>}
      <br/>
      {progress > 0 && <Progress percent={progress} indicating />}
      {imgPreview && <CompressionSlider/>}
      <br/>
      <Button 
        primary 
        disabled={!imgPreview || toggleProgress ? true : false} 
        onClick={handleDummyUpload}>
        Upload
      </Button>
      {uploadSuccess ? <Message success>Successfully uploaded file!</Message> : ''}
    </Segment>
  );
};

export default Uploader;
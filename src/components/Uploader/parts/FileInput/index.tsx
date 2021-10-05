
interface IFileInput {
  onChange: Function;
}

const FileInput = ({ onChange }: IFileInput) => {
  return (
    <input type="file" onChange={(e) => onChange(e)} /> 
  );
};

export default FileInput;


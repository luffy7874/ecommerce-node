function EditImagePreview({ filename }) {
    return (
        <img src={`http://localhost:3001/assets/upload/categories/${filename}`} alt="" width="150px" />
    );
}
export default EditImagePreview;
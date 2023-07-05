import { useParams } from "react-router-dom";
import Form from "../../FormHandler/Form";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as yup from "yup";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import CategoryForm from "./components/CategoryForm";
import ToastrMsg from "../../components/ToastrMsg";


//formik values
const initialValues = {
  category: "",
  image : null,
  old_img : "",
};

function EditCategory(){
    //importing axios methods using form class 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const form = new Form();

    //getting url parameter
    let { id } = useParams();

    //states are here
    const [files, setFiles] = useState([]);
    const [dropzoneError, setDropzoneError] = useState([]);
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState("");
    const [filename, setFilename] = useState("");

    //dropzone file settings
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
        accept: {
          'image/*': []
        },
        onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        },
        multiple: false
    });   

    // fatching category by id
    const fetchData = useCallback(async() => {
        await form.get(`/api/category/edit/${id}`).then(response =>{
            initialValues.category = response.name;
            initialValues.old_img = response.image;
            setFilename(response.image);
        })
    }, [id, form]);


  
    useEffect(() => {
        fetchData();
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [fetchData, files]);

    useEffect(() => {
      initialValues.image = files.length > 0 ? acceptedFiles[0] : null;
    }, [acceptedFiles, files.length]);
    
    
    const handleFormSubmit = (event) => {
      // console.log(initialValues); return false;
        if(initialValues.old_img == null && !initialValues.image){
          setDropzoneError('Please select image first');
          return false;
        }

        form.post(`/api/category/update/${id}`, initialValues)
          .then(response =>{
            setResponse(response);
            // setOpen(true);
          })
          .catch(error =>{
            setDropzoneError(error.message);
          })
        
    };


    const checkoutSchema = yup.object().shape({
      category: yup.string().required("Required"),
    })

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return (
        <>
            <Box m="20px">
                <Header title="Edit Category" />
                <CategoryForm
                    filename={filename}
                    handleFormSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    checkoutSchema={checkoutSchema}
                    dropzoneError={dropzoneError}
                    getRootProps={getRootProps}
                    getInputProps={getInputProps}
                    files={files}
                />

                <ToastrMsg
                    open={open}
                    handleClose={handleClose}
                    response={response}
                />
            </Box>
        </>
    );
}

export default EditCategory;
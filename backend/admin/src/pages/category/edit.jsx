import { useParams } from "react-router-dom";
import Form from "../../FormHandler/Form";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as yup from "yup";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import CategoryForm from "./components/CategoryForm";
import ToastrMsg from "../../components/ToastrMsg";

function EditCategory(){

    //importing axios methods using form class 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const form = new Form();

    //getting url parameter
    let { id } = useParams();

    //states are here
    const [category, setCategory] = useState("");
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

    //formik values
    const initialValues = {
        category: category,
        image : acceptedFiles.length > 0 ? acceptedFiles[0] : null,
        old_img : filename,
    };

    //fatching category by id
    const fetchData = useCallback(async() => {
        await form.get(`/api/category/edit/${id}`).then(response =>{
            setCategory(response.name);
            initialValues.category = category;
            setFilename(response.image);
        })
    }, [id, form]);


  
    useEffect(() => {
        fetchData()
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [fetchData, files]);

    useEffect(() => {
      initialValues.image = files.length > 0 ? acceptedFiles[0] : null;
    });
    
    
    const handleFormSubmit = (event) => {
      // console.log(initialValues); return false;
        if(!initialValues.image){
          setDropzoneError('Please select image first');
          return false;
        }

        form.post(`/api/category/edit`, initialValues)
          .then(response =>{
            setResponse(response);
            setOpen(true);
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
                    setCategory={setCategory}
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
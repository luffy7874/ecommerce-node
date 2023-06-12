import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, IconButton, Snackbar, TextField, Typography } from '@mui/material'
import { Formik } from "formik";
import * as yup from 'yup';
import Header from "../../components/Header";
import {useDropzone} from 'react-dropzone';
import { DropzoneContainer, Thumbnails, thumbsContainer } from '../../components/ImageUpload';
import Form from '../../FormHandler/Form';
import CloseIcon from '@mui/icons-material/Close';


const AddCategory = () => {
    const [category, setCategory] = useState("");
    const [files, setFiles] = useState([]);
    const [dropzoneError, setDropzoneError] = useState([]);
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState("");

    const form = new Form();

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
    const initialValues = {
        category: category,
        image : acceptedFiles.length > 0 ? acceptedFiles[0] : null
    };
  
    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    useEffect(() => {
      initialValues.image = files.length > 0 ? acceptedFiles[0] : null;
    }, [files]);
    
    
    const handleFormSubmit = (event) => {
        if(!initialValues.image){
          setDropzoneError('Please select image first');
          return false;
        }

        form.post(`/api/category/add`, initialValues)
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

    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
    
    return (
        <Box m="20px">
          <Header title="CREATE USER" subtitle="Create a New User Profile" />
    
          <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit,}) => (
              <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Category"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.category}
                        name="category"
                        error={!!touched.category && !!errors.category}
                        helperText={touched.category && errors.category}
                        sx={{ gridColumn: "span 4" }}
                        onInput={(event) => {setCategory(event.target.value)}}
                    />

                    <Box sx={{ gridColumn: "span 4" }}>
                        <DropzoneContainer {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} name='image'/>
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </DropzoneContainer>
                        <Typography variant='p' color="error">
                          {dropzoneError}
                        </Typography>
                        <aside style={thumbsContainer}>
                            {files.length > 0 && <Thumbnails files={files} />}
                        </aside>
                    </Box>
                    <Box display="flex" justifyContent="right" sx={{ gridColumn: "span 4" }}>
                        <Button style={{ color: "#fff", padding: '10px 30px' }} type="submit" color="success" variant="contained">
                            Create Category
                        </Button>
                    </Box>
                </Box>
              </form>
            )}
          </Formik>

          <Snackbar
            open={open}
            autoHideDuration={4000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
          >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {response}
            </Alert>
          </Snackbar>
        </Box>
      );
}

export default AddCategory;
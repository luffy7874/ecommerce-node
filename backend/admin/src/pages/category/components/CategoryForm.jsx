import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { DropzoneContainer, Thumbnails, thumbsContainer } from "../../../components/ImageUpload";
import EditImagePreview from "../../../components/EditImagePreview";


function CategoryForm({filename, handleFormSubmit, initialValues, checkoutSchema,setCategory, dropzoneError, getRootProps, getInputProps, files}){
    // console.log(files.leng);
    return (
        
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
                        variant="outlined"
                        type="text"
                        label="Category"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.category}
                        name="category"
                        error={!!touched.category && !!errors.category}
                        helperText={touched.category && errors.category}
                        sx={{ gridColumn: "span 4" }}
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
                        {files.length === 0 ? 
                            <EditImagePreview filename={filename} /> : ""
                        }
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
    );
}


export default CategoryForm;